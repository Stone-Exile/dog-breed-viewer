import { useEffect, useState, type ChangeEvent } from "react"
import styles from "./Search.module.scss"
import { useDebounce } from "@/hooks"

export interface ISearchProps {
  defaultValue?: string
  placeholder?: string
  onChange?: (value: string) => void
}

export const Search: React.FC<ISearchProps> = ({
  defaultValue = "",
  placeholder = "Search",
  onChange,
}) => {
  const [searchValue, setSearchValue] = useState(defaultValue)

  const debouncedSearch = useDebounce(searchValue, 500)

  useEffect(() => {
    onChange?.(debouncedSearch)
  }, [debouncedSearch])

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value)
  }

  return (
    <input
      name={"search"}
      className={styles.search}
      placeholder={placeholder}
      type="text"
      onChange={handleValueChange}
    />
  )
}
