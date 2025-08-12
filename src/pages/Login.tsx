import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GlassCard } from "@/components/ui/glass-card"
import { AbstractShapes } from "@/components/abstract-shapes"
import { Logo } from "@/components/logo"
import { SocialLogin } from "@/components/social-login"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log({ email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <AbstractShapes />
      
      <GlassCard className="w-full max-w-md p-8 relative z-10">
        <div className="space-y-6">
          <Logo />
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">Login</h1>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="username@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/95 border-white/20 text-gray-900 placeholder:text-gray-500 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/95 border-white/20 text-gray-900 placeholder:text-gray-500 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div className="flex justify-start">
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Forgot Password?
              </button>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 transition-all duration-300 transform hover:scale-[1.02]"
            >
              Sign in
            </Button>
          </form>
          
          <SocialLogin />
          
          <div className="text-center">
            <span className="text-sm text-muted-foreground">
              Don't have an account yet?{" "}
              <button className="text-accent hover:text-accent/80 font-medium transition-colors">
                Register for free
              </button>
            </span>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}