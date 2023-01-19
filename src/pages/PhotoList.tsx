import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Row } from 'react-bootstrap'
import ReactPaginate from "react-paginate";
import { AlbumPhotos } from "../components/AlbumPhotos"
import { PhotoList as TypePhotoList } from "../types/PhotoList"

export const PhotoList = () => {
    const [photoList, setPhotoList] = useState<TypePhotoList[]>([])
    const params = useParams()

    const [pageCount, setPageCount] = useState<number>(0);
    let limit = 10;

    const loadPhotosByID = async (id: string) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos?_page=1&_limit=${limit}`)
        const responseJson = await response.json();
        const total = response.headers.get("x-total-count");
        setPageCount(Math.ceil(Number(total) / 10));
        setPhotoList(responseJson)
    }

    useEffect(() => {
        if (params.id) {
            loadPhotosByID(params.id)
        }
    }, [])

    const fetchPhotos = async (currentPage: any) => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/albums/${params.id}/photos?_page=${currentPage}&_limit=10`
        );
        const data = await res.json();
        return data;
    };

    const handleClick = async (data: any) => {
        let currentPage = data.selected + 1;
        const photoFormServer = await fetchPhotos(currentPage);
        setPhotoList(photoFormServer);
    };

    return (
        <div className='listphoto container'>
            <h1 style={{ paddingTop: '50px', paddingBottom: '50px' }}>PhotoList</h1>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handleClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
            <Row>
                {photoList && photoList.map(photo => (
                    <AlbumPhotos key={photo.id} id={photo.id} title={photo.title} thumbnailUrl={photo.thumbnailUrl} />
                ))}
            </Row>

        </div>
    )
}