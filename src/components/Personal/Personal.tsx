import { EntryColumn } from '../EntryColumn'
import { Content } from './Content'
import { DevTitle } from './DevTitle'

export const Personal = () => {
  return (
    <div className='mb-12'>
      <DevTitle />
      <EntryColumn />
      <Content />
    </div>
  )
}
