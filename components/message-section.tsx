"use client"

import { useState } from "react"

export default function MessageSection() {
  const [showExtra, setShowExtra] = useState(false)

  return (
    <div className="text-center space-y-6 backdrop-blur-md bg-gradient-to-br from-white/50 to-pink-50/40 rounded-3xl p-8 md:p-14 shadow-2xl border border-white/70 hover:border-rose-200/80 transition-all duration-500">
      <div className="space-y-3">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-fadeIn drop-shadow-sm whitespace-nowrap">
          My little penguin
        </h1>
        <p className="text-lg md:text-xl text-purple-600 font-semibold tracking-wide">From the bottom of my heart...</p>
      </div>

      <div className="space-y-5 py-8 px-2">
        <p className="text-base md:text-lg text-gray-800 leading-relaxed font-light">
          I know I have hurt you a lot, and so much. I carry that weight with me every single day. But more than that, I
          carry the realization of just how deeply I care about you and how much I regret every moment of pain I've
          caused.
        </p>

        <p className="text-base md:text-lg text-gray-800 leading-relaxed font-light">
          I have realized my mistake. It was real, it was painful, and it was on me. And I promise you, not just with
          words but with every fiber of my being - I will never hurt you like that again. This is my promise to you for
          my entire life.
        </p>

        <p className="text-base md:text-lg text-gray-800 leading-relaxed font-light">
          I will work hard. I will be better. I will cherish you forever. You deserve someone who shows up for you, who
          protects your heart like it's the most precious thing in the world - because it is.
        </p>

        {showExtra && (
          <div className="space-y-5 animate-fadeIn pt-4 border-t-2 border-pink-200">
            <p className="text-base md:text-lg text-rose-600 leading-relaxed font-light italic">
              My little penguin, please forgive me. Give me the chance to show you that I mean every word. You are my
              everything, and I will spend the rest of my life making sure you feel loved, safe, and cherished. Please
              don't let us end here. 🐧💕
            </p>

            <div className="text-5xl md:text-6xl space-x-4 pt-6 flex justify-center flex-wrap gap-4 animate-pulse">
              <span className="inline-block animate-bounce" style={{ animationDelay: "0s" }}>
                💕
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>
                🌹
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s" }}>
                💕
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.6s" }}>
                ✨
              </span>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => setShowExtra(!showExtra)}
        className="mt-6 px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-semibold text-base hover:shadow-xl hover:scale-105 hover:from-rose-500 hover:to-pink-500 transition-all duration-300 transform active:scale-95"
      >
        {showExtra ? "Show Less ▲" : "Read More ▼"}
      </button>
    </div>
  )
}
