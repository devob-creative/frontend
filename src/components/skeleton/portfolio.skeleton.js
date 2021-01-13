import dynamic from "next/dynamic";
import cn from "classnames";
import { Portfolio } from "../index";
import styles from "../../styles/skeleton.module.scss";

const ContentLoader = dynamic(() => import("react-content-loader"), {
  ssr: false,
});

export default function PortfolioSkeleton({ className, ...props }) {
  const randomHeight = () => Math.round(Math.random() * 500 + 200);
  return (
    <Portfolio.Wrapper
      className={cn("border-end", "border-top", className && className)}
    >
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className={cn(styles.portfolio, "border-start", "border-bottom")}
          style={{ height: randomHeight() }}
        >
          <ContentLoader
            speed={2}
            width="100%"
            height={80}
            viewBox="0 0 370 80"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
          >
            <rect x="0" y="0" rx="3" ry="3" width="170" height="19" />
            <rect x="0" y="45" rx="3" ry="3" width="100%" height="10" />
            <rect x="0" y="65" rx="3" ry="3" width="80%" height="10" />
          </ContentLoader>
        </div>
      ))}
    </Portfolio.Wrapper>
  );
}
