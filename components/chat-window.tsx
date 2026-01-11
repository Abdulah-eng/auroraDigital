"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, X, Send, Loader2, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "./ui/button"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm the AI assistant for Aurora Digital. I'm here to help answer questions about our services, projects, and how we can help bring your digital vision to life. How can I assist you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      // Build conversation history for the API
      const history = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }))

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history: history,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // If there's a fallback message, use it
        if (data.fallback) {
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: data.fallback },
          ])
          return
        }
        throw new Error(data.error || "Failed to get response")
      }

      if (data.response) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response },
        ])
      } else if (data.fallback) {
        // Use fallback message if available
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.fallback },
        ])
      } else {
        throw new Error(data.error || "Failed to get response")
      }
    } catch (error: any) {
      console.error("Error sending message:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I'm having trouble processing your request right now. Please try again later or contact us directly at shafiqueabdurrehman@gmail.com",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#1C437E] hover:bg-[#153A6B] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center w-16 h-16"
        aria-label="Open chat"
      >
        <Bot className="w-6 h-6" />
      </button>
    )
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300 ${
        isMinimized
          ? "w-80 h-16"
          : "w-[90vw] sm:w-96 h-[600px] max-h-[80vh]"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-[#1C437E] rounded-t-2xl">
        <div className="flex items-center gap-2 text-white">
          <Bot className="w-5 h-5" />
          <span className="font-semibold">Aurora Digital AI</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white hover:bg-white/20 p-1 rounded transition-colors"
            aria-label={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? (
              <Maximize2 className="w-4 h-4" />
            ) : (
              <Minimize2 className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 p-1 rounded transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-[#1C437E] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === "user"
                    ? "bg-[#1C437E] text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                }`}
                >
                  <p className="text-sm whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      You
                    </span>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-violet-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg px-4 py-2">
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1C437E] focus:border-transparent text-sm"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-[#1C437E] hover:bg-[#153A6B] text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
