import { IconBrandTwitter } from '@tabler/icons-react'
import Link from 'next/link'

import { Theme } from './Theme'

export const Header = () => {
  return (
    <header className='mb-5 flex items-center md:mb-10'>
      <span className='text-md whitespace-nowrap font-bold md:text-lg'>
        <span className='cursor-default pr-2 dark:text-white dark:opacity-75'>Aoba</span>
      </span>
      <nav className='flex grow items-center justify-end gap-1 font-mono text-xs md:gap-3'>
        <Theme />
        <Link href={'/about'} className='p-2 hover:bg-gray-300 hover:bg-opacity-40 dark:text-white dark:opacity-75'>
          About
        </Link>
        <Link href={'https://twitter.com/aoba__S'} className='flex items-center gap-x-1 p-2 hover:bg-gray-300 hover:bg-opacity-40'>
          <IconBrandTwitter className='h-4 w-4 fill-blue-600 stroke-blue-600' />
          <span className='dark:text-white dark:opacity-75'>Follow me</span>
        </Link>
      </nav>
    </header>
  )
}
