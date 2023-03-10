import React from 'react';
import './ButtonHeaderCSS.css';

import {BrowserRouter, Route, Routes, Outlet, Link} from 'react-router-dom';

export default function ButtonHeader() {
  return(

    <nav className="navbar">
            <div style={{
                width:"16%"
            }}></div>
            <ul className="navbar_menu">
                <li><Link to="/convenient-facilities/laundry">πμΈνλ°©π</Link></li>
                <li><Link to="/convenient-facilities/koreanmart">π₯νμΈλ§νΈπ₯</Link></li>
                <li><Link to="/convenient-facilities/bar">π»μ£Όλ₯ λ°±νμ π»</Link></li>
                <li><Link to="/convenient-facilities/mart">πλ§νΈπ</Link></li>
                <li><Link to="/convenient-facilities/accommodation">π μμπ </Link></li>
            </ul>

            <div className="navbar_icons">
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-facebook-f"></i></li>
            </div>
      </nav>

  );
}