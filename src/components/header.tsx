import React from 'react'

function Header() {
    return (
        <div>
            <nav className="my-navbar">
                <a href="#" className="logo">YOUR LOGO</a>
                <div className="search-bar">
                    <input type="text" placeholder="Type in and hit Enter" />
                    <button type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <ul className="menu">
                    <li><a href="#">Cart |</a></li>
                    <li><a href="#">User |</a></li>
                    <li><a href="#">Tala</a></li>
                </ul>
            </nav>
            <div className="naba">
                <div className='naba-right'>
                    <a href="#">ALL BRANDS</a>
                    <a href="#">SKIN CARE</a>
                    <a href="#">MAKE UP</a>
                    <a href="#">BATH & BODY</a>
                    <a href="#">BEAUTY SUPPLEMENTS</a>
                    <a href="#">PROMOS</a>
                </div>
                <a className="with-us">SELL WITH US</a>
            </div>
        </div>
    )
}

export default Header
