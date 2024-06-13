import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from '../pages/About'
import Sale from '../pages/Sale'
import Clients from '../pages/Clients'
import Contacts from '../pages/Contacts'

export default function Home() {
    return (
        <>
            <div >
                <Header />
                <About/>
                <Sale/>
                <Clients/>
                <Contacts/>
                <Footer />
            </div>
        </>
    )
}
