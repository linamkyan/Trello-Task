import React, { useCallback } from 'react'
import { useDrag } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { ShowModalEdit } from '../../store/action'
import EditModal from '../EditModal'
import { selectModalDataEdit } from '../../store/selector'
import { deleteTaskAction } from '../../store/action'
import './style.css'

export default React.memo(function DragComponent({ taskEl, task }) {
  const dispatch = useDispatch()
  const { showEdit } = useSelector(selectModalDataEdit)

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'task',
      item: taskEl,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [taskEl],
  )

  const removeTask = useCallback(() => {
    dispatch(deleteTaskAction({ ...taskEl, sectionId: taskEl.id }))
  })

  const handleClickEdit = useCallback(() => {
    task.filter((editItem) => {
      if (editItem.id === taskEl.id) {
        dispatch(ShowModalEdit(editItem.id))
      }
    })
  })

  return (
    <div>
      <div
        role="Handle"
        ref={drag}
        className="task_text"
        style={{ transform: isDragging ? 'rotate(5deg)' : 'rotate(0deg)' }}
      >
        <span className="delete_task" onClick={removeTask}>
          &#x2716;
        </span>
        <span className="edit_task" onClick={handleClickEdit}>
          &#9998;
        </span>

        <h2>{taskEl.titleTask}</h2>
        <p>{taskEl.desc}</p>
        {showEdit === taskEl.id && <EditModal taskEl={taskEl} />}
      </div>
    </div>
  )
})
