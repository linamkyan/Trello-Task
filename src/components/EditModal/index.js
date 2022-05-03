import React, { useState } from 'react'
import { CloseModalEdit } from '../../store/reducer'
import { useDispatch } from 'react-redux'

export default function EditModal({ taskEl, task, setTask, sections }) {
  const dispatch = useDispatch()

  const handleClickEdit = () => {
    dispatch(CloseModalEdit())
  }

  const [changeTask, setChangeTask] = useState(taskEl)

  const editTasks = ({ target }) => {
    const { name, value } = target
    const editTask = {
      ...changeTask,
      [name]: value,
    }

    setChangeTask(editTask)
  }

  const editInput = () => {
    setTask((prevTask) =>
      prevTask.map((item) => (item.id === changeTask.id ? changeTask : item)),
    )
    handleClickEdit()
  }

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
