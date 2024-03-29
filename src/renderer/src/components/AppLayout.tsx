import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { VscFiles } from 'react-icons/vsc'
export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen bg-zinc-700', className)} {...props}>
      {children}
    </main>
  )
}
// ComponentProps<'aside'>
export const Sidebar = ({ className, children, width, ...props }: any) => {
  return (
    <aside
      style={{ width: `${width / 16}rem` }}
      className={twMerge('w-[350px] pt-3 px-2 h-[100vh + 10px] overflow-auto', className)}
      {...props}
    >
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
