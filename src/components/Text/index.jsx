import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroyMedium12WhiteA70087: "font-gilroy font-medium",
  txtGilroySemiBold20: "font-gilroy font-semibold",
  txtGilroyMedium24Lightblue300: "font-gilroy font-medium",
  txtGilroySemiBold16WhiteA700: "font-gilroy font-semibold",
  txtLatoBold10: "font-bold font-lato",
  txtGilroyMedium16Gray900: "font-gilroy font-medium",
  txtGilroyMedium16BlueA700: "font-gilroy font-medium",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtOpenSansMedium14: "font-medium font-opensans",
  txtGilroySemiBold24Black900: "font-gilroy font-semibold",
  txtGilroyMedium18Gray700: "font-gilroy font-medium",
  txtGilroySemiBold14BlueA700: "font-gilroy font-semibold",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtGilroySemiBold18Bluegray400: "font-gilroy font-semibold",
  txtGilroySemiBold18Gray5002: "font-gilroy font-semibold",
  txtGilroyBold24: "font-bold font-gilroy",
  txtGilroySemiBold18Black900: "font-gilroy font-semibold",
  txtGilroyMedium36: "font-gilroy font-medium",
  txtGilroyRegular15Gray50001: "font-gilroy font-normal",
  txtGilroyMedium34: "font-gilroy font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtGilroyMedium16Bluegray900: "font-gilroy font-medium",
  txtGilroyMedium2021: "font-gilroy font-medium",
  txtGilroyMedium18Bluegray900: "font-gilroy font-medium",
  txtGilroySemiBold16Black900: "font-gilroy font-semibold",
  txtGilroySemiBold18BlueA700: "font-gilroy font-semibold",
  txtGilroySemiBold16BlueA700: "font-gilroy font-semibold",
  txtGilroyRegular18Bluegray100: "font-gilroy font-normal",
  txtGilroyBold12: "font-bold font-gilroy",
  txtSFUIDisplayRegular10: "font-normal font-sfuidisplay",
  txtGilroyBold14: "font-bold font-gilroy",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyMedium20Bluegray400: "font-gilroy font-medium",
  txtGilroyBold52: "font-bold font-gilroy",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold12WhiteA700: "font-opensans font-semibold",
  txtPilatExtendedHeavy16: "font-black font-pilatextended",
  txtPilatExtendedHeavy18: "font-extrabold font-pilatextended",
  txtGilroyMedium28: "font-gilroy font-medium",
  txtGilroySemiBold14Bluegray700: "font-gilroy font-semibold",
  txtGilroySemiBold24Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium24Black90001: "font-gilroy font-medium",
  txtGilroyRegular2661: "font-gilroy font-normal",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtGilroyMedium16Bluegray800: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray70001: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray40001: "font-gilroy font-medium",
  txtPilatExtendedHeavy16WhiteA700: "font-black font-pilatextended",
  txtGilroyMedium12Bluegray900: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroyRegular16Bluegray200: "font-gilroy font-normal",
  txtGilroySemiBold32Black900: "font-gilroy font-semibold",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyMedium18BlueA700: "font-gilroy font-medium",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroyMedium373: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyRegular15: "font-gilroy font-normal",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroySemiBold14Bluegray400: "font-gilroy font-semibold",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtPilatExtendedHeavy18WhiteA70087: "font-extrabold font-pilatextended",
  txtGilroySemiBold15: "font-gilroy font-semibold",
  txtGilroyRegular15Gray90003: "font-gilroy font-normal",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroySemiBold14: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroySemiBold16Bluegray700: "font-gilroy font-semibold",
  txtGilroyMedium18Bluegray400: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium18Gray5002: "font-gilroy font-medium",
  txtGilroyRegular18Black900: "font-gilroy font-normal",
  txtGilroySemiBold18BlueA200: "font-gilroy font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
