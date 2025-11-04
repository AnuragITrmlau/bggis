"use client"

export default function HeartAnimation() {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full absolute" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main heart */}
        <path
          d="M50,90 C20,70 10,55 10,40 C10,25 20,15 30,15 C40,15 50,25 50,35 C50,25 60,15 70,15 C80,15 90,25 90,40 C90,55 80,70 50,90 Z"
          fill="#ef4444"
          style={{
            animation: "heartbeat 1.5s ease-in-out infinite",
            filter: "drop-shadow(0 4px 12px rgba(239, 68, 68, 0.4))",
          }}
        />
        {/* Inner glow */}
        <path
          d="M50,90 C20,70 10,55 10,40 C10,25 20,15 30,15 C40,15 50,25 50,35 C50,25 60,15 70,15 C80,15 90,25 90,40 C90,55 80,70 50,90 Z"
          fill="none"
          stroke="#f87171"
          strokeWidth="2"
          opacity="0.6"
          className="animate-pulse"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute text-2xl opacity-70"
          style={{
            animation: "float-sparkle 3s ease-in-out infinite",
            left: "15%",
            top: "20%",
          }}
        >
          ✨
        </div>
        <div
          className="absolute text-2xl opacity-70"
          style={{
            animation: "float-sparkle 3s ease-in-out infinite 1s",
            right: "15%",
            top: "20%",
          }}
        >
          ✨
        </div>
        <div
          className="absolute text-2xl opacity-70"
          style={{
            animation: "float-sparkle 3s ease-in-out infinite 0.5s",
            left: "10%",
            bottom: "15%",
          }}
        >
          ✨
        </div>
        <div
          className="absolute text-2xl opacity-70"
          style={{
            animation: "float-sparkle 3s ease-in-out infinite 1.5s",
            right: "10%",
            bottom: "15%",
          }}
        >
          ✨
        </div>
      </div>

      <style jsx>{`
        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.12);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes float-sparkle {
          0%,
          100% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-15px) scale(1.2) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
