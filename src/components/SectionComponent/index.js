import React, { useState, useRef, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import DragComponent from '../DragComponent'
import './style.css'

export default function SectionComponent({ el, task, setTask }) {
  const [, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item) => {
      const newTask = task.map((x) => {
        if (x.id === item.id) {
          return { ...x, sectionId: el.id }
        }
        return x
      })
      setTask((prevTask) =>
        prevTask.map((x) => {
          if (x.id === item.id) {
            return { ...x, sectionId: el.id }
          }
          return x
        }),
      )
    },
  }))

  return (
    <div
      ref={drop}
      role={'Dustbin'}
      className="section_box"
      style={{ background: `${el.color}` }}
    >
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
