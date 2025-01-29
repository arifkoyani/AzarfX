"use client"

import { useState, useEffect } from "react"
import { FaDownload, FaArrowDown } from "react-icons/fa"

export default function DownloadSection() {
  const [isBlinking, setIsBlinking] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsBlinking((prev) => !prev)
    }, 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#101012] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Download Our App</h1>
      <p className="text-xl mb-20 text-center  ">
        Experience the future of productivity with our cutting-edge application. Download now and boost your efficiency!
      </p>
      <div className="relative ">
        <button className="bg-blue-500  hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105">
          <FaDownload className="inline-block mr-2" />
          Download App
        </button>
        <FaArrowDown
          className={`absolute -top-12 left-1/2 transform -translate-x-1/2 text-4xl text-blue-500 ${
            isBlinking ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        />
      </div>
    </div>
  )
}

