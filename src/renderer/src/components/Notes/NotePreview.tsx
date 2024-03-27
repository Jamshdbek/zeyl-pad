import { cn, formatDateFromMs } from '@renderer/utils'

export type NotePreviewProps = {
  isActive?: boolean
  lastEditTime: number
  className: string
  title: string
}

export const NotePreview = ({
  isActive,
  lastEditTime,
  className,
  title,
  ...props
}: NotePreviewProps | any) => {
  const date = formatDateFromMs(lastEditTime)
  return (
    <div
      className={cn(
        'mt-1 cursor-pointer px-3  py-3 rounded-md transition-colors duration-75 ',
        {
          'bg-zinc-500/50': isActive,
          'hover:bg-zinc-600': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className=" mb-1 font-bold truncate">{title}</h3>
      <span className=" inline-block w-full mb-2 text-xs font-light text-left">{date}</span>
    </div>
  )
}
