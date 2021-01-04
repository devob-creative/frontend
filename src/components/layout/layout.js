import { Navbar, Footer, Lent } from "../index";

function Layout({ children, ...props }) {
  return (
    <section className="page-wrapper" {...props}>
      <div className="page-content">
        <Navbar />
        {children}
        <Footer />
      </div>
      <Lent />
    </section>
  );
}

export default Layout;
