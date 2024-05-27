// import { ActionButton } from '@/components/Button'
// import { createNote } from '@renderer/store'
// import { useSetAtom } from 'jotai'
// import { useRef, useState } from 'react'
// import { GrFormCheckmark } from 'react-icons/gr'
// import { VscChromeClose, VscNewFile } from 'react-icons/vsc'
// import { BsFeather } from 'react-icons/bs'
// interface Props {
//   width: number
// }
// export const NewNoteBUtton = ({ width }: Props) => {
//   const createEmptyNote = useSetAtom(createNote)
//   const [isOpen, setOpen] = useState(false)
//   const [newFileName, setNewFileName] = useState<string>('')

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNewFileName(event.target.value)
//   }
//   const handleCreate = async () => {
//     await createEmptyNote(newFileName)
//     setNewFileName('')
//   }
//   return (
//     <div className="flex w-full absolute pr-4">
//       {isOpen ? (
//         <>
//           <div className=" absolute  z-10 min-h-[10vh] min-w-full blur-sm "></div>
//           <div className="flex gap-1 p-2 z-20  w-full" style={{ width: `${width / 16}rem` }}>
//             <input
//               type="text"
//               placeholder="Type something..."
//               className=" text-white min-h-3 "
//               id="filename"
//               value={newFileName}
//               onChange={handleInputChange}
//             />
//             <ActionButton className="p-2">
//               <GrFormCheckmark onClick={handleCreate} className="mr-4 hover:bg-green-600" />
//             </ActionButton>
//             <ActionButton
//               className="w-full p-2 text-center justify-between"
//               onClick={() => setOpen(false)}
//             >
//               <VscChromeClose onClick={() => setOpen(false)} className=" hover:bg-red-600" />
//             </ActionButton>
//           </div>
//         </>
//       ) : (
//         <div
//           onClick={() => setOpen(true)}
//           style={{ width: `${width / 16}rem` }}
//           className=" flex gap-2 justify-center bg-blue-300  px-5 py-5 text-center items-center  rounded-lg"
//         >
//           <BsFeather className=" text-blue-700" />
//           <p className=" text-blue-700 font-mono">New Note</p>
//         </div>
//       )}
//     </div>
//   )
// }


import { ActionButton } from '@/components/Button'
import { createNote } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { VscAdd } from "react-icons/vsc";
export const NewNoteBUtton = () => {
  const createEmptyNote = useSetAtom(createNote)
  const handleCreate = async() => {
    await createEmptyNote('new ')
  }
  return (
    <ActionButton onClick={handleCreate} className="w-full p-2 text-center justify-center  flex items-center gap-1">
       <VscAdd /> <p>Adding Note</p>
    </ActionButton>
  )
}
