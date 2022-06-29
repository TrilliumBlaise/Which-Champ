import { useLocation } from 'react-router-dom'
import { Champion } from '../components/Champion'
import champions from '../data/champions.json'
type AnswerValue = {
  pickedChampion: string[]
}
export function Result() {
  const location = useLocation()
  const state = location.state as AnswerValue
  const pickedChampion = () => {
    const arr = state.pickedChampion
    let countG = 0
    let countU = 0
    let countM = 0
    let countD = 0
    let countZ = 0
    arr.forEach(value => {
      if (value === 'G') countG++
      if (value === 'U') countU++
      if (value === 'M') countM++
      if (value === 'D') countD++
      if (value === 'Z') countZ++
    })
    if (countG > 1) return 0
    if (countU > 1) return 1
    if (countM > 1) return 2
    if (countD > 1) return 3
    if (countZ > 1) return 4
    return Math.floor(Math.random() * champions.length)
  }
  return <Champion {...champions[pickedChampion()]} />
}
