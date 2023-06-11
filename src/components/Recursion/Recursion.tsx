import { EntryColumn } from '../EntryColumn'
import { Content } from './Content'
import { TeamDevTitle } from './TeamDevTitle'

export const Recursion = () => {
  return (
    <>
      <TeamDevTitle />
      <EntryColumn />
      <Content />
    </>
  )
}
