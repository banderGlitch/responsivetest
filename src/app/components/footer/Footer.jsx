import './footer.scss';

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <span>&copy; {new Date().getFullYear()} Your Company Name</span>
          <nav className="footer__nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </footer>
    );
  }