import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Tags from '../components/tags/Tag'
import VideoGrid from '../components/grid/VideoGridItem'
import Pagination from '../components/ui/Pagination'
import Footer from '../components/footer/Footer'
const Home = () => {
    return (
        <>
            <Navbar />
            <Tags />
            <VideoGrid />
            <Pagination />
            <Footer />
        </>
    )
}
export default Home