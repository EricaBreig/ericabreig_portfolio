import React, { useState } from 'react';
import NavTabs from './Navigation';
import Home from './home';
import About from './about';
import Resume from './Resume';
import Contact from './contact';
import Projects from './projects';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');


    const renderPage = () => {
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Home />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>

            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}
        </div>
    );
}