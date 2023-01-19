import React, { useState, useEffect } from 'react';
import { Row, } from 'react-bootstrap'
import { UserItem } from '../components/UserItem';


export const Home = () => {
    const [userList, setUserList] = useState<User[]>();
    const [albumShow, setAlbumShow] = useState<boolean>(false)

    const getUserList = async () => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson) {
            setUserList(responseJson);
        }
    };

    useEffect(() => {
        getUserList();
    }, []);

    interface User {
        id: number
        name: string;
        address: any;
    }

    return (
        <div className="App container">
            <h1 style={{ paddingTop: '50px', paddingBottom: '50px' }}>UserList</h1>
            <Row >
                {userList && userList.map((user) => (
                    <UserItem key={user.id} id={user.id} name={user.name} address={user.address} />
                )
                )}
            </Row>

        </div>
    );
}


