import { SidebarType } from '@shared/types'
import { twMerge } from 'tailwind-merge'
export const Sidebar = ({ className, children, width, ...props }: SidebarType) => {
  return (
    <div
      style={{ width: `${width / 16}rem` }}
      className={twMerge('w-[350px]   h-[100vh + 10px] hover:overflow-auto', className)}
      {...props}
    >
      {children}
    </div>
  )
}
