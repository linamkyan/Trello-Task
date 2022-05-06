import React, { useCallback } from 'react'
import { useDrop } from 'react-dnd'
import { useSelector, useDispatch } from 'react-redux'
import { editTaskAction, deleteTaskInSectionAction } from '../../store/action'
import { selectEditTaskRedux } from '../../store/selector'
import DragComponent from '../DragComponent'
import './style.css'

export default function SectionComponent({
  el,
  setTask,
  setSections,
  sections,
}) {
  const dispatch = useDispatch()
  const task = useSelector(selectEditTaskRedux)

  const deleteCard = useCallback(() => {
    let removed = sections.filter((removeItem) => removeItem.id !== el.id)
    setSections(removed)
    dispatch(deleteTaskInSectionAction(el))
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
      dispatch(editTaskAction({ ...item, sectionId: el.id }))
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
