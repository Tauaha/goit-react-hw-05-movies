
import { Link, Outlet } from "react-router-dom";
import {  Suspense } from "react";
import Styles from 'components/SharedLayout/SharedLayout.module.css'

 const SharedLayout = () => {
  return (
    <div className={Styles.Container}>
      <header className={Styles.Header}>
        <nav className={Styles.nav}>
          <Link to="/" className={Styles.Link}>
            Home
          </Link>
          <Link to="/movies" className={Styles.Link}>Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout