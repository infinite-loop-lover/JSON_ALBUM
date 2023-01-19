import { Link } from "react-router-dom"
import { Album } from "../types/Album"
import { Card, Button, Col, } from 'react-bootstrap'

export const AlbumItem = ({ id, title }: Album) => {
    return (
        <Col key={id} sm={3} style={{ padding: '20px' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    Album{id}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {title}
                    </Card.Text>
                    <Link to={`/albums/${id}/photos`}><Button variant="primary">View Photos</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    )
}