import { IconBrandTwitter, IconMoon } from '@tabler/icons-react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='mb-5 flex items-center md:mb-10'>
      <span className='text-md whitespace-nowrap font-bold md:text-lg'>
        <span className='cursor-default pr-2'>Aoba</span>
      </span>
      <nav className='flex grow items-center justify-end gap-1 font-mono text-xs md:gap-3'>
        <div className='rounded-full p-1 shadow-lg shadow-amber-300 hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-40'>
          <IconMoon className='h-6 w-6 fill-amber-300 stroke-amber-300' />
        </div>
        <Link href={'/about'} className='p-2 hover:bg-gray-300 hover:bg-opacity-40'>
          About
        </Link>
        <Link href={'/'} className='flex items-center gap-x-1 p-2 hover:bg-gray-300 hover:bg-opacity-40'>
          <IconBrandTwitter className='h-4 w-4 fill-blue-600 stroke-blue-600' />
          <span>Follow me</span>
        </Link>
      </nav>
    </header>
  )
}
