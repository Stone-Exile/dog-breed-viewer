import type React from "react"
import { useEffect } from "react"
import { Gallery, Loader, MessageBar } from "@/components"
import { fetchQuery, type IBreedImage } from "@/lib"
import { RANDOM_IMAGES_COUNT } from "@/lib/constants"
import { useQuery, useQueryClient } from "@tanstack/react-query"

export interface IImageListProps {
  selectedBreed: string
}

export const ImageList: React.FC<IImageListProps> = ({ selectedBreed }) => {
  const queryClient = useQueryClient()
  const {
    data: images,
    isLoading,
    isError,
    error,
  } = useQuery<IBreedImage[]>({
    queryKey: ["dog_images"],
    queryFn: () =>
      fetchQuery<IBreedImage[]>(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random/${RANDOM_IMAGES_COUNT}`,
        (data) => {
          return data.message.map((url: string) => ({ url }))
        },
      ),
  })

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["dog_images"] })
  }, [queryClient, selectedBreed])

  if (isLoading) return <Loader />

  if (isError)
    return (
      <MessageBar
        alert={"An Error has occured:"}
        message={(error as Error).message}
        type="error"
      />
    )

  if (!images || images.length === 0)
    return (
      <MessageBar
        alert={"An unexpected error has occured:"}
        message="Please try again later."
        type="warning"
      />
    )

  return (
    <div>
      <Gallery items={images} />
    </div>
  )
}
