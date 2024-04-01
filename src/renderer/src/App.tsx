import { Content, NewNoteBUtton, RootLayout, Sidebar } from '@/components'
import { NotePreviewList } from '@renderer/components/Notes/NotePreviewList'
import MarkDownEditor from '@/components/MarkDownEditor'
import { useCallback, useRef, useState } from 'react'

function App() {
  const minDrawerWidth = 50
  const maxDrawerWidth = 1000
  const [width, setWidth] = useState(350)
  const sidebarRef = useRef(null)

  const resizerRef = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const resetScroll = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo(0, 0)
    }
  }

  const handleMouseDown = () => {
    document.addEventListener('mouseup', handleMouseUp, true)
    document.addEventListener('mousemove', handleMouseMove, true)
  }

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp, true)
    document.removeEventListener('mousemove', handleMouseMove, true)
  }

  const handleMouseMove = useCallback((e) => {
    const newWidth = e.clientX - document.body.offsetLeft
    if (newWidth > minDrawerWidth && newWidth < maxDrawerWidth) {
      setWidth(newWidth)
    }
  }, [])
  return (
    <RootLayout>
        <NewNoteBUtton width={width}/>
      <Sidebar width={width}>
        <NotePreviewList onSelect={resetScroll} />
      </Sidebar>
      <div
        className="w-[1px] hover:w-1 cursor-col-resize  bg-zinc-600"
        ref={resizerRef}
        onMouseDown={handleMouseDown}
      />
      <Content className=" border-l bg-zinc-900/50 border-l-white/20 " ref={contentRef}>
        <MarkDownEditor />
      </Content>
    </RootLayout>
  )
}

export default App
