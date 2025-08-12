export function AbstractShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main flowing shapes */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full animate-blob blur-xl"
           style={{ background: 'var(--shape-primary)' }} />
      
      <div className="absolute top-40 right-20 w-80 h-80 rounded-full animate-blob animation-delay-2000 blur-lg"
           style={{ background: 'var(--shape-secondary)' }} />
      
      <div className="absolute bottom-20 left-40 w-72 h-72 rounded-full animate-blob animation-delay-4000 blur-lg"
           style={{ background: 'var(--shape-accent)' }} />
      
      {/* Electric accent shapes */}
      <div className="absolute top-1/4 left-1/2 w-64 h-64 rounded-full animate-electric blur-md"
           style={{ background: 'var(--shape-electric)' }} />
      
      {/* Smaller dynamic shapes */}
      <div className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full animate-float blur-sm"
           style={{ background: 'linear-gradient(45deg, hsl(330 90% 65% / 0.4), hsl(180 90% 60% / 0.3))' }} />
      
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full animate-float animation-delay-3000 blur-sm"
           style={{ background: 'linear-gradient(135deg, hsl(280 70% 60% / 0.5), hsl(200 80% 65% / 0.3))' }} />
      
      <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full animate-pulse-glow blur-md"
           style={{ background: 'linear-gradient(225deg, hsl(180 90% 60% / 0.3), hsl(320 80% 70% / 0.4))' }} />
      
      {/* Additional micro shapes for more life */}
      <div className="absolute top-3/4 left-1/4 w-16 h-16 rounded-full animate-electric animation-delay-1000 blur-sm"
           style={{ background: 'linear-gradient(90deg, hsl(60 100% 70% / 0.4), hsl(290 80% 70% / 0.3))' }} />
      
      <div className="absolute top-1/6 right-1/3 w-20 h-20 rounded-full animate-float animation-delay-5000 blur-sm"
           style={{ background: 'linear-gradient(270deg, hsl(330 90% 65% / 0.3), hsl(180 90% 60% / 0.4))' }} />
      
      <div className="absolute bottom-1/6 left-3/4 w-28 h-28 rounded-full animate-pulse-glow animation-delay-2500 blur-sm"
           style={{ background: 'linear-gradient(180deg, hsl(280 70% 60% / 0.4), hsl(200 80% 65% / 0.2))' }} />
    </div>
  )
}