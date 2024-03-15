import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import {VscFiles} from "react-icons/vsc"
export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen bg-zinc-700', className)} {...props}>
      {children}
    </main>
  )
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={twMerge('w-[250px] pl-[52px] h-[100vh + 10px] overflow-auto', className)}
      {...props}
    >
      <div className="w-[50px] h-[100vh] pt-2  bg-zinc-800 fixed top-0 left-0 justify-center items-center m-auto"><VscFiles className="m-auto text-lg cursor-pointer" /></div>
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
