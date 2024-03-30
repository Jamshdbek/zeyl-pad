import {
  BoldItalicUnderlineToggles,
  InsertImage,
  KitchenSinkToolbar,
  MDXEditor,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin
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
  //   const admonitionMarkdown = `

  // :::note
  // foo
  // :::

  // :::tip
  // Some **content** with _Markdown_ syntax. Check [this component](https://virtuoso.dev/).
  // :::

  // :::info
  // Some **content** with _Markdown_ syntax.
  // :::

  // :::caution
  // Some **content** with _Markdown_ syntax.
  // :::

  // :::danger
  // Some **content** with _Markdown_ syntax.
  // :::
  // `
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
          markdownShortcutPlugin(),
          thematicBreakPlugin()
        ]}
        contentEditableClassName=" outline-none min-h-screen max-x-none text-lg px-8 py-5 caret-wite-500 prose-invert prose-headings:text-white  "
      />
      {/* <MDXEditor
        className="dark-theme dark-editor"
        markdown={admonitionMarkdown}
        plugins={[
          toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
          listsPlugin(),
          quotePlugin(),
          headingsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          imagePlugin(),
          tablePlugin(),
          thematicBreakPlugin(),
          frontmatterPlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
          // sandpackPlugin({}),
          codeMirrorPlugin({
            codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text', tsx: 'TypeScript' }
          }),
          // directivesPlugin({
          //   // directiveDescriptors: ["YoutubeDirectiveDescriptor", "AdmonitionDirectiveDescriptor"]
          // }),
          diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
          markdownShortcutPlugin()
        ]}
      /> */}
    </>
  )
}

export default MarkDownEditor
