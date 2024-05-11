import { IoMdSettings } from 'react-icons/io'
import { FiFolder } from 'react-icons/fi'
export const ToolBarView = () => {
  return (
    <div
      className=" max-w-[2
      0px]  float-end fixed  items-center right-0 min-h-[10vh] p-4 bottom-0"
    >
      <IoMdSettings className=" cursor-pointer text-lg" onClick={() => alert('Settings')} />
      <br />
      <FiFolder className=" cursor-pointer" />
    </div>
  )
}
