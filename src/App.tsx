import { Gamepad2, Loader2, Sparkles, Swords } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePlayClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGameStarted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 p-2 sm:p-4 sm:flex sm:items-center sm:justify-center">
      {/* Sparkle effects - hidden on mobile */}
      <div className="hidden md:block fixed top-20 left-1/4 text-yellow-400 opacity-70 animate-pulse">
        <Sparkles size={20} />
      </div>
      <div className="hidden md:block fixed top-1/3 right-1/4 text-red-400 opacity-70 animate-pulse">
        <Sparkles size={16} />
      </div>
      <div className="hidden md:block fixed bottom-1/3 left-1/3 text-blue-400 opacity-70 animate-pulse">
        <Sparkles size={18} />
      </div>
      
      <div className="w-full max-w-4xl pt-6 sm:pt-0">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-6 relative">
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-yellow-500 opacity-40 rotate-45 hidden lg:block">
            <Swords size={60} />
          </div>
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-red-500 opacity-40 -rotate-45 hidden lg:block">
            <Swords size={60} />
          </div>
          
          <Gamepad2 className="text-yellow-400 mx-auto mb-2 sm:mb-3" size={40} />
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-2 sm:mb-3 px-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-emerald-400">
              MYSTIC ADVENTURE
            </span>
          </h1>
          
          <div className="h-1 w-32 sm:w-48 mx-auto bg-gradient-to-r from-yellow-500 via-red-500 to-emerald-500 opacity-70 mb-2 sm:mb-3"></div>
          <p className="text-emerald-200 text-sm sm:text-lg font-bold">✦ Embark on an epic journey ✦</p>
        </div>

        {/* Game Container */}
        <div className="relative">
          <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-4 sm:w-6 h-4 sm:h-6 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-yellow-500 opacity-70"></div>
          <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-4 sm:w-6 h-4 sm:h-6 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-red-500 opacity-70"></div>
          <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 w-4 sm:w-6 h-4 sm:h-6 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-blue-500 opacity-70"></div>
          <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 w-4 sm:w-6 h-4 sm:h-6 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-emerald-500 opacity-70"></div>
          
          <div className="bg-gradient-to-br from-yellow-500/10 via-red-500/10 to-emerald-500/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-1 border-2 border-yellow-500/40">
            <div className="bg-slate-900/70 rounded-lg sm:rounded-xl p-2 sm:p-3">
              <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative">
                {gameStarted && (
                  <iframe
                    src="/game/index.html"
                    title="Mystic Adventure"
                    className="w-full h-full rounded-lg border-0 absolute top-0 left-0"
                    allowFullScreen
                  />
                )}

                {/* Play Button */}
                {!gameStarted && !loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900/95 via-emerald-900/85 to-slate-900/95 rounded-lg">
                    <button onClick={handlePlayClick} className="group relative">
                      <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl sm:blur-2xl opacity-25 group-hover:opacity-35"></div>
                      <div className="bg-gradient-to-br from-yellow-400 via-red-500 to-blue-500 p-0.5 sm:p-1 rounded-full">
                        <div className="bg-gradient-to-br from-yellow-500 via-red-500 to-emerald-500 text-white rounded-full p-6 sm:p-8 transition-transform group-hover:scale-110">
                          <Gamepad2 size={40} className="sm:w-14 sm:h-14" />
                        </div>
                      </div>
                      <Sparkles className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 text-yellow-300" size={16} />
                      <Sparkles className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 text-blue-300" size={14} />
                    </button>
                    <div className="absolute bottom-4 sm:bottom-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-emerald-400 text-lg sm:text-2xl font-black px-4">
                      ✦ CLICK TO PLAY ✦
                    </div>
                  </div>
                )}

                {/* Loading */}
                {loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900/98 via-emerald-900/92 to-slate-900/98 rounded-lg">
                    <Loader2 size={48} className="sm:w-16 sm:h-16 text-yellow-400 animate-spin mb-3 sm:mb-4" />
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-emerald-400 text-xl sm:text-2xl font-black mb-2 px-4 text-center">
                      Loading Adventure...
                    </p>
                    <p className="text-emerald-300 text-xs sm:text-sm mb-3 sm:mb-4">✦ Preparing your journey ✦</p>
                    <div className="w-48 sm:w-64 h-2 sm:h-3 bg-slate-800/90 rounded-full overflow-hidden border border-yellow-500/40 sm:border-2">
                      <div className="h-full bg-gradient-to-r from-yellow-400 via-red-500 to-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        {gameStarted && (
          <div className="text-center mt-3 sm:mt-4">
            <div className="inline-block bg-gradient-to-r from-yellow-500/10 to-emerald-500/10 backdrop-blur-sm border border-yellow-500/30 sm:border-2 rounded-full px-3 sm:px-5 py-1.5 sm:py-2">
              <p className="text-emerald-200 text-xs sm:text-sm font-medium">
                ⌨️ Arrow keys • Z/Enter • X/Esc
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App