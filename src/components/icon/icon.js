import cn from "classnames";

const types = {
  solid: "fas",
  regular: "far",
  light: "fal",
  duotone: "fad",
  brands: "fab",
};

export default function Icon({ type, name, size, className }) {
  return (
    <i
      className={cn(
        type && types[type],
        name && `fa-${name}`,
        size && `fa-${size}`,
        className && className
      )}
    />
  );
}
