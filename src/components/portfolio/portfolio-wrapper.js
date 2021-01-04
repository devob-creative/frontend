import Masonry from "react-masonry-css";
import { Container } from "../index";

export default function PortfolioWrapper({ children, ...props }) {
  return (
    <div {...props}>
      <Container>
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {children}
        </Masonry>
      </Container>
    </div>
  );
}
