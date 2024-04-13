import { useNoteList } from '@renderer/hooks/useNoteList'
import { NotePreview } from './NotePreview'
import { isEmpty } from 'lodash'
export const NotePreviewList = ({ onSelect }) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNoteList({ onSelect })
  if(!notes) return null
  if (isEmpty(notes))
    return (
      <ul>
        <span>No notes</span>
      </ul>
    )
  return (
    <ul className="px-2">
      {notes.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          isActive={selectedNoteIndex === index}
          className=" cursor-pointer"
          onClick={handleNoteSelect(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
