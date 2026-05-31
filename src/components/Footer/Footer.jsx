import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Dheebree Foundation</h3>

          <p>
            Strengthening regional ecosystems through evidence-based development
            and community participation.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>

          <ul>
            <li>Home</li>
            <li>Programs</li>
            <li>Reports</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>

          <p>Email: info@dheebree.org</p>
          <p>Phone: +91 XXXXX XXXXX</p>
          <p>India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Dheebree Foundation. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
