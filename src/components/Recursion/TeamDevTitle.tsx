import Link from 'next/link'

export const TeamDevTitle = () => {
  return (
    <div className='border-b py-2 text-sm text-gray-500'>
      <Link href={'https://recursionist.io'} className='text-blue-500 underline-offset-2 hover:underline'>
        Recursion
      </Link>{' '}
      Team Development
    </div>
  )
}
