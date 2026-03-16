import styles from "./MessageBar.module.scss"

export interface IMessageBarProps {
  alert: string
  message: string
  type?: "info" | "warning" | "error"
}

export const MessageBar: React.FC<IMessageBarProps> = ({
  alert,
  message,
  type = 'error',
}) => {
  return (
    <div className={styles.message_bar + ' ' + styles[type]}>
      <span className={styles.alert}>{alert}</span>
      {message}
    </div>
  )
}
