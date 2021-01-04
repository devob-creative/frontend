import { Fragment } from "react";
import { Navbar, Lent } from "../index";

function Layout({ children, ...props }) {
  return (
    <Fragment>
      <Navbar />
      <section className="page-wrapper" {...props}>
        <div className="page-content">{children}</div>
        <Lent />
      </section>
    </Fragment>
  );
}

export default Layout;
