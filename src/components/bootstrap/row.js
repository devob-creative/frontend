import cn from "classnames";

function Row({ children, className, ...props }) {
  return (
    <div className={cn("row", className && className)} {...props}>
      {children}
    </div>
  );
}

export default Row;
