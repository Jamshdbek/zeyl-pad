import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  // bg-zinc-700
  return (
    <main className={twMerge('flex flex-row h-screen  dark:bg-blue-700', className)} {...props}>
      {children}
    </main>
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
