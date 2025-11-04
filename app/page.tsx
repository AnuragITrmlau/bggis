"use client"

import { useState, useEffect } from "react"
import HeartAnimation from "@/components/heart-animation"
import FloatingAnimals from "@/components/floating-animals"
import MessageSection from "@/components/message-section"
import InteractiveButtons from "@/components/interactive-buttons"

export default function Home() {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 500)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden relative">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gradient-to-br from-rose-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Floating animals */}
      <FloatingAnimals />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:py-8">
        {/* Heart animation at top */}
        <div className="mb-8 md:mb-12">
          <HeartAnimation />
        </div>

        {/* Main message container */}
        {showMessage && (
          <div className="animate-fadeIn max-w-2xl w-full">
            <MessageSection />
          </div>
        )}

        {/* Interactive buttons */}
        <div className="mt-12 md:mt-16 w-full">
          <InteractiveButtons />
        </div>
      </div>
    </div>
  )
}
