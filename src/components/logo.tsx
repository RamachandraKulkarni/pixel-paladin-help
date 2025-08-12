export function Logo() {
  return (
    <div className="flex items-center space-x-1 mb-8">
      {/* Stylized double chevron logo similar to the image */}
      <div className="relative">
        <div className="w-8 h-8 transform rotate-45 bg-gradient-to-br from-green-400 to-green-500 rounded-lg shadow-lg" />
        <div className="absolute top-1 left-1 w-6 h-6 transform rotate-45 bg-gradient-to-br from-green-500 to-green-600 rounded-md" />
      </div>
      <div className="relative">
        <div className="w-8 h-8 transform rotate-45 bg-gradient-to-br from-green-400 to-green-500 rounded-lg shadow-lg translate-x-2" />
        <div className="absolute top-1 left-1 w-6 h-6 transform rotate-45 bg-gradient-to-br from-green-500 to-green-600 rounded-md translate-x-2" />
      </div>
      <span className="text-sm text-muted-foreground ml-4">Your logo</span>
    </div>
  )
}