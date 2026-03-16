import React, { useEffect, useState } from "react"
import styles from "./Image.module.scss"
import { Loader } from "@/components"

export interface IImageProps {
  url: string
}

export const ImageListItem: React.FC<IImageProps> = ({ url }) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (url) {
      const image = new Image()
      image.onload = () => {
        setImageSrc(url)
      }

      image.onerror = () => {
        setImageSrc(undefined)
      }

      image.src = url

      return () => {
        image.onload = null
        image.onerror = null
        image.src = ""
        setImageSrc(undefined)
      }
    } else {
      setImageSrc(undefined)
    }
  }, [url])

  return (
    <li className={styles.image}>
      {imageSrc ? <img src={imageSrc} alt={url} /> : <Loader />}
    </li>
  )
}

export default ImageListItem
