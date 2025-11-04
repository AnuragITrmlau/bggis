"use client"

export default function FloatingAnimals() {
  // Using high-quality cartoon animal illustrations
  const animals = [
    { emoji: "🐧", size: "w-32 h-32", top: "10%", left: "8%", delay: "0s" },
    { emoji: "🐶", size: "w-28 h-28", top: "65%", right: "10%", delay: "2s" },
    { emoji: "🐱", size: "w-32 h-32", top: "35%", right: "8%", delay: "4s" },
    { emoji: "🐘", size: "w-36 h-36", top: "55%", left: "6%", delay: "1.5s" },
    { emoji: "🥔", size: "w-28 h-28", top: "25%", left: "12%", delay: "3s" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {animals.map((animal, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            ...(animal.top && { top: animal.top }),
            ...(animal.left && { left: animal.left }),
            ...(animal.right && { right: animal.right }),
            animation: "float 8s ease-in-out infinite",
            animationDelay: animal.delay,
          }}
        >
          <div className={`${animal.size} filter drop-shadow-lg opacity-80 hover:opacity-100 transition-opacity`}>
            <div className="text-center animate-pulse-slow">{animal.emoji}</div>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-40px) translateX(20px) rotate(5deg);
            opacity: 0.85;
          }
          50% {
            transform: translateY(-60px) translateX(-15px) rotate(-5deg);
            opacity: 0.9;
          }
          75% {
            transform: translateY(-30px) translateX(25px) rotate(3deg);
            opacity: 0.8;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
