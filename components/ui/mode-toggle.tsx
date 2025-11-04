'use client'

import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTransitionTheme } from '@/hooks/use-transition-theme'
import { useEffect, useState } from 'react'

export function ModeToggle() {
  const { setTransitionTheme, theme } = useTransitionTheme()
  const [mounted, setMounted] = useState(false)

  // 确保只在客户端渲染，避免水合错误
  useEffect(() => {
    setMounted(true)
  }, [])

  // 在服务器端渲染时返回一个占位符，避免水合不匹配
  if (!mounted) {
    return (
      <Button
        size="sm"
        className='cursor-pointer'
        disabled
      >
        <Sun className="w-4 h-4" />
      </Button>
    )
  }

  return (
    <Button
      onClick={() => setTransitionTheme(theme === 'light' ? 'dark' : 'light', theme === 'light' ? 'bottom' : 'top')}
      size="sm"
      className='cursor-pointer'
    >
      {theme === 'light' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </Button>
  )
}