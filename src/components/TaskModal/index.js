import React from 'react'
import { CloseModalTask } from '../../store/reducer'
import { useDispatch } from 'react-redux'
import './style.css'

export default function TaskModal({
  task,
  setTask,
  addedTask,
  setAddedTask,
  sections,
}) {
  const dispatch = useDispatch()

  const handleClickTask = () => {
    dispatch(CloseModalTask())
  }

  const handleAddtask = (e) => {
    e.preventDefault()
    const titleTask = e.target.value
    const dataTitleTask = e.target.getAttribute('name')
    const dataDisk = e.target.getAttribute('name')
    const desk = e.target.value

    const newTasks = { ...addedTask }
    newTasks[dataTitleTask] = titleTask
    newTasks[dataDisk] = desk

    setAddedTask(newTasks)
  }

  const addedTasks = (e) => {
    const newTask = {
      id: new Date().getMilliseconds(),
      titleTask: addedTask.titleTask,
      desc: addedTask.desc,
      sectionId: addedTask.sectionId,
    }

    if (newTask.title === '') {
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
        onChange={handleAddtask}
      />
      <input
        placeholder="Enter a discription"
        name="desc"
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
