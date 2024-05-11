import {
  BoldItalicUnderlineToggles,
  Button,
  DialogButton,
  InsertImage,
  MDXEditor,
  UndoRedo,
  headingsPlugin,
  imagePlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  toolbarPlugin
} from '@mdxeditor/editor'
import { useMarkDownEditor } from '@renderer/hooks/markDownEditor'
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
        imagePlugin({
          imageUploadHandler: () => {
            return Promise.resolve('D:/')
          },
          imageAutocompleteSuggestions: ['D:/', 'D/:']
        }),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <Button />
              <InsertImage />
            </>
          )
        })
      ]}
      contentEditableClassName=" outline-none min-h-screen max-x-none text-lg px-8 py-5 caret-wite-500 prose-invert prose-headings:text-white  "
    />
  )
}

export default MarkDownEditor
