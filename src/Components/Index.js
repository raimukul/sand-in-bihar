import React from 'react'
import Header from './Header/header'
import Footer from './Footer/footer'
import Carousel from './Body/carousel'
import Vision from './Body/vision'
import Recomendation from './Body/recomended'

function Index() {
    return (
        <div>
            <Header />
            <Carousel />
            <Vision />
            {/* <Recomendation /> */}
            <Footer />
        </div>
    )
}

export default Index
