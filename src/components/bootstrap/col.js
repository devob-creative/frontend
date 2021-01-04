import cn from "classnames";

function Col({ children, className, sm, md, lg, col, ...props }) {
  return (
    <div
      className={cn(
        col ? `col-${col}` : "col",
        sm && `col-sm-${sm}`,
        md && `col-md-${md}`,
        lg && `col-lg-${lg}`,
        className && className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Col;
