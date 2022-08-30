import React from 'react'
import Tags from '../components/tags/Tag'
import VideoGrid from '../components/grid/VideoGridItem'
import Pagination from '../components/ui/Pagination'

const Home = () => {
    return (
        <>
            <Tags />
            <VideoGrid />
            <Pagination />
        </>
    )
}
export default Home