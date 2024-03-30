import { twMerge } from "tailwind-merge"

export const Sidebar = ({ className, children, width, ...props }: any) => {
    return (
      <div
        style={{ width: `${width / 16}rem` }}
        className={twMerge('w-[350px] mt-[10vh]  px-2 h-[100vh + 10px] hover:overflow-auto', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
  