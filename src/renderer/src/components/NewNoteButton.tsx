import { ActionButton } from '@/components/Button'
import { createNote } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { VscAdd } from "react-icons/vsc";
export const NewNoteBUtton = () => {
  const createEmptyNote = useSetAtom(createNote)
  const handleCreate = async() => {
    await createEmptyNote()
  }
  return (
    <ActionButton onClick={handleCreate} className=" m-2 flex items-center gap-1">
       <VscAdd />
    </ActionButton>
  )
}
