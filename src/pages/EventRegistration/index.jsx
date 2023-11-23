import React from "react";

import { Button, Img, Line, Text } from "components";

const EventRegistrationPage = () => {
  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[77px] items-start justify-start mx-auto p-[35px] sm:px-5 w-full">
        <div className="flex flex-col items-center max-w-[1268px] mx-auto md:px-5 w-full">
          <header className="flex items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="header-row my-[7px]">
                <Img
                  className="h-[35px]"
                  src="images/img_group10392_17.svg"
                  alt="Group10392"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
                <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                  <Text
                    className="mt-[3px] text-base text-gray-900"
                    size="txtGilroyMedium16Gray900"
                  >
                    Products
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_902.svg"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                  <Text
                    className="mt-[3px] text-base text-gray-900"
                    size="txtGilroyMedium16Gray900"
                  >
                    Resouces
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_902.svg"
                    alt="arrowdown One"
                  />
                </div>
                <Text
                  className="sm:mt-0 mt-[5px] text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Request a demo
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[227px] rounded-md w-[18%] md:w-full">
                <a href="javascript:" className="text-base text-gray-900">
                  <Text size="txtGilroyMedium16Gray900">Sign in</Text>
                </a>
                <Button
                  className="cursor-pointer font-medium min-w-[148px] rounded-md text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="lg"
                >
                  Sign up for free
                </Button>
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col gap-[30px] justify-start mb-[466px] md:ml-[0] ml-[51px] md:px-5 w-[83%] md:w-full">
          <div className="flex flex-row gap-6 items-start justify-start w-[23%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_arrowleft_bluegray_900.svg"
              alt="arrowleft"
            />
            <Text
              className="mt-[3px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
              size="txtGilroySemiBold24Bluegray900"
            >
              Event Registration
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[126px] w-[89%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start w-[55%] md:w-full">
                <Img
                  className="h-[263px] md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  src="images/img_rectangle1314.png"
                  alt="Rectangle1314"
                />
                <div className="flex flex-col gap-3 items-start justify-start w-[74%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                    size="txtGilroyBold24"
                  >
                    Graphic design workshop
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Text
                      className="text-blue_gray-400 text-xl"
                      size="txtGilroyMedium20Bluegray400"
                    >
                      By Anton Ligon
                    </Text>
                    <div className="bg-blue_gray-400 h-1.5 mb-3 sm:mt-0 mt-[7px] rounded-[50%] w-1.5"></div>
                    <Text
                      className="text-blue_gray-400 text-xl"
                      size="txtGilroyMedium20Bluegray400"
                    >
                      MS In design management
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[65px] items-center justify-start w-2/5 md:w-full">
                <div className="flex flex-col items-start justify-end py-1 w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroyMedium18Bluegray900"
                    >
                      Saturday 10 March at 10:00 - 15:00 GTM +0%:30
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyRegular16"
                    >
                      Next week
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-100 h-px mt-[21px] w-full" />
                  <div className="flex flex-col gap-3.5 items-start justify-start mt-[18px]">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroyMedium18Bluegray900"
                    >
                      Allentown
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyRegular16"
                    >
                      4140 Parker Rd. Allentown, New Mexico 31134
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[397px] sm:min-w-full rounded-md text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="2xl"
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventRegistrationPage;
