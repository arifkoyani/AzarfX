"use client";

import { Download, ArrowRight, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ImageSlider from "../components/ImageSlider"
import DownloadSection from "../components/DownloadSection"

export default function Home() {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    alert("AzarfX , azfar and arifkoyani creations , let start Bloging")
    const interval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const blogPosts = [
    {
      title: "DeepSeek",
      description: "Learn about the latest features in Next.js 13 and how to build modern web applications with the most popular React framework.",
      downloadLink: "#"
    },
    {
      title: "MetaMind",
      description: "Discover the best practices for building scalable React applications, including hooks, state management, and performance optimization.",
      downloadLink: "#"
    },
    {
      title: "BlockHealth",
      description: "A blockchain-based healthcare application ensuring secure and transparent patient data management, improving interoperability across medical institutions",
      downloadLink: "#"
    },
    {
      title: "QuantumLeap",
      description: "Deep dive into TypeScript and learn how to write type-safe code that scales with your application.",
      downloadLink: "#"
    },
    {
      title: "EdgeNet",
      description: "Learn techniques to optimize your web applications for better performance and user experience.",
      downloadLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(22,22,24)] to-[rgb(0,0,0)]">
      {/* Navbar */}
      <nav className="bg-white/10  backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white text-xl font-bold">AzarfX</span>
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-white hover:text-pink-200 transition-colors">Home</a>
                  <a href="#" className="text-white hover:text-pink-200 transition-colors">About</a>
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="pl-8 pr-4 py-1 rounded-full bg-white/10 text-white placeholder:text-white/70 border-none focus:ring-2 focus:ring-pink-300"
                    />
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/70 h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:text-pink-200 hover:bg-white/10">
                Sign In
              </Button>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </nav>


      <main className="flex min-h-screen">
      <div className="w-1/2">
        <ImageSlider />
      </div>
      <div className="w-1/2">
        <DownloadSection />
      </div>
    </main>

      {/* Main Content */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="hidden lg:block col-span-2">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-40 rounded-lg overflow-hidden animate-pulse"
                  style={{
                    backgroundImage: `url(https://source.unsplash.com/random/300x400?tech=${i})`,
                    backgroundSize: 'cover',
                    animation: `float ${2 + i}s ease-in-out infinite`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform hover:scale-[1.02] transition-all">
                <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
                <p className="text-white/90 mb-4">{post.description}</p>
                <div className="flex items-center">
                  <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
                    Download Now
                    <Download className={`h-4 w-4 ${isBlinking ? 'animate-bounce' : ''}`} />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block col-span-2">
            <div className="space-y-4">
              {[4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-40 rounded-lg overflow-hidden animate-pulse"
                  style={{
                    backgroundImage: `url(https://source.unsplash.com/random/300x400?coding=${i})`,
                    backgroundSize: 'cover',
                    animation: `float ${2 + i}s ease-in-out infinite`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">AzarfX</h3>
              <p className="text-white/70">Empowering developers with cutting-edge tech resources and tutorials.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Tech Stack</h4>
              <ul className="space-y-2 text-white/70">
                <li>Next.js</li>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 text-white placeholder:text-white/70 border-none"
                />
                <Button className="bg-pink-500 hover:bg-pink-600">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/70">
            <p>&copy; {new Date().getFullYear()} AzarfX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}