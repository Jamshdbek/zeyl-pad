import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  Button,
  MDXEditor,
  UndoRedo,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  toolbarPlugin
} from '@mdxeditor/editor'
import { useMarkDownEditor } from '@renderer/hooks/markDownEditor';
import img from "@/assets/backround.jpg"
import long from "@/assets/long.jpg"
function MarkDownEditor() {
  const { selectedNote, editorRef, handleAutoSave, handleBlur } = useMarkDownEditor()
  if (selectedNote == null) {
    return (
      <div className="w-full text-center m-auto opacity-[0.5] items-center min-h-[100vh]">
        no note selected
      </div>
    )
  }
  return (
    <div>
      <img src={long} alt="phhto" className=' absolute  bg-transparent  ' />
      <div   className='w-full absolute blur-[20px]'/>
    <MDXEditor
      className="dark-theme dark-editor"
      key={selectedNote.title}
      ref={editorRef}
      onChange={handleAutoSave}
      onBlur={handleBlur}
      markdown={selectedNote.content}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <Button />
              <BlockTypeSelect/>
            </>
          )
        })
      ]}
      contentEditableClassName="z-20 w-full outline-none min-h-screen max-x-none text-lg px-8 py-5 caret-wite-500 prose-invert prose-headings:text-white  "
      />
  </div>
  )
}

export default MarkDownEditor
