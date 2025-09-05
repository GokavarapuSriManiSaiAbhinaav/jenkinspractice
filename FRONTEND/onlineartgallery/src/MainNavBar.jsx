import React from 'react'
import { Link, Route ,Routes } from 'react-router-dom'
import Home from './Home'
import AddArt from './AddArt'
import ViewArt from './ViewArt'


export default function MainNavBar() {
    const headerStyle = {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '15px',
        textAlign: 'center'
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '10px'
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold'
    };

    const mainStyle = {
        padding: '20px',
        maxWidth: '800px',
        margin: 'auto'
    };

    return (
        <div>
            <header style={headerStyle}>
                <h1>Online Art Gallery</h1>
                <nav style={navStyle}>
                    <Link style={linkStyle} to="/">Home</Link>
                    <Link style={linkStyle} to="/add-art">Add Art</Link>
                    <Link style={linkStyle} to="/view-art">View Art</Link>
                </nav>
            </header>

            <main style={mainStyle}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-art" element={<AddArt />} />
                    <Route path="/view-art" element={<ViewArt />} />
                </Routes>
            </main>
        </div>
    )
}