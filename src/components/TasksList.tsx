import styles from './TasksList.module.css'
import { Task } from './Task'
import { EmptyList } from './EmptyList'
import { CirclePlus } from 'lucide-react'
import React, { useState } from 'react'

interface TaskItem {
  id: number
  task: string
  isChecked: boolean
}
export function TasksList() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<TaskItem[]>([])

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault()
    const newTaskItem: TaskItem = {
      id: tasks.length + 1,
      task: newTask,
      isChecked: false
    }
    setTasks([...tasks, newTaskItem])
    setNewTask('')
  }

  function handleToggleTaskChecked(id: number) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    )
  }

  function handleDeleteTask(id: number) {
    const newFilterTasks = tasks.filter(task => task.id !== id)
    setTasks(newFilterTasks)
  }

  const completedTasks = tasks.filter(task => task.isChecked).length

  const sortedTasks = tasks.sort(
    (a, b) => Number(a.isChecked) - Number(b.isChecked)
  )
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form onSubmit={handleCreateNewTask}>
          <input
            type="text"
            value={newTask}
            placeholder="Adicione uma nova tarefa"
            onChange={e => setNewTask(e.target.value)}
          />
          <button type="submit">
            Criar <CirclePlus size={16} />
          </button>
        </form>
      </div>
      <div className={styles.tasks}>
        <div className={styles.createdTasks}>
          <span>Tarefas criadas</span>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.completedTasks}>
          <span>Concluídas</span>
          <span>
            {completedTasks} de {tasks.length}
          </span>
        </div>
      </div>
      <div className={styles.tasksList}>
        {tasks.length === 0 ? (
          <EmptyList />
        ) : (
          sortedTasks.map(taskItem => (
            <Task
              key={taskItem.id}
              task={taskItem.task}
              isChecked={taskItem.isChecked}
              onToggleTaskChecked={() => handleToggleTaskChecked(taskItem.id)}
              onDelete={() => handleDeleteTask(taskItem.id)}
            />
          ))
        )}
      </div>
    </div>
  )
}
