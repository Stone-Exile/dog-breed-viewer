import type React from "react"
import styles from "./Gallery.module.scss"
import { ImageListItem } from "./Image"
import type { IBreedImage } from "@/lib"

export interface IGalleryProps {
  items: IBreedImage[]
}

export const Gallery: React.FC<IGalleryProps> = ({ items }) => {
  return (
    <ul className={styles.gallery}>
      {items.map(({ url }) => (
        <ImageListItem key={url} url={url} />
      ))}
    </ul>
  )
}

export default Gallery
