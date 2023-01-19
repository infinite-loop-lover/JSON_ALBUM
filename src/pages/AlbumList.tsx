import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Row } from 'react-bootstrap'
import { AlbumItem } from "../components/AlbumItem"
import { Album as TypeAlbum } from "../types/Album"

export const AlbumList = () => {
    const [photoList, setPhotoList] = useState<TypeAlbum[]>([])
    const params = useParams()

    const loadPhotosByID = async (id: string) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        const responseJson = await response.json();
        setPhotoList(responseJson)
    }

    useEffect(() => {
        if (params.userid) {
            loadPhotosByID(params.userid)
        }
    }, [])

    return (
        <div className='listphoto container'>
            <h1 style={{ paddingTop: '50px', paddingBottom: '50px' }}>AlbumList</h1>
            <Row>
                {photoList.map(photo => (
                    <AlbumItem key={photo.id} id={photo.id} title={photo.title} />
                ))}
            </Row>
        </div>
    )
}