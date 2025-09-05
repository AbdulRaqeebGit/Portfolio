import React, { useEffect, useState, useRef } from 'react'

export default function Carusor({ images } = {}) {
  // Default images if none provided
  const defaultImages = [
    'https://images.unsplash.com/photo-1506765515384-028b60a970df?w=1200&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80'
  ]

  const slides = images && images.length === 3 ? images : defaultImages
  const [index, setIndex] = useState(0)
  const delay = 4000 // ms
  const timerRef = useRef(null)

  useEffect(() => {
    startAuto()
    return stopAuto
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  function startAuto() {
    stopAuto()
    timerRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, delay)
  }

  function stopAuto() {
    if (timerRef.current) clearTimeout(timerRef.current)
  }

  function goTo(i) {
    setIndex(i % slides.length)
  }

  function prev() {
    setIndex((prevIdx) => (prevIdx - 1 + slides.length) % slides.length)
  }

  function next() {
    setIndex((prevIdx) => (prevIdx + 1) % slides.length)
  }

  return (
    <div className="w-full max-w-3xl mx-auto relative overflow-hidden rounded-2xl shadow-lg">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((src, i) => (
          <div key={i} className="min-w-full h-64 sm:h-80 md:h-96 flex-shrink-0">
            <img src={src} alt={`slide-${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <button
        onClick={() => { stopAuto(); prev(); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      <button
        onClick={() => { stopAuto(); next(); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-180" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { stopAuto(); goTo(i); }}
            className={`w-3 h-3 rounded-full ${i === index ? 'scale-110' : ''} bg-white/80 ring-1 ring-white/50`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
