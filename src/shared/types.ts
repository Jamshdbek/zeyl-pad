import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { NoteContent, NoteInfo } from './models'

export type GetNotes = () => Promise<NoteInfo[]>
export type ReadNote = (title: NoteInfo['title']) => Promise<NoteContent>
export type WriteNote = (title: NoteInfo['title'], content: NoteContent) => Promise<void>
export type CreateNote = (fileName: string) => Promise<NoteInfo['title'] | false>

/** Props type on component */
//  sidebar props

export interface SidebarType {
  className?: string
  children: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> | any
  width: number
}
