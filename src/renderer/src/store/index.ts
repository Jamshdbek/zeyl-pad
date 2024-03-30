import { formatDateFromMs } from '@renderer/utils'
import { NoteContent, NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { unwrap } from 'jotai/utils'
export const notesMock: NoteInfo[] = [
  {
    title: `Welcome 👋🏻`,
    lastEditTime: new Date().getTime()
  },
  {
    title: 'Note 1',
    lastEditTime: new Date().getTime()
  },
  {
    title: 'Note 2',
    lastEditTime: new Date().getTime()
  },
  {
    title: 'Note 3',
    lastEditTime: new Date().getTime()
  }
]
const loadNotes = async () => {
  const notes = await window.context.getNotes()

  // sort them by most recently edited
  return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}

const notesAtomAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())
export const notesAtom = unwrap(notesAtomAsync, (prev) => prev)
export const selectedNoteIndexAtom = atom<number | null>(null)
// note content  -=-=--=-=-=-=-=-==-
export const selectedNoteAtomAsync = atom(async (get) => {
  const notes = get(notesAtom)
  const selectedNoteIndex = get(selectedNoteIndexAtom)
  if (selectedNoteIndex == null || !notes) {
    return null
  } else {
    const selectedNote = notes[selectedNoteIndex]
    const noteContent = await window.context.readNote(selectedNote.title)
    return {
      ...selectedNote,
      content: noteContent
    }
  }
})
export const selectedNoteAtom = unwrap(
  selectedNoteAtomAsync,
  (prev) =>
    prev ?? {
      title: '',
      content: '',
      lastEditTime: Date.now()
    }
)

export const saveNoteAtom = atom(null, async (get, set, newContent: NoteContent) => {
  const notes = get(notesAtom)
  const selectedNote = get(selectedNoteAtom)

  if (!selectedNote || !notes) return

  // save on disk
  await window.context.writeNote(selectedNote.title, newContent)
  // update
  set(
    notesAtom,
    notes.map((note) => {
      if (note.title === selectedNote.title) {
        return {
          ...note,
          lastEditTime: Date.now()
        }
      }

      return note
    })
  )
})

export const createNote = atom(null, async (get, set, fileName: string) => {
  const notes = get(notesAtom)

  if (!notes) return

  const title = await window.context.createNote(fileName)

  if (!title) return

  const newNote: NoteInfo = {
    title,
    lastEditTime: Date.now()
  }
  if (newNote) {
    notes.push(newNote)
  }
  set(notesAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)])

  set(selectedNoteIndexAtom, 0)
})

export const deleteNote = atom(null, (get, set) => {
  const notes = get(notesAtom)
  const selectedNote = get(selectedNoteAtom)

  if (!selectedNote || !notes) return

  // set(
  //   notesAtom,
  //   notes.filter((item) => item.title === selectedNote.title)
  // )

  set(selectedNoteIndexAtom, null)
})
