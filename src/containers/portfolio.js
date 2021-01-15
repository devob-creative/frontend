import { Fragment } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { Portfolio } from "../components";
import { usePortfolios } from "../apollo/actions/portfolio.action";

const PortfolioSkeleton = dynamic(
  () => import("../components/skeleton/portfolio.skeleton"),
  {
    ssr: false,
  }
);

export default function PortfolioContainer({ filter }) {
  const { data: { portfolios } = {}, loading } = usePortfolios({
    variables: { where: { categories: { ...filter } } },
  });
  return (
    <Fragment>
      {loading && <PortfolioSkeleton className="mb-5 mt-4" />}
      <Portfolio.Wrapper className="mb-5 mt-4">
        {portfolios?.map((item) => (
          <Link key={item.id} href={`/projects/${item.slug}`}>
            <a>
              <Portfolio.Item
                title={item.title}
                date={item.date}
                image={item.cover.url || item.image[0].url}
              />
            </a>
          </Link>
        ))}
      </Portfolio.Wrapper>
    </Fragment>
  );
}

PortfolioContainer.propTypes = {
  filter: PropTypes.object,
};

PortfolioContainer.defaultProps = {
  filter: {},
};
