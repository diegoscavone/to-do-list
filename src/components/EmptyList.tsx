import tasks from '../assets/tasks.svg'
import styles from './EmptyList.module.css'
export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <img src={tasks} alt="Icone de tarefas" />
      <span>Você ainda não tem tarefas cadastradas</span>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
