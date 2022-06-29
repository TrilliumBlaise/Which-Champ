import { Card } from 'react-bootstrap'

type ChampionProp = {
  id: number
  name: string
  secondName: string
  description: string
  image: string
}
export function Champion({ id, name, secondName, description, image }: ChampionProp) {
  if (window.innerWidth > 950) {
    return (
      <Card className="h-100 bg-transparent">
        <Card.Img className="h-100" src={image} style={{ position: 'absolute', objectFit: 'cover', zIndex: '-1' }} />
        <div className="d-flex flex-column h-50" style={{ backgroundColor: '#dfdddd', width: '50%', position: 'absolute', bottom: '0rem' }}>
          <Card.Title className="bg-black roudned d-flex flex-column justify-content-start align-items-baseline mb-2">
            <span className="fs-1 ms-3">{name}</span>
            <span className="fs-2 ms-3">{secondName}</span>
          </Card.Title>
          <Card.Text className="p-2">
            <span className="fs-3 ms-5">{description}</span>
          </Card.Text>
        </div>
      </Card>
    )
  }
  return (
    <Card className="h-fit-content" style={{ backgroundColor: '#dfdddd' }}>
      <Card.Img variant="top" src={image} height="300px" style={{ objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="bg-black roudned d-flex flex-column justify-content-start align-items-baseline mb-2">
          <span className="fs-1 ms-2">{name}</span>
          <span className="fs-2 ms-2">{secondName}</span>
        </Card.Title>
        <Card.Text>
          <span className="fs-3">{description}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
