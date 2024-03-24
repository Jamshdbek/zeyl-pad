import { ElectronAPI } from '@electron-toolkit/preload'
import { CreateNote, GetNotes, ReadNote, WriteNote } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    // api: unknown
    context: {
      getNotes: GetNotes
      readNote: ReadNote
      writeNote: WriteNote
      createNote: CreateNote
    }
  }
}
