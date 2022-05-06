import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ShowModal, ShowModalTask } from '../../store/action'
import Modal from '../Modal/Modal'
import TaskModal from '../TaskModal'
import { selectModalData, selectModalDataTask } from '../../store/selector'
import SectionComponent from '../SectionComponent'
import './style.css'

export default function MainPage() {
  const dispatch = useDispatch()
  const { show } = useSelector(selectModalData)
  const { showTask } = useSelector(selectModalDataTask)

  const [sections, setSections] = useState(
    JSON.parse(localStorage.getItem('section')) || [],
  )

  useEffect(() => {
    localStorage.setItem('section', JSON.stringify(sections))
  }, [sections])

  const handleClick = useCallback(() => {
    dispatch(ShowModal())
  })

  const handleClickTask = useCallback(() => {
    if (sections.length != 0) {
      dispatch(ShowModalTask())
    }
  })

  return (
    <div className="back">
      <button onClick={handleClick} className="openModal">
        Add A Block
      </button>

      {show && <Modal setSections={setSections} sections={sections} />}
      <button onClick={handleClickTask} className="openModal">
        Add A Task
      </button>
      {showTask && <TaskModal sections={sections} setSections={setSections} />}

      <div className="sections">
        <div className="addedSection">
          {Array.isArray(sections)
            ? sections.map((el) => (
                <SectionComponent
                  el={el}
                  key={el.id}
                  sections={sections}
                  setSections={setSections}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  )
}
