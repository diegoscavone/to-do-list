import { Trash2 } from 'lucide-react'
import styles from './Task.module.css'

interface TaksProps {
  task: string
  isChecked: boolean
  onToggleTaskChecked: () => void
  onDelete: () => void
}

export function Task({
  task,
  isChecked,
  onToggleTaskChecked,
  onDelete
}: TaksProps) {
  return (
    <div className={styles.task}>
      <div className={styles.checkContainer}>
        <input
          type="checkbox"
          id={`checkbox-${task}`}
          checked={isChecked}
          onChange={onToggleTaskChecked}
        />
        <label htmlFor={`checkbox-${task}`}></label>
      </div>
      <p className={isChecked ? styles.paragraphChecked : ''}>{task}</p>
      <button className={styles.trashIcon}>
        <Trash2 onClick={onDelete} size={16} />
      </button>
    </div>
  )
}
