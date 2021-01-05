import { Fragment } from "react";

export default function Mixer({ data, filter, renderItem }) {
  const filteredData = !filter
    ? data
    : data.filter(
        (item) =>
          Object.keys(filter).filter(
            (key) => item[key].indexOf(filter[key]) !== -1
          ).length
      );
  return (
    <Fragment>
      {filteredData.map((item, index) => {
        return renderItem(item, index);
      })}
    </Fragment>
  );
}
