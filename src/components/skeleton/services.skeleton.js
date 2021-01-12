import dynamic from "next/dynamic";
import { Service } from "../index";

const ContentLoader = dynamic(() => import("react-content-loader"), {
  ssr: false,
});

export default function ServicesSkeleton(props) {
  const arr = [1, 2, 3];
  return (
    <Service.Wrapper>
      {arr.map((i) => (
        <Service.Item key={i}>
          <ContentLoader
            speed={2}
            width="100%"
            height={100}
            viewBox="0 0 370 100"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
          >
            <rect x="0" y="0" rx="3" ry="3" width="170" height="19" />
            <rect x="0" y="45" rx="3" ry="3" width="100%" height="10" />
            <rect x="0" y="65" rx="3" ry="3" width="80%" height="10" />
            <rect x="0" y="85" rx="3" ry="3" width="60%" height="10" />
          </ContentLoader>
        </Service.Item>
      ))}
    </Service.Wrapper>
  );
}
