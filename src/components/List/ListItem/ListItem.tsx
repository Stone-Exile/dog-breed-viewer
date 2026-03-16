import type React from "react"
import styles from "./ListItem.module.scss"

export interface IListItemProps {
  name: string
  selected: boolean
  onChange: (breed: string) => void
}

export const ListItem: React.FC<IListItemProps> = ({
  name,
  selected,
  onChange,
}) => {
  return (
    <li
      className={`${styles.list_item} ${selected ? styles.selected : ""}`}
      onClick={() => onChange(name)}
    >
      {name}
    </li>
  )
}

export default ListItem
