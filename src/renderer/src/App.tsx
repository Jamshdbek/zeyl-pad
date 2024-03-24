import { Content, NewNoteBUtton, RootLayout, Sidebar } from '@/components'
import { NotePreviewList } from '@renderer/components/Notes/NotePreviewList'
import MarkDownEditor from '@/components/MarkDownEditor'
import { useRef } from 'react'

function App() {
  const contentRef = useRef<HTMLDivElement>(null)
  const resetScroll = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo(0, 0)
    }
  }
  return (
    <RootLayout>
      <Sidebar>
        <NewNoteBUtton />
        <NotePreviewList onSelect={resetScroll} />
      </Sidebar>
      <Content className=" border-l bg-zinc-900/50 border-l-white/20 " ref={contentRef}>
        <MarkDownEditor />
      </Content>
    </RootLayout>
  )
}

export default App
