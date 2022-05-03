import React, { useEffect, useRef } from 'react'
import { useDrag } from 'react-dnd'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { ShowModalEdit } from '../../store/reducer'
import EditModal from '../EditModal'
import { selectModalDataEdit } from '../../store/selector'

export default function DragComponent({ taskEl, task, setTask }) {
  const [, drag] = useDrag(
    () => ({
      type: 'task',
      item: taskEl,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [taskEl],
  )

  function removeTask() {
    let removed = task.filter((removeItem) => removeItem.id !== taskEl.id)
    setTask(removed)
  }
  console.log(1)

  const dispatch = useDispatch()

  const { showEdit } = useSelector(selectModalDataEdit)

  const handleClickEdit = () => {
    let edited = task.filter((editItem) => {
      if (editItem.id === taskEl.id) {
        dispatch(ShowModalEdit(editItem.id))
      }
    })
  }

  return (
    <div>
      <div role="Handle" ref={drag} className="task_text">
        <span className="delete_task" onClick={removeTask}>
          &#x2716;
        </span>
        <span className="edit_task" onClick={handleClickEdit}>
          &#9998;
        </span>

        <h2>{taskEl.titleTask}</h2>
        <p>{taskEl.desc}</p>
        {showEdit === taskEl.id && (
          <EditModal task={task} setTask={setTask} taskEl={taskEl} />
        )}
      </div>
    </div>
  )
}