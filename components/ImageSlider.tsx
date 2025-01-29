"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const images = ["https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2025/01/01/edb65604-fdcd-4c35-85d0-024c55337c12_445e846b.jpg?itok=En4U4Crq&v=1735725213", "https://yt3.googleusercontent.com/3TI_5NiwBdSU0F0Kk2yM8rKyZgoFmER3aTV35l9tRwboJypO2pyyQxGsopZKwU9el3_JYOJFO8c=s900-c-k-c0x00ffffff-no-rj", "https://play-lh.googleusercontent.com/6zHw4RFJspS4jsYhCCtK6U2kurrolciMHGGKz_dRgUUNH_PBQ4pIYKjcyvwFq_gruk4D", "https://startupnews.fyi/wp-content/uploads/2024/02/shrapnel-game-gID_7.jpeg"]

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative h-screen mt-20">
      <Image src={images[currentImage] || "/placeholder.svg"} alt="App screenshot" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevImage}
          className="bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
        <p className="text-xl font-bold">Download the app just in a single click, free of cost!</p>
      </div>
    </div>
  )
}

