import React, { useEffect, useState } from 'react'

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="absolute top-4 right-4 px-3 py-1 bg-yellow-300 dark:bg-gray-800 text-black dark:text-white rounded"
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}

export default DarkModeToggle
