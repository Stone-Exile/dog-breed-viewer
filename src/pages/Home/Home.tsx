import { fetchQuery, type IBreed } from "@/lib"
import { ImageList } from "./ImageList"
import { List, Loader, MessageBar, Search } from "@/components"
import { useCallback, useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import styles from "./Home.module.scss"

export const Home: React.FC = () => {
  const [selectedBreed, setSelectedBreed] = useState("")
  const [search, setSearch] = useState("")

  const {
    data: breeds,
    isLoading,
    isError,
    error,
  } = useQuery<IBreed[]>({
    queryKey: ["breeds"],
    queryFn: () =>
      fetchQuery<IBreed[]>("https://dog.ceo/api/breeds/list/all", (data) => {
        return Object.keys(data.message).map<IBreed>((breed) => ({
          name: breed,
        }))
      }),
  })

  const handleBreedChange = useCallback((breed: string) => {
    setSelectedBreed(breed)
  }, [])

  const handleSearch = useCallback((value: string) => {
    setSearch(value)
  }, [])

  const searchedBreeds = useMemo(() => {
    if (!breeds) return []
    if (!search) return breeds

    return breeds.filter((breed) => breed.name.includes(search.toLowerCase()))
  }, [search, breeds])

  if (isLoading) return <Loader />

  if (isError)
    return (
      <MessageBar
        alert={"An Error has occured:"}
        message={(error as Error).message}
        type="error"
      />
    )

  if (!breeds || breeds.length === 0)
    return (
      <MessageBar
        alert={"An unexpected error has occured:"}
        message="Please try again later."
        type="warning"
      />
    )

  return (
    <main className={styles.home}>
      <aside className={styles.breed_list}>
        <Search
          placeholder={"Search for a dog breed."}
          onChange={handleSearch}
        />
        <List
          items={searchedBreeds}
          onChange={handleBreedChange}
          selectedItem={selectedBreed}
        />
      </aside>
      <section className={styles.image_list}>
        {selectedBreed ? (
          <ImageList selectedBreed={selectedBreed} />
        ) : (
          <p>Please select a breed.</p>
        )}
      </section>
    </main>
  )
}

export default Home
