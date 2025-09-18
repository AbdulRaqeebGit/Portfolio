import React, { useEffect, useState, useRef } from 'react'
import styles from '../styles/Carusor.module.css'
import Currency_converter from "../assets/CURRENCY-CONVERTER.png"
import AI_chat from "../assets/AI-CHAT-APP.png"
import Quiz_APP from "../assets/QUIZ-APP.png"

export default function Carusor({ images } = {}) {
  const defaultImages = [
    { link: 'https://currency-coverter-js.netlify.app/', img: Currency_converter },
    { link: 'https://kaleidoscopic-sherbet-c11a3d.netlify.app/', img: AI_chat },
    { link: 'https://js-quiz-web.netlify.app/', img: Quiz_APP }
  ]

  const slides = images && images.length === 3 ? images : defaultImages
  const [index, setIndex] = useState(0)
  const delay = 4000
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
    <div className={styles.carousel}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className={styles.slide}>
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img src={slide.img} alt={`slide-${i}`} />
            </a>
          </div>
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={() => { stopAuto(); prev(); }}
        className={`${styles.navBtn} ${styles.left}`}
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={() => { stopAuto(); next(); }}
        className={`${styles.navBtn} ${styles.right}`}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { stopAuto(); goTo(i); }}
            className={`${styles.dot} ${i === index ? styles.activeDot : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
