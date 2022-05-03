import React, { useState } from 'react'
import { CloseModal } from '../../store/reducer'
import { useDispatch } from 'react-redux'
import './style.css'

export default function Modal({ setSections, sections }) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(CloseModal())
  }

  const [addedSection, setAddedSection] = useState({
    title: '',
    color: '#00000',
  })

  const handleAdd = (e) => {
    e.preventDefault()
    const title = e.target.value
    const dataTitle = e.target.getAttribute('name')
    const dataColor = e.target.getAttribute('name')
    const color = e.target.value

    const newData = { ...addedSection }
    newData[dataTitle] = title
    newData[dataColor] = color

    setAddedSection(newData)
  }

  const added = (e) => {
    // e.preventDefault()
    const newBox = {
      id: new Date().getMilliseconds(),
      title: addedSection.title,
      color: addedSection.color,
    }

    if (newBox.title === '') {
      alert('add a title')
      return
    }
    if (sections === null) {
      sections = [newBox]
    } else {
      localStorage.setItem('section', JSON.stringify([...sections, newBox]))
      setSections([...sections, newBox])
    }

    handleClick()
  
  }

  return (
    <div className="modal_box">
      <input placeholder="Enter a title" name="title" onChange={handleAdd} />
      <input
        type="color"
        placeholder="Enter a color"
        name="color"
        onChange={handleAdd}
      />
      <div className="btns">
        <button type="submit" onClick={added} className="addModal">
          Add
        </button>
        <button type="submit" onClick={handleClick} className="closeModal">
          Close
        </button>
      </div>
    </div>
  )
}
