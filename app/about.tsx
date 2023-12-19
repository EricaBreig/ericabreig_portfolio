import React from 'react';
import portrait from './assets/IMG_8406.jpg'

export default function About() {
    return (
        <div className="About">
            <h1 className='aboutHeader'>ABOUT</h1>
            <img className='portrait animate__animated animate__fadeInUpBig' src={portrait} alt="portrait"></img>
            <h2 className='aboutText'> Hello, I'm Erica!  I am a full-stack junior developer, with a background in acting and film production. I'm happy to be here and to contribute to the wonderful world of the internet! (Or interwebs, as us childrens of the net say.)
I want to apply my creativity and interpersonal skills to web applications.
I want to contribute to making the world a bit more accessible, safe, and fun for everyone -- including online.
</h2>
        </div>
    )
}