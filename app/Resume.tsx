import React from 'react';
import ResumeDL from './assets/Erica_Breig_Resume_WD_2023.pdf';

export default function Resume() {
    return (
        <div className='Resume'>
            <h1>RESUME</h1>
            <a href={ResumeDL} download><i className="fa-solid fa-file-user"></i></a>
            <ul>
                <h2>- HTML 5</h2>
                <h2>- CSS 3</h2>
                <h2>- JAVASCRIPT</h2>
                <h2>- SQL</h2>
                <h2>- NoSQL</h2>
                <h2>- J QUERY</h2>
                <h2>- EXPRESS</h2>
                <h2>- REACT</h2>
                <h2>- TYPESCRIPT</h2>
            </ul>
        </div>
    );
}