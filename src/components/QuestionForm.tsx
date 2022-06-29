import { Form } from 'react-bootstrap'
import { Question } from './Question'
import questions from '../data/questions.json'

export function QuestionForm() {
  const customeWidth = window.innerWidth > 950 ? 'w-50' : 'w-100'
  return (
    <Form className={customeWidth}>
      {questions.map(question => (
        <Question key={question.id} {...question} />
      ))}
    </Form>
  )
}
