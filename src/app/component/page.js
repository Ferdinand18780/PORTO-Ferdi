'use client';

import React from 'react';
import "../component/navbar.css";


export default function Navbar() {
    const gotosection= (id) =>{
      const section=document.getElementById(id);
      if (section){
        section.scrollIntoView({behavior:'smooth'})
      }
    }

    
    return (
      <div class="container_navbar">
        <div class='name'>FERDI</div>
        <div class="container_rigth">
          <button className="butt" onClick={() => gotosection('home')}>Home</button>
          <button className="butt" onClick={() => gotosection('about')}>About</button>
          <button className="butt" onClick={() => gotosection('experience')}>Experience</button>
          <button className="butt" onClick={() => gotosection('skill')}>Skill</button>
        </div>
      </div>
    );
  }