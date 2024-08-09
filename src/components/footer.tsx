import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer">
  <div className="footer-container">
    <div className="footer-row">
      <div className="footer-col">
      <a href="#" className="loga">YOUR LOGO</a>
      </div>
      <div className="footer-col">
        <h3 className="footer-title">MAIN PAGES</h3>
        <ul className="footer-list">
          <li><a href="/" className="footer-link">Sale with Us</a></li>
          <li><a href="/" className="footer-link">About Us</a></li>
          <li><a href="/" className="footer-link">Contact Us</a></li>
          <li><a href="/" className="footer-link">Promos</a></li>
          <li><a href="/" className="footer-link">Become an Ambassador</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h3 className="footer-title">POLICY</h3>
        <ul className="footer-list">
          <li><a href="/" className="footer-link">Terms of Usage</a></li>
          <li><a href="/" className="footer-link">Privacy Policy</a></li>
          <li><a href="/" className="footer-link">Return Policy</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h3 className="footer-title">CATEGORIES</h3>
        <ul className="footer-list">
          <li><a href="/" className="footer-link">Skincare</a></li>
          <li><a href="/" className="footer-link">Makeup</a></li>
          <li><a href="/" className="footer-link">Hair Care</a></li>
          <li><a href="/" className="footer-link">Bath & Body</a></li>
          <li><a href="/" className="footer-link">Beauty Suppliments</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h3 className="footer-title">SUBSCRIBE</h3>
        <p className="footer-text">Subscribe to our newsletter, so that you can be the first to know about new offers and promotions.</p>
        <form className="footer-form">
          <input type="email" placeholder="Enter Email Address" />
          <button className="sub" type="submit">SUBSRIBE</button>
        </form>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p className="footer-text">&copy; 2023 Company. All rights reserved.</p>
  </div>
</footer>
  

    </div>
  )
}

export default Footer
