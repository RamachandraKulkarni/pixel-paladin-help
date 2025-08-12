export function AbstractShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main flowing shapes */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full animate-blob"
           style={{ background: 'var(--shape-primary)' }} />
      
      <div className="absolute top-40 right-20 w-80 h-80 rounded-full animate-blob animation-delay-2000"
           style={{ background: 'var(--shape-secondary)' }} />
      
      <div className="absolute bottom-20 left-40 w-72 h-72 rounded-full animate-blob animation-delay-4000"
           style={{ background: 'var(--shape-accent)' }} />
      
      {/* Smaller accent shapes */}
      <div className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full animate-float"
           style={{ background: 'linear-gradient(45deg, hsl(350 80% 55% / 0.3), hsl(190 80% 55% / 0.3))' }} />
      
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full animate-float animation-delay-3000"
           style={{ background: 'linear-gradient(135deg, hsl(280 60% 50% / 0.4), hsl(220 70% 60% / 0.2))' }} />
      
      <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full animate-pulse-glow"
           style={{ background: 'linear-gradient(225deg, hsl(190 80% 55% / 0.2), hsl(320 70% 60% / 0.3))' }} />
    </div>
  )
}