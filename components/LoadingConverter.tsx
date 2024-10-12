import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoadingConverter() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 100
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <Loader2 className="h-12 w-12 text-purple-600 animate-spin" />
      <h2 className="text-2xl font-semibold text-gray-700">Converting Your Files</h2>
      <p className="text-gray-500">Please wait while we process your files...</p>
      <div className="max-w-xs rounded-full h-2.5 dark:bg-gray-700">
        <div 
          className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500">{Math.round(progress)}% complete</p>
    </div>
  )
}