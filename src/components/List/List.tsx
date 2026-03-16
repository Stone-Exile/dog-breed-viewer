import type React from "react"
import styles from "./List.module.scss"
import { type IBreed } from "@/lib"
import { ListItem } from "@/components"

export interface IListProps {
  items: IBreed[]
  selectedItem: string
  onChange: (breed: string) => void
}

export const List: React.FC<IListProps> = ({ items, selectedItem, onChange }) => {
  return (
    <ul className={styles.list}>
      {items.map((breed: IBreed) => (
        <ListItem key={breed.name} {...breed} onChange={onChange} selected={selectedItem === breed.name} />
      ))}

	  {items.length === 0 && <p className={styles.no_results}>No breeds match your search.</p>}
    </ul>
  )
}
