import { ActionButton } from '@/components/Button'
import { createNote } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { useRef, useState } from 'react'
import { GrFormCheckmark } from 'react-icons/gr'
import { VscNewFile } from 'react-icons/vsc'

export const NewNoteBUtton = () => {
  const createEmptyNote = useSetAtom(createNote)
  const [isOpen, setOpen] = useState(false)
  const [newFileName, setNewFileName] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFileName(event.target.value)
  }
  const handleCreate = async () => {
    await createEmptyNote(newFileName)
    setNewFileName('')
  }
  return (
    <div className="flex fixed bg-black">
      <VscNewFile
        className="text-[20px] bg-black text-white m-1 mt-1 "
        onClick={() => setOpen(true)}
      />
      {isOpen && (
        <>
          <input
            type="text"
            placeholder="Type something..."
            className=" text-white min-h-3 "
            id="filename"
            value={newFileName}
            onChange={handleInputChange}
          />
          <ActionButton
            onClick={handleCreate}
            className="w-full p-2 text-center justify-center  flex items-center gap-1"
          >
            <GrFormCheckmark onClick={handleCreate} />
          </ActionButton>
        </>
      )}
    </div>
  )
}
