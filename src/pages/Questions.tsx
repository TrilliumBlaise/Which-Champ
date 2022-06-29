import { QuestionForm } from '../components/QuestionForm'

export function Questions() {
  if (window.innerWidth > 950) {
    return (
      <div
        className="h-100 d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundImage: 'url("./images/background.jpg")' }}
      >
        <div className="bg-black w-50 d-flex justify-content-between align-items-center" style={{ height: '10rem' }}>
          <img className="ms-4" src="./images/logo.png" alt="" style={{ height: 'inherit', objectFit: 'cover' }} />
          <span className="fs-1 me-4">Champion Personality Quiz</span>
        </div>
        <QuestionForm />
      </div>
    )
  }
  return (
    <div className="h-100 w-100">
      <div className="w-100 bg-dark.bg-gradient d-flex justify-content-center pt-1" style={{ height: '6rem' }}>
        <img src="./images/logo.png" alt="" style={{ objectFit: 'contain' }} />
      </div>
      <div className="w-100 h-25 question d-flex justify-content-center align-items-center">
        <span className="fs-1 text-center">League Champion Personality Quiz</span>
      </div>
      <QuestionForm />
    </div>
  )
}
