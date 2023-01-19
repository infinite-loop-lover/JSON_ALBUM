import { Link } from "react-router-dom"
import { User } from "../types/User"
import { Card, Button, Col, } from 'react-bootstrap'


export const UserItem = ({ id, name, address }: User) => {
    return (
        <Col key={id} sm={3} style={{ padding: '20px' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    <Card.Text>
                        {name}
                    </Card.Text>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        City  :  {address.city}
                    </Card.Text>
                    <Card.Text>
                        Street  :  {address.street}
                    </Card.Text>
                    <Link to={`/albums/${id}`}><Button variant="primary">View Albums</Button></Link>
                </Card.Body>
            </Card>
        </Col>

    )
}