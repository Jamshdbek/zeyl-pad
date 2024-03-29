import { appDirectory, fileEncoding } from '@shared/constats'
import { NoteInfo } from '@shared/models'
import { CreateNote, GetNotes, ReadNote, WriteNote } from '@shared/types'
import { ensureDir, readFile, readdir, stat, writeFile, writeFileSync } from 'fs-extra'
import { homedir } from 'os'
import fs from 'fs-extra'
import { dialog } from 'electron'
import path from 'path'
export const getRootDirectory = () => {
  // return `${homedir}/${appDirectory}`
  // return `${homedir}/${appDirectory}`
  const homeDir = homedir()
  return path.join(homeDir, 'zeylipad')
}

export const getNotes: GetNotes | any = async () => {
  const rootDir = getRootDirectory()

  await ensureDir(rootDir)

  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const notes = notesFileNames.filter((fileName) => fileName.endsWith('.md'))

  // if (isEmpty(notes)) {
  //   console.info('No notes found, creating a welcome note')

  //   const content = await readFile(welcomeNoteFilename, { encoding: fileEncoding })

  //   // create the welcome note
  //   await writeFile(`${rootDir}/${welcomeNoteFilename}`, content, { encoding: fileEncoding })

  //   notes.push(welcomeNoteFilename)
  // }

  return Promise.all(notes.map(getNoteInfoFromFilename))
}

export const getNoteInfoFromFilename = async (filename: string): Promise<NoteInfo> => {
  const fileStats = await stat(`${getRootDirectory()}/${filename}`)

  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}

export const readNote: ReadNote = async (filename) => {
  const rootDir = getRootDirectory()
  return readFile(`${rootDir}/${filename}.md`, { encoding: fileEncoding })
}

export const writeNote: WriteNote = async (filename, content) => {
  const rootDir = getRootDirectory()
  return writeFile(`${rootDir}/${filename}.md`, content, { encoding: fileEncoding })
}

export const createNote: CreateNote | any = async () => {
  const rootDir = getRootDirectory()
  await ensureDir(rootDir)

  const { filePath, canceled } = await dialog.showSaveDialog({
    title: 'New note',
    defaultPath: `${rootDir}/Untitled.md`,
    buttonLabel: 'Create',
    properties: ['showOverwriteConfirmation'],
    showsTagField: false,
    filters: [{ name: 'Markdown', extensions: ['md'] }]
  })

  if (canceled || !filePath) {
    console.info('Note creation canceled')
    return false
  }

  const { name: filename } = path.parse(filePath)

  console.info(`Creating note: ${filePath}`)
  await writeFile(filePath, '')

  return filename
}

// yarn typecheck:web
