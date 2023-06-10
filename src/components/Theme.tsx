'use client'

import { IconMoon, IconSunHigh } from '@tabler/icons-react'
import { useState } from 'react'

export const Theme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const handleToggleDarkMode = () => {
    // htmlタグにdarkクラスが含まれているかどうか
    if (document.documentElement.classList.contains('dark')) {
      // darkクラスが含まれているならライトモードに変更
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setTheme('light')
    } else {
      // darkクラスが含まれていないならダークモードに変更
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setTheme('dark')
    }
  }
  return (
    <div className='rounded-full p-1 shadow-lg shadow-amber-300 hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-40'>
      {theme === 'dark' ? (
        <IconSunHigh className='h-6 w-6 fill-amber-300 stroke-amber-300' onClick={handleToggleDarkMode} />
      ) : (
        <IconMoon className='h-6 w-6 fill-amber-300 stroke-amber-300' onClick={handleToggleDarkMode} />
      )}
    </div>
  )
}
