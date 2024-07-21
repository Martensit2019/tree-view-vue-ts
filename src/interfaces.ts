export interface ITreeNode {
  id: number
  name: string
  children?: ITreeNode[]
  expanded?: boolean
  isSelected?: boolean
}