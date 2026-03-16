import styles from "./Loader.module.scss"

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader} role="status" aria-label="Loading" />
    </div>
  )
}
