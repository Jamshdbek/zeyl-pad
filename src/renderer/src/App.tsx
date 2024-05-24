import { Content, Header, NewNoteBUtton, RootLayout, Sidebar, ToolBarView } from '@/components'
import { NotePreviewList } from '@renderer/components/Notes/NotePreviewList'
import MarkDownEditor from '@/components/MarkDownEditor'
import { useCallback, useRef, useState } from 'react'
import '@mdxeditor/editor/style.css'
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

  const handleMouseMove = useCallback((e:any) => {
    const newWidth = e.clientX - document.body.offsetLeft
    if (newWidth > minDrawerWidth && newWidth < maxDrawerWidth) {
      setWidth(newWidth)
    }
  }, [])
  return (
    <>
      <Header />
      <RootLayout>
        <Sidebar ref={sidebarRef} width={width} onMouseDown={(e: Event) => e.preventDefault()}>
          <NewNoteBUtton />
          <NotePreviewList onSelect={resetScroll} />
        </Sidebar>
        <div
          className="w-[2px]  hover:block   cursor-col-resize  bg-zinc-600"
          ref={resizerRef}
          onMouseDown={handleMouseDown}
        />
        <Content className=" border-l bg-zinc-900/50 border-l-white/20 " ref={contentRef}>
          <MarkDownEditor />
        </Content>
        <ToolBarView />
      </RootLayout>
    </>
  )
}

export default App
