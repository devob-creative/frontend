import { Navbar, Footer, Lent } from "../index";
import { ExtraContainer } from "../../containers";

function Layout({ children, ...props }) {
  return (
    <section className="page-wrapper" {...props}>
      <div className="page-content">
        <Navbar />
        {children}
        <Footer />
      </div>
      <ExtraContainer />
      <Lent />
    </section>
  );
}

export default Layout;
