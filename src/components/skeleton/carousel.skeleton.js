import dynamic from "next/dynamic";
import styles from "../../styles/skeleton.module.scss";

const ContentLoader = dynamic(() => import("react-content-loader"), {
  ssr: false,
});

export default function CarouselSkeleton(props) {
  return (
    <div className={styles.carousel}>
      <ContentLoader
        speed={2}
        width="560"
        height={156}
        viewBox="0 0 560 156"
        backgroundColor="#ddd"
        foregroundColor="#f3f3f3"
        className={styles.content}
        {...props}
      >
        <rect x="0" y="0" rx="3" ry="3" width="270" height="45" />
        <rect x="0" y="65" rx="3" ry="3" width="370" height="45" />
      </ContentLoader>
    </div>
  );
}
