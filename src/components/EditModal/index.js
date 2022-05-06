import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { editTaskAction } from '../../store/action'
import { CloseModalEdit } from '../../store/action'

export default function EditModal({ taskEl }) {
  const dispatch = useDispatch()
  const [changeTask, setChangeTask] = useState(taskEl)

  const handleClickEdit = () => {
    dispatch(CloseModalEdit())
  }

  const editTasks = ({ target }) => {
    const { name, value } = target
    const editTask = {
      ...changeTask,
      [name]: value,
    }

    setChangeTask(editTask)
  }

  const editInput = useCallback(() => {
    dispatch(editTaskAction(changeTask))
    handleClickEdit()
  })

  return (
    <div className="modal_box_edit">
      <input
        name="titleTask"
        value={changeTask.titleTask}
        onChange={editTasks}
      />
      <input name="desc" value={changeTask.desc} onChange={editTasks} />
      <div className="btns">
        <button type="submit" className="addModal" onClick={editInput}>
          save
        </button>
        <button type="submit" onClick={handleClickEdit} className="closeModal">
          Close
        </button>
      </div>
    </div>
  )
}
