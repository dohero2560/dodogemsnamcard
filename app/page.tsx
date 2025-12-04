"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Gem, Phone, MessageCircle, Facebook, Instagram, Copy, Check } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  {
    name: "Facebook",
    handle: "DoDo Gems",
    href: "https://www.facebook.com/profile.php?id=100069708319153",
    icon: Facebook,
    color: "#1877F2",
  },
  {
    name: "Instagram",
    handle: "@dodo_gems",
    href: "https://instagram.com/dodo_gems",
    icon: Instagram,
    color: "#E4405F",
  },
]

export default function ContactPage() {
  const [showLineQR, setShowLineQR] = useState(false)
  const [showWeChatQR, setShowWeChatQR] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("064-883-5624")
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-[#0a1628] via-[#0f2847] to-[#081525]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Header */}
          <header className="flex flex-col items-center text-center mb-16">
            <div className="mb-6">
              <div className="inline-flex items-center gap-4 p-4 bg-linear-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 rounded-2xl backdrop-blur-sm">
                <div className="p-3 bg-linear-to-br from-cyan-400 via-teal-400 to-cyan-500 rounded-xl shadow-lg shadow-cyan-500/30">
                  <Gem className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-serif tracking-wide text-white">DoDo Gems</h1>
                  <p className="text-cyan-300/80 text-sm">Premium Paraiba Tourmaline</p>
                </div>
              </div>
            </div>
            <p className="text-cyan-300/90 text-lg max-w-md leading-relaxed font-light">
              Your trusted source for premium Paraiba tourmaline, direct from the factory
            </p>
          </header>

          {/* Main Content Grid */}
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
            {/* Left Column - Contact Methods */}
            <div className="lg:col-span-1">
              <Card className="bg-linear-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/15 overflow-hidden h-full">
                <CardContent className="p-8 space-y-4">
                  {/* Contact Us */}
                  <h2 className="text-2xl font-serif text-white mb-6">Get In Touch</h2>

                  {/* Phone */}
                  <button
                    onClick={handleCopyPhone}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl bg-linear-to-br from-cyan-500/20 to-cyan-500/5 hover:from-cyan-500/30 hover:to-cyan-500/10 border border-cyan-400/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/40 group-hover:shadow-cyan-500/60 transition-shadow shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs text-cyan-200/70 uppercase tracking-wide">Phone</p>
                      <p className="font-semibold text-white group-hover:text-cyan-300 transition-colors">064-883-5624</p>
                    </div>
                    {copiedPhone ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-cyan-300/50 group-hover:text-cyan-300" />
                    )}
                  </button>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/66648835624"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-4 p-4 rounded-2xl bg-linear-to-br from-green-500/20 to-green-500/5 hover:from-green-500/30 hover:to-green-500/10 border border-green-400/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/40 group-hover:shadow-green-500/60 transition-shadow shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs text-green-200/70 uppercase tracking-wide">WhatsApp</p>
                      <p className="font-semibold text-white group-hover:text-green-300 transition-colors">064-883-5624</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Middle Column - QR Codes */}
            <div className="lg:col-span-1">
              <Card className="bg-linear-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/15 overflow-hidden h-full">
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-2xl font-serif text-white mb-6">Quick Connect</h2>

                  {/* LINE QR */}
                  <button
                    onClick={() => setShowLineQR(true)}
                    className="w-full p-4 rounded-2xl bg-linear-to-br from-lime-500/20 to-lime-500/5 hover:from-lime-500/30 hover:to-lime-500/10 border border-lime-400/30 transition-all group cursor-pointer overflow-hidden"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#00B900] flex items-center justify-center shadow-lg shadow-lime-500/40 group-hover:shadow-lime-500/60 transition-shadow">
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.348 0 .63.285.63.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-lime-200/70 uppercase tracking-wide">LINE</p>
                        <p className="font-semibold text-white group-hover:text-lime-300 transition-colors text-sm">@dodo_gems</p>
                      </div>
                      <div className="w-32 h-32 bg-white rounded-lg p-2">
                        <img 
                          src="/lineqrcode.png" 
                          alt="LINE QR Code" 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <span className="text-xs bg-[#00B900]/20 text-lime-300 px-3 py-1 rounded-full">Tap to enlarge</span>
                    </div>
                  </button>

                  {/* WeChat QR */}
                  <button
                    onClick={() => setShowWeChatQR(true)}
                    className="w-full p-4 rounded-2xl bg-linear-to-br from-emerald-500/20 to-emerald-500/5 hover:from-emerald-500/30 hover:to-emerald-500/10 border border-emerald-400/30 transition-all group cursor-pointer overflow-hidden"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#07C160] flex items-center justify-center shadow-lg shadow-emerald-500/40 group-hover:shadow-emerald-500/60 transition-shadow">
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.007-.27-.026-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-emerald-200/70 uppercase tracking-wide">WeChat</p>
                        <p className="font-semibold text-white group-hover:text-emerald-300 transition-colors text-sm">dodogemsth</p>
                      </div>
                      <div className="w-32 h-32 bg-white rounded-lg p-2">
                        <img 
                          src="/wechatqrcode.jpg" 
                          alt="WeChat QR Code" 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <span className="text-xs bg-[#07C160]/20 text-emerald-300 px-3 py-1 rounded-full">Tap to enlarge</span>
                    </div>
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Social Links */}
            <div className="lg:col-span-1">
              <Card className="bg-linear-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/15 overflow-hidden h-full">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-serif text-white mb-6">Follow Us</h3>
                  <div className="space-y-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                      >
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-current/40 transition-transform group-hover:scale-110"
                          style={{ backgroundColor: link.color }}
                        >
                          <link.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-sm">{link.name}</p>
                          <p className="text-xs text-cyan-200/60">{link.handle}</p>
                        </div>
                        <svg className="w-4 h-4 text-cyan-300/50 group-hover:text-cyan-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ))}
                  </div>

                  {/* Premium Badge */}
                  <div className="mt-8 p-4 rounded-2xl bg-linear-to-br from-amber-500/20 to-orange-500/10 border border-amber-400/30">
                    <p className="text-xs text-amber-200/70 uppercase tracking-wide text-center font-semibold">Premium Quality</p>
                    <p className="text-xs text-amber-300/80 text-center mt-1">Direct from factory</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-white/10 text-center">
            <div className="space-y-4 text-sm">
              <p className="text-cyan-300/80">
                🌍 Connecting gem enthusiasts worldwide
              </p>
              <p className="text-cyan-200/50">© 2025 DoDo Gems. All rights reserved.</p>
              <p className="text-cyan-200/40 text-xs">Premium Paraiba Tourmaline | Direct from Factory</p>
            </div>
          </footer>
        </div>
      </div>

      {/* LINE QR Code Modal */}
      <Dialog open={showLineQR} onOpenChange={setShowLineQR}>
        <DialogContent className="bg-linear-to-br from-black/95 to-black/90 border border-white/20 max-w-md">
          <div className="flex flex-col items-center gap-6 py-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#00B900] flex items-center justify-center shadow-lg shadow-lime-500/40 mx-auto mb-4">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.348 0 .63.285.63.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Connect via LINE</h3>
              <p className="text-lime-200/70 text-sm">Scan the QR code with your LINE app</p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <img 
                src="/lineqrcode.png" 
                alt="LINE QR Code" 
                className="w-72 h-72 object-cover"
              />
            </div>
            <div className="text-center space-y-2 w-full">
              <p className="text-white font-semibold text-sm">ID: @dodo_gems</p>
              <p className="text-cyan-200/70 text-xs">Open LINE and search for our ID to connect</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* WeChat QR Code Modal */}
      <Dialog open={showWeChatQR} onOpenChange={setShowWeChatQR}>
        <DialogContent className="bg-linear-to-br from-black/95 to-black/90 border border-white/20 max-w-md">
          <div className="flex flex-col items-center gap-6 py-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#07C160] flex items-center justify-center shadow-lg shadow-emerald-500/40 mx-auto mb-4">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.007-.27-.026-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Connect via WeChat</h3>
              <p className="text-emerald-200/70 text-sm">Scan the QR code with your WeChat app</p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <img 
                src="/wechatqrcode.jpg" 
                alt="WeChat QR Code" 
                className="w-72 h-72 object-cover"
              />
            </div>
            <div className="text-center space-y-2 w-full">
              <p className="text-white font-semibold text-sm">ID: dodogemsth</p>
              <p className="text-cyan-200/70 text-xs">Open WeChat and search for our ID to connect</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
