import React, { useCallback, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import DragComponent from '../DragComponent'
import './style.css'

export default function SectionComponent({
  el,
  task,
  setTask,
  setSections,
  sections,
}) {
  console.log(sections)

  const deleteCard = useCallback(() => {
    let removed = sections.filter((removeItem) => removeItem.id !== el.id)
    setSections(removed)
    let removedTask = task.filter((x) => x.sectionId !== el.id)
    setTask(removedTask)
  })

  const [, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item) => {
      task.map((x) => {
        if (x.id === item.id) {
          return { ...x, sectionId: el.id }
        }
        return x
      })
      setTask((prevTask) =>
        prevTask.map((x) => {
          if (x.id === item.id) {
            return { ...x, sectionId: el.id }
          }
          return x
        }),
      )
    },
  }))

  return (
    <div
      ref={drop}
      role={'Dustbin'}
      className="section_box"
      style={{ background: `${el.color}` }}
    >
      <span className="deleteCard" onClick={deleteCard}>
        &#x2716;
      </span>

      <h3>{el.title}</h3>
      {Array.isArray(task)
        ? task
            .filter((e) => e.sectionId === el.id)
            .map((taskEl) => (
              <DragComponent
                taskEl={taskEl}
                key={taskEl.id}
                task={task}
                setTask={setTask}
              />
            ))
        : null}
    </div>
  )
}
