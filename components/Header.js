import Link from 'next/link';
import { withRouter } from 'next/router';

const Header = ({ router }) => (
  <div className="wrapper-links">
    <Link href="/alcoholic">
      <a className={router.pathname === '/alcoholic' ? 'active' : ''}>
        Alcoholic
      </a>
    </Link>
    <Link href="/non-alcoholic">
      <a className={router.pathname === '/non-alcoholic' ? 'active' : ''}>
        Non alcoholic
      </a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
    </Link>
    <style jsx>{`
      .wrapper-links {
        height: 60px;
        background: #46465a;
        display: flex;
        align-items: center;
        padding-left: 40px;
        padding-right: 20px;
        font-family: sans-serif;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        z-index: 1;
      }
      a {
        color: #f4f4f4;
        font-size: 14px;
        text-decoration: none;
        margin-right: 20px;
        text-transform: lowercase;
      }
      .active {
        color: #3ad4c3;
      }
    `}</style>
  </div>
);

export default withRouter(Header);
