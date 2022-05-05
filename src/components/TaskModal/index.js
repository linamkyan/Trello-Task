import React, { useCallback, useState } from 'react'
import { CloseModalTask } from '../../store/reducer'
import { useDispatch } from 'react-redux'
import './style.css'

export default function TaskModal({ setTask, sections }) {
  const [addedTask, setAddedTask] = useState({
    titleTask: '',
    desc: '',
    sectionId: '',
  })
  
  const dispatch = useDispatch()

  const handleClickTask = () => {
    dispatch(CloseModalTask())
  }

  const handleAddtask = ({ target }) => {
    const { name, value } = target
    setAddedTask((prevState) => {
      return { ...prevState, [name]: value }
    })
  }

  const addedTasks = (e) => {
    const newTask = {
      id: new Date().getMilliseconds(),
      ...addedTask,
      sectionId: addedTask.sectionId,
    }

    if (newTask.titleTask === '') {
      alert('add a title')
      return
    }

    newTask.sectionId = sections[0].id
    setTask((prevTask) => [...prevTask, newTask])

    handleClickTask()
  }

  return (
    <div className="modal_box">
      <input
        placeholder="Enter a title"
        name="titleTask"
        value={addedTask.titleTask}
        onChange={handleAddtask}
      />
      <input
        placeholder="Enter a discription"
        name="desc"
        value={addedTask.desc}
        onChange={handleAddtask}
      />
      <div className="btns">
        <button type="submit" onClick={addedTasks} className="addModal">
          Add
        </button>
        <button type="submit" onClick={handleClickTask} className="closeModal">
          Close
        </button>
      </div>
    </div>
  )
}
