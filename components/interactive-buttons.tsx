"use client"

import { useState } from "react"

export default function InteractiveButtons() {
  const [yesClicked, setYesClicked] = useState(false)
  const [noAttempts, setNoAttempts] = useState(0)

  const handleYes = () => {
    setYesClicked(true)
  }

  const handleNo = () => {
    setNoAttempts(noAttempts + 1)
    const button = document.getElementById("no-button")
    if (button) {
      const randomX = Math.random() * 250 - 125
      const randomY = Math.random() * 250 - 125
      button.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.95)`
      setTimeout(() => {
        button.style.transform = "translate(0px, 0px) scale(1)"
      }, 500)
    }
  }

  return (
    <div className="relative flex justify-center items-center gap-6 md:gap-10 flex-wrap px-4">
      {yesClicked ? (
        <div className="text-center space-y-6 animate-fadeIn max-w-lg">
          <div className="text-7xl md:text-8xl space-x-3 flex justify-center flex-wrap gap-3">
            <span className="inline-block animate-bounce" style={{ animationDelay: "0s" }}>
              💕
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>
              ✨
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s" }}>
              🎉
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            You've Made Me The Happiest! 🥺💗
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Thank you for giving me another chance. I promise to cherish you every single day. You're my forever. 🐧
          </p>
          <div className="text-6xl md:text-7xl space-x-4 pt-6 flex justify-center flex-wrap gap-4">
            <span className="inline-block animate-spin" style={{ animationDuration: "2s" }}>
              💫
            </span>
            <span className="inline-block animate-bounce">💗</span>
            <span className="inline-block animate-spin" style={{ animationDuration: "2s" }}>
              💫
            </span>
          </div>
        </div>
      ) : (
        <>
          <button
            onClick={handleYes}
            className="px-10 py-4 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 transform active:scale-95 hover:from-rose-500 hover:via-pink-500 hover:to-rose-500"
          >
            Yes, I Forgive You! 💗
          </button>

          <button
            id="no-button"
            onClick={handleNo}
            className="px-10 py-4 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 font-bold text-lg rounded-full hover:shadow-lg transition-all duration-300 transform active:scale-95 relative"
            style={{ transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
          >
            {noAttempts < 5 ? "No... 😔" : "Click Yes! 😊"}
          </button>
        </>
      )}
    </div>
  )
}
