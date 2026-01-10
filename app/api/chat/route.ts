import { NextRequest, NextResponse } from 'next/server'

const GEMINI_API_KEY = 'AIzaSyAG4y_lmu728vT3oRCY49j7UrfqPomOpnI'
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'

export async function GET() {
  return NextResponse.json({ 
    status: 'Chatbot API is running',
    timestamp: new Date().toISOString()
  })
}

export async function POST(request: NextRequest) {
  try {
    console.log('Chatbot API: Request received')
    
    const { message, conversationHistory, history } = await request.json()
    console.log('Chatbot API: Message received:', message)

    if (!message) {
      console.log('Chatbot API: No message provided')
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Build conversation history context - support both formats
    let conversationHistoryStr = conversationHistory || 'This is the start of the conversation.'
    if (history && Array.isArray(history) && history.length > 1) {
      const historyToUse = history.slice(1) // Skip the initial greeting
      conversationHistoryStr = historyToUse.map((msg: { role: string; content: string }) => {
        if (msg.role === "user") {
          return `User: ${msg.content}`
        } else if (msg.role === "model" || msg.role === "assistant") {
          return `Assistant: ${msg.content}`
        }
        return null
      }).filter(Boolean).join('\n')
    }

    // Create context for the AI about your business
    const systemPrompt = `You are a helpful customer service chatbot for Aurora Digital, a web development agency. 

Company Information:
- We are a team of 6 expert developers specializing in web development, mobile apps, and AI agents
- We have delivered 50+ successful projects
- We provide 100% client satisfaction
- Located at NUST H-12, Islamabad, Pakistan

Our Services:
1. Web Development: Scalable web applications built with Next.js, React, and modern frameworks. Fast, SEO-optimized, and designed to grow with your business.
2. Mobile App Development: Native and cross-platform mobile applications for iOS and Android. Beautiful UI/UX and seamless performance.
3. AI Agents & Automation: Intelligent AI agents, chatbots, and automation systems. Transform your business with cutting-edge AI capabilities.
4. Full-Stack Solutions: End-to-end development from concept to deployment. MVP development, scaling, and ongoing support.

Contact Information:
- Email: shafiqueabdurrehman@gmail.com
- Phone: +92 319-2165662
- Location: NUST H-12, Islamabad, Pakistan

Our Expertise:
- Full-stack web development with Next.js, React, and modern frameworks
- Native and cross-platform mobile app development
- AI agent development and intelligent automation systems
- MVP development and rapid prototyping for startups

Portfolio Highlights:
We've worked on projects including e-commerce platforms (Bedo Living, Clothique Style Hub), healthcare applications (Breast MRI), education platforms (LearnHub), business solutions, legal services, and more.

Your role:
- Help potential clients understand our services and expertise
- Answer questions about our projects, technologies, and capabilities
- Be friendly, professional, and helpful
- Provide accurate information about our services
- Encourage clients to reach out via the contact form or email for project inquiries
- Keep responses concise but informative
- Always be encouraging about our services and expertise
- If you don't know something specific, offer to connect them with our support team

Previous conversation context: ${conversationHistoryStr}

Customer's current message: ${message}

Please respond as the Aurora Digital chatbot:`

    const requestBody = {
      contents: [{
        parts: [{
          text: systemPrompt
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        }
      ]
    }

    console.log('Chatbot API: Making request to Gemini API')
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    })

    console.log('Chatbot API: Gemini response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Gemini API error:', response.status, response.statusText, errorText)
      return NextResponse.json({ 
        error: 'Failed to get AI response',
        fallback: "I'm having trouble connecting to our AI assistant right now. Please contact us directly at shafiqueabdurrehman@gmail.com or +92 319-2165662 for immediate assistance."
      }, { status: 500 })
    }

    const data = await response.json()
    console.log('Chatbot API: Gemini response data:', JSON.stringify(data, null, 2))
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const aiResponse = data.candidates[0].content.parts[0].text
      console.log('Chatbot API: AI response generated successfully')
      return NextResponse.json({ response: aiResponse })
    } else {
      console.error('Unexpected Gemini API response:', data)
      return NextResponse.json({ 
        error: 'Invalid AI response',
        fallback: "I'm having trouble processing your request right now. Please contact us directly at shafiqueabdurrehman@gmail.com or +92 319-2165662 for immediate assistance."
      }, { status: 500 })
    }

  } catch (error) {
    console.error('Chatbot API error:', error)
    return NextResponse.json({ 
      error: 'Internal server error',
      fallback: "I'm experiencing technical difficulties. Please contact us directly at shafiqueabdurrehman@gmail.com or +92 319-2165662 for immediate assistance."
    }, { status: 500 })
  }
}
