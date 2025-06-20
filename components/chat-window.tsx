"use client"

import type React from "react"
import Markdown from "react-markdown"
import { useState, useRef, useEffect } from "react"
import { X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

interface ChatWindowProps {
  isOpen: boolean
  onClose: () => void
  onNotificationChange?: (hasUnread: boolean) => void
}

export function ChatWindow({ isOpen, onClose, onNotificationChange }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm Aurora Digital's AI assistant. How can I help you with your web development project today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [pendingResponse, setPendingResponse] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Handle notification logic
  useEffect(() => {
    if (onNotificationChange) {
      onNotificationChange(pendingResponse && !isOpen)
    }
  }, [pendingResponse, isOpen, onNotificationChange])

  // Clear notification when chat is opened
  useEffect(() => {
    if (isOpen && pendingResponse) {
      setPendingResponse(false)
    }
  }, [isOpen, pendingResponse])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)
    setPendingResponse(true)

    try {
      // AI response
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: await getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])

      // If chat is closed when response arrives, show notification
      if (!isOpen) {
        setPendingResponse(true)
      } else {
        setPendingResponse(false)
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
      setPendingResponse(false)
    } finally {
      setIsTyping(false)
    }
  }

  const getBotResponse = async (userInput: string): Promise<string> => {
    try {
      const apiMessages = [
        ...messages.map((msg) => ({
          role: msg.sender === "bot" ? "model" : "user",
          parts: [{ text: msg.content }],
        })),
        {
          role: "user",
          parts: [{ text: userInput }],
        },
      ]
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      })

      const data = await res.json()
      return data.reply || "I'm sorry, I couldn't process that request. Please try again."
    } catch (e) {
      console.error("Chat API Error:", e)
      throw new Error("Failed to get response")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleClose = () => {
    onClose()
    // Don't clear pending response here - let it show notification
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 ${
          isMinimized ? "w-80 h-16" : "w-96 h-[500px]"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Aurora AI Assistant</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{isTyping ? "Typing..." : "Online now"}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4 text-slate-500" />
              ) : (
                <Minimize2 className="w-4 h-4 text-slate-500" />
              )}
            </button>
            <button
              onClick={handleClose}
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto h-80 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-400 dark:hover:scrollbar-thumb-slate-500">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-cyan-600 to-violet-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
                    }`}
                  >
                    <div className="text-sm">
                      {message.sender === "bot" ? <Markdown>{message.content}</Markdown> : message.content}
                    </div>
                  </div>
                  {message.sender === "user" && (
                    <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our services..."
                  className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors text-sm"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2 bg-gradient-to-r from-cyan-600 to-violet-600 text-white rounded-lg hover:from-cyan-700 hover:to-violet-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
