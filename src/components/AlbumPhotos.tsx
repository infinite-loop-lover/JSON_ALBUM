import { PhotoList } from "../types/PhotoList"
import { Card, Button, Col, } from 'react-bootstrap'


export const AlbumPhotos = ({ id, title, thumbnailUrl }: PhotoList) => {
    return (
        <Col key={id} sm={3} style={{ padding: '20px' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img src={thumbnailUrl} variant='top' />
                <Card.Header>
                    <Card.Text>
                        {title}
                    </Card.Text>
                </Card.Header>
            </Card>
        </Col>
    )
}