import {
  MDXEditor,
  frontmatterPlugin,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin
} from '@mdxeditor/editor'
import { useMarkDownEditor } from '@renderer/hooks/markDownEditor'
function MarkDownEditor() {
  const { selectedNote, editorRef, handleAutoSave, handleBlur } = useMarkDownEditor()
  if (selectedNote == null) {
    return (
      <div className="w-full text-center  m-auto opacity-[0.5] items-center mt-[30vh]">
        no note selected
      </div>
    )
  }

  return (
    <>
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
          frontmatterPlugin(),
          markdownShortcutPlugin(),
          thematicBreakPlugin(),
          tablePlugin()
        ]}
        contentEditableClassName=" outline-none min-h-screen max-x-none text-lg px-8 py-5 caret-wite-500 prose-invert prose-headings:text-white  "
      />
    </>
  )
}

export default MarkDownEditor
