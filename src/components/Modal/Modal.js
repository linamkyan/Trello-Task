import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { CloseModal } from '../../store/action'
import './style.css'

export default function Modal({ setSections, sections }) {
  const dispatch = useDispatch()
  const [addedSection, setAddedSection] = useState({
    title: '',
    color: '#141414',
  })

  const handleClick = () => {
    dispatch(CloseModal())
  }

  const handleAdd = ({ target }) => {
    const { name, value } = target
    setAddedSection((prevState) => {
      return { ...prevState, [name]: value }
    })
  }

  const added = useCallback(() => {
    const newBox = {
      id: new Date().getMilliseconds(),
      ...addedSection,
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
  })

  return (
    <div className="modal_box">
      <input
        placeholder="Enter a title"
        name="title"
        value={addedSection.title}
        onChange={handleAdd}
      />
      <input
        type="color"
        placeholder="Enter a color"
        name="color"
        value={addedSection.color}
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
