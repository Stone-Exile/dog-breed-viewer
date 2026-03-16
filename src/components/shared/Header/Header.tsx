import dogLogo from "@/assets/icon.png"
import styles from "./Header.module.scss"

export interface IHeaderProps {
  title: string
}

export const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <span className={styles.logo_container}>
        <img src={dogLogo} alt="Dog Breeds" />
      </span>
    </header>
  )
}

export default Headers
