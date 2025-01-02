import styles from './Header.module.css'
import todoLogo from '../assets/logo-todo.svg'

export function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={todoLogo} alt="Logo do ToDo List" />
      </header>
    </div>
  )
}
