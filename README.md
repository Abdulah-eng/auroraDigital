# Aurora Digital - Portfolio Website

A modern, AI-powered portfolio website for Aurora Digital, showcasing web development, mobile apps, and AI solutions.

## Features

- 🚀 **Modern Next.js 15** application with React 19
- 🤖 **AI Chatbot** powered by Google Gemini API
- 📱 **Responsive Design** with dark mode support
- 🎨 **Beautiful UI** with Tailwind CSS and Radix UI
- 📊 **50+ Projects** portfolio showcase
- 🔥 **Firebase Integration** for lead collection

## Tech Stack

- **Framework**: Next.js 15.2.4
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **AI**: Google Generative AI (Gemini)
- **Database**: Firebase Firestore
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abdulah-eng/auroraDigital.git
cd auroraDigital
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Create a `.env.local` file:
```env
GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

4. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Vercel

### Step 1: Push to GitHub
Make sure your code is pushed to the GitHub repository.

### Step 2: Import to Vercel
1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository: `Abdulah-eng/auroraDigital`
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

### Step 3: Add Environment Variables
In Vercel project settings, add these environment variables:

```
GEMINI_API_KEY=AIzaSyBwKdSnOgVPVEzx5V4Rku1DajkQwAfwlR4
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

### Step 4: Deploy
Click "Deploy" and wait for the build to complete.

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── chat/          # AI chatbot API
│   │   └── saveLead/      # Lead collection API
│   ├── projects/          # Projects showcase page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── chat-window.tsx    # AI chatbot component
│   ├── theme-toggle.tsx   # Dark mode toggle
│   └── ui/                # Reusable UI components
├── lib/
│   ├── firebase.ts        # Firebase configuration
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Services

- **Web Development**: Next.js, React, Full-Stack Solutions
- **Mobile App Development**: iOS, Android, React Native
- **AI Agents & Automation**: Chatbots, ML, NLP
- **Full-Stack Solutions**: MVP Development, End-to-End Solutions

## Portfolio

Showcasing 50+ successful projects across:
- E-commerce platforms
- Healthcare applications
- Education platforms
- Business solutions
- Legal services
- And more...

## Team

- 6 Expert Developers
- 50+ Projects Delivered
- 100% Client Satisfaction

## License

Private - All rights reserved

## Contact

- Email: shafiqueabdurrehman@gmail.com
- Phone: +92 319-2165662
- Location: NUST H-12, Islamabad, Pakistan
