import { CreateNote, GetNotes, ReadNote, WriteNote } from '@shared/types'
import { ipcRenderer } from 'electron'
import { contextBridge } from 'electron/renderer'

if (!process.contextId) {
  throw new Error('context Isolation')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // to maker ipcRenderer available in preload
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
    readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args),
    writeNote: (...args: Parameters<WriteNote>) => ipcRenderer.invoke('writeNote', ...args),
    createNote: (...args: Parameters<CreateNote>) => ipcRenderer.invoke('createNote', ...args)
  })
} catch (error) {
  console.error(error)
}
