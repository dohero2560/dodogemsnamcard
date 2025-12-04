"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Gem, Phone, MessageCircle, Facebook, Instagram, X } from "lucide-react"

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

  return (
    <main className="min-h-screen bg-linear-to-b from-[#0a1628] via-[#0f2847] to-[#0a1628]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-12 relative z-10">
          {/* Header */}
          <header className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-linear-to-br from-cyan-400 to-teal-500 rounded-xl">
                <Gem className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-serif tracking-wide text-white">DoDo Gems</span>
            </div>
            <p className="text-cyan-300/80 text-lg max-w-md leading-relaxed">
              Looking for a Paraiba tourmaline factory? Think of us.
            </p>
          </header>

          {/* Main Content Grid */}
          <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-2">
            {/* Left Column - Contact Card */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
              <CardContent className="p-6 space-y-4">
                {/* Contact Us */}
                <h2 className="text-xl font-serif text-white mb-4">Contact Us</h2>

                {/* Phone */}
                <a
                  href="tel:0648835624"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-200/60">Phone</p>
                    <p className="font-medium text-white group-hover:text-cyan-300 transition-colors">064-883-5624</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/66648835624"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/20">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-200/60">WhatsApp</p>
                    <p className="font-medium text-white group-hover:text-[#25D366] transition-colors">064-883-5624</p>
                  </div>
                  <span className="ml-auto text-xs bg-[#25D366] text-white px-3 py-1 rounded-full">Chat Now</span>
                </a>

                {/* LINE */}
                <button
                  onClick={() => setShowLineQR(true)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#00B900]/10 hover:bg-[#00B900]/20 border border-[#00B900]/30 transition-all group cursor-pointer text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-[#00B900] flex items-center justify-center shadow-lg shadow-green-500/20 shrink-0">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.348 0 .63.285.63.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-cyan-200/60">LINE</p>
                    <p className="font-medium text-white group-hover:text-[#00B900] transition-colors">@dodo_gems</p>
                  </div>
                  <span className="ml-auto text-xs bg-[#00B900] text-white px-3 py-1 rounded-full whitespace-nowrap">Scan QR</span>
                </button>

                {/* WeChat */}
                <button
                  onClick={() => setShowWeChatQR(true)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#07C160]/10 hover:bg-[#07C160]/20 border border-[#07C160]/30 transition-all group cursor-pointer text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-[#07C160] flex items-center justify-center shadow-lg shadow-green-500/20 shrink-0">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.007-.27-.026-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-cyan-200/60">WeChat</p>
                    <p className="font-medium text-white group-hover:text-[#07C160] transition-colors">dodogemsth</p>
                  </div>
                  <span className="ml-auto text-xs bg-[#07C160]/80 text-white px-3 py-1 rounded-full whitespace-nowrap">Scan QR</span>
                </button>
              </CardContent>
            </Card>

            {/* Right Column - Social Links */}
            <div className="space-y-6">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-white mb-6">Follow Us</h3>
                  <div className="space-y-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                      >
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                          style={{ backgroundColor: link.color }}
                        >
                          <link.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{link.name}</p>
                          <p className="text-sm text-cyan-200/60">{link.handle}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tagline Card */}
              <Card className="bg-linear-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-sm border-cyan-400/20">
                <CardContent className="p-6 text-center">
                  <Gem className="h-10 w-10 text-cyan-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-serif leading-relaxed">
                    "Your trusted source for premium Paraiba tourmaline"
                  </p>
                  <p className="text-cyan-300/70 text-sm mt-2">Quality gemstones, direct from the factory</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-cyan-200/50">© 2025 DoDo Gems. All rights reserved.</p>
          </footer>
        </div>
      </div>

      {/* LINE QR Code Modal */}
      <Dialog open={showLineQR} onOpenChange={setShowLineQR}>
        <DialogContent className="bg-black/90 border-white/20 max-w-sm">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg font-serif text-white">Add LINE Friend</h3>
            <img 
              src="/lineqrcode.png" 
              alt="LINE QR Code" 
              className="w-64 h-64 rounded-lg border-2 border-[#00B900]/30"
            />
            <p className="text-sm text-cyan-200/70 text-center">Scan with LINE app to add us</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* WeChat QR Code Modal */}
      <Dialog open={showWeChatQR} onOpenChange={setShowWeChatQR}>
        <DialogContent className="bg-black/90 border-white/20 max-w-sm">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg font-serif text-white">Add WeChat Friend</h3>
            <img 
              src="/wechatqrcode.jpg" 
              alt="WeChat QR Code" 
              className="w-64 h-64 rounded-lg border-2 border-[#07C160]/30"
            />
            <p className="text-sm text-cyan-200/70 text-center">Scan with WeChat app to add us</p>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
