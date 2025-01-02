import { Header } from '../components/Header'
import { TasksList } from '../components/TasksList'
import '../styles/global.css'
import styles from './App.module.css'
export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
          <TasksList />
      </div>
    </div>
  )
}
