import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import questions from '../data/questions.json'
import { useNavigate } from 'react-router-dom'

type QuestionProp = {
  id: number
  question: string
  answers: String[]
  value: String[]
  display: string
}
const pickedChampion = [] as String[]
export function Question({ id, question, answers, value, display }: QuestionProp) {
  const navigate = useNavigate()

  function toResult() {
    if (!isChecked()) return
    const path = '/result'
    navigate(path, { state: { pickedChampion } })
    pickedChampion.splice(0, pickedChampion.length)
  }
  function showNextQuestion(e: React.MouseEvent) {
    const element = e.target as HTMLElement
    const parent = element.parentElement as HTMLElement
    const parentSibling = parent.nextElementSibling as HTMLElement
    if (!isChecked()) return
    parent.style.display = 'none'
    parentSibling.style.display = 'block'
  }
  function isChecked() {
    const radioButtons = document.querySelectorAll(`input[name="answer${id}"]`)
    for (let i = 0; i < radioButtons.length; i++) {
      const currentButton = radioButtons[i] as HTMLInputElement
      if (currentButton.checked === true) {
        const value = currentButton.dataset.value as string
        pickedChampion.push(value)
        return true
      }
    }
    return false
  }
  return (
    <div style={{ backgroundColor: '#dfdddd', display: display }}>
      <div className="d-flex justify-content-center align-items-center mb-3" style={{ backgroundColor: 'white' }}>
        <h1 className="text-center">{question}</h1>
      </div>
      <Form.Check className="m-1 p-1 bg-light rounded" type="radio" style={{ backgroundColor: 'white', gap: '.5rem' }}>
        {answers.map((answer, i) => (
          <Card key={i} className="d-flex">
            <Card.Body className="fs-4">
              <Form.Check.Input data-value={value[i]} className="fs-3" name={`answer${id}`} type="radio" />
              {`     ${answer}`}
            </Card.Body>
          </Card>
        ))}
      </Form.Check>
      {id < questions.length && (
        <Button onClick={e => showNextQuestion(e)} className="text-center bg-black fs-1 mt-5 mb-3 w-50" size="lg" style={{ marginLeft: '25%' }}>
          Next
        </Button>
      )}
      {id === questions.length && (
        <Button onClick={toResult} className="text-center bg-black fs-1 mt-5 mb-3 w-50" size="lg" style={{ marginLeft: '25%' }}>
          Submit
        </Button>
      )}
    </div>
  )
}
