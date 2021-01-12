import Link from "next/link";
import PropTypes from "prop-types";
import { Portfolio } from "../components";
import { usePortfolios } from "../apollo/actions/portfolio.action";

export default function PortfolioContainer({ filter }) {
  const { data: { portfolios } = {}, loading } = usePortfolios({
    variables: { where: { categories: { ...filter } } },
  });
  return (
    <Portfolio.Wrapper className="mb-5 mt-4">
      {portfolios?.map((item) => (
        <Link key={item.id} href={`/projects/${item.slug}`}>
          <a>
            <Portfolio.Item
              title={item.title}
              date={item.date}
              image={item.image[0].url}
            />
          </a>
        </Link>
      ))}
    </Portfolio.Wrapper>
  );
}

PortfolioContainer.propTypes = {
  filter: PropTypes.object,
};

PortfolioContainer.defaultProps = {
  filter: {},
};
