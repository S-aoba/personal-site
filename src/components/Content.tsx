import { IconBrandGithub } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

export const Content = () => {
  return (
    <main className=' h-full'>
      {portfolioDataList.map((portfolioData) => {
        return <ContentItem key={portfolioData.name} {...portfolioData} />
      })}
    </main>
  )
}

const ContentItem = ({ name, githubUrl, description, appUrl, thumbnail, stacks }: PortfolioDataListType) => {
  return (
    <div className='grid grid-cols-4 border-b border-gray-200 py-2'>
      <div className='col-span-1 flex items-center gap-x-2'>
        <p className='text-sm text-stone-800 dark:text-white dark:opacity-75'>{name}</p>
        <Link
          href={`${githubUrl}`}
          className='rounded-full border border-gray-200 p-1 shadow-md shadow-gray-500 hover:bg-gray-300 hover:bg-opacity-40'
        >
          <IconBrandGithub size={15} className='fill-black dark:fill-white dark:stroke-white dark:opacity-75' />
        </Link>
      </div>
      <div className='col-span-1 flex items-center text-start'>
        <p className='line-clamp-1 flex-nowrap text-sm text-stone-800 dark:text-white dark:opacity-75'>{description}</p>
      </div>
      <div className=' col-span-1 flex items-center justify-start'>
        <Link href={`${appUrl}`}>
          <Image
            src={`/${thumbnail}`}
            alt={`/${thumbnail}`}
            height={100}
            width={100}
            className='h-auto w-auto rounded shadow hover:shadow-xl'
            priority
          />
        </Link>
      </div>
      <div className='col-span-1 text-xs text-stone-800 dark:text-white dark:opacity-75'>
        <ul className='list-disc'>
          {stacks.map((stack) => {
            return <li key={stack}>{stack}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

type PortfolioDataListType = {
  name: string
  githubUrl: string
  description: string
  appUrl: string
  thumbnail: string
  stacks: string[]
}

const portfolioDataList: PortfolioDataListType[] = [
  {
    name: 'Recurrot',
    githubUrl: 'https://github.com/S-aoba/Recurrot',
    description: 'QA App',
    appUrl: 'https://recurrot.vercel.app/',
    thumbnail: 'recurrot-thumbnail3.png',
    stacks: ['TypeScript', 'NextJs', 'tailwindCss', 'jotai', 'TanStack Query'],
  },
  {
    name: 'Memory-game',
    githubUrl: 'https://github.com/S-aoba/memory-game',
    description: 'Game App',
    appUrl: 'https://memory-game-eosin-phi.vercel.app/',
    thumbnail: 'memory-game-thumbnail.png',
    stacks: ['TypeScript', 'NextJs', 'jotai', 'tailwindCss'],
  },
]
