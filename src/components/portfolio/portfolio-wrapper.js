import Masonry from "react-masonry-css";
import { Container } from "../index";

export default function PortfolioWrapper({ children, ...props }) {
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  };
  return (
    <div {...props}>
      <Container>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {children}
        </Masonry>
      </Container>
    </div>
  );
}
