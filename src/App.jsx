import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Order from './components/Order';

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Order />
            <About />
            <hr />
            <Footer />
        </div>
    );
}

export default App;
