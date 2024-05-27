import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen bg-[#0D0E10]', className)} {...props}>
      {children}
    </main>
  )
}
export const Sidebar = ({ className, children, width, ...props }: any) => {
  return (
    <aside
      style={{ width: `${width / 16}rem` }}
      className={twMerge('w-[350px] pt-3 px-2 h-[100vh + 10px] hover:overflow-auto overflow-hidden font-mono text-sm  text-[#C3CACE] ', className)}
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
