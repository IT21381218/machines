"use client"

import { useEffect, useRef, useState } from "react"
import "../styles/scroll-video.css"

export default function ScrollVideo() {
  const videoRef = useRef(null)
  const sectionRef = useRef(null)
  const frameRef = useRef(0)
  const targetRef = useRef(0)
  const rafRef = useRef(null)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    // Ensure video metadata is loaded
    const handleLoaded = () => {
      // For short videos, set scroll distance so that video plays fully
      const duration = video.duration || 5
      const distance = window.innerHeight + duration * 1000 // adjust multiplier
      setScrollHeight(distance)
    }

    video.addEventListener("loadedmetadata", handleLoaded)
    video.load()

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section || scrollHeight === 0) return

    // Create fake scroll div
    const proxy = document.createElement("div")
    proxy.style.height = `${scrollHeight}px`
    section.parentNode.insertBefore(proxy, section.nextSibling)

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const scrollTop = -rect.top
      const progress = Math.min(Math.max(scrollTop / (scrollHeight - window.innerHeight), 0), 1)
      if (video.duration) targetRef.current = progress * video.duration

      // Lock scroll until video finishes
      if (progress < 1) {
        if (!locked) {
          document.body.style.overflow = "hidden"
          setLocked(true)
        }
      } else {
        if (locked) {
          document.body.style.overflow = ""
          setLocked(false)
        }
      }
    }

    const smoothUpdate = () => {
      const current = frameRef.current
      const target = targetRef.current
      frameRef.current = current + (target - current) * 0.2 // lerp
      if (video.duration) video.currentTime = frameRef.current
      rafRef.current = requestAnimationFrame(smoothUpdate)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    rafRef.current = requestAnimationFrame(smoothUpdate)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafRef.current)
      if (proxy.parentNode) proxy.parentNode.removeChild(proxy)
      document.body.style.overflow = ""
    }
  }, [scrollHeight, locked])

  return (
    <section ref={sectionRef} className="scrollvideo-section">
      <div className="sticky-wrapper">
        <video
          ref={videoRef}
          className="scrollvideo"
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/dwcxwpn7q/video/upload/v1762095910/machine/kling_20251102_Text_to_Video_Slow__cine_4214_0_xdjzw0.mp4"
            type="video/mp4"
          />
        </video>
        <div className="scrollvideo-overlay">
          <h1 className="scrollvideo-title">Scroll to Play Full Video</h1>
          <p className="scrollvideo-subtext">Video plays as you scroll</p>
        </div>
      </div>
    </section>
  )
}
