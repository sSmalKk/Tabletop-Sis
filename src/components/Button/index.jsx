import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded" };
const variants = {
  fill: {
    light_blue_100: "bg-light_blue-100 text-black-900",
    red_200: "bg-red-200 text-black-900",
    green_A100: "bg-green-A100 text-black-900",
    blue_A700: "bg-blue-A700 text-white-A700",
    white_A700: "bg-white-A700",
    blue_gray_900_01: "bg-blue_gray-900_01",
    blue_gray_400: "bg-blue_gray-400 text-gray-50_01",
    gray_900_01: "bg-gray-900_01",
    white_A700_b2: "bg-white-A700_b2 text-black-900_e4",
    gray_100: "bg-gray-100 text-black-900",
  },
  outline: { blue_A700: "border border-blue-A700 border-solid text-blue-A700" },
};
const sizes = {
  xs: "p-1",
  sm: "p-[7px]",
  md: "p-2.5",
  lg: "p-3.5",
  xl: "pr-2.5 py-[15px]",
  "2xl": "p-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "light_blue_100",
    "red_200",
    "green_A100",
    "blue_A700",
    "white_A700",
    "blue_gray_900_01",
    "blue_gray_400",
    "gray_900_01",
    "white_A700_b2",
    "gray_100",
  ]),
};

export { Button };
