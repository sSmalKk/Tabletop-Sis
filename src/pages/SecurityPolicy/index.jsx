import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

const SecurityPolicyPage = () => {
  return (
    <>
      <div className="bg-gray-50_02 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray-50 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                className="h-[35px] mx-auto w-[65%]"
                src="images/img_group10392_19.svg"
                alt="Group10392"
              />
              <div className="flex flex-col gap-[41px] justify-start mt-12 w-3/5 md:w-full">
                <div className="flex flex-col gap-[42px] items-start justify-start ml-2 md:ml-[0] w-[95%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-[81%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_save.svg"
                      alt="save"
                    />
                    <Text
                      className="mt-[3px] text-base text-blue_gray-700_01"
                      size="txtGilroySemiBold16Bluegray70001"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-end justify-start w-[74%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_dollaraltsoli.svg"
                      alt="dollaraltSoli"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700_01"
                      size="txtGilroySemiBold16Bluegray70001"
                    >
                      Payments
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_walletoutline.svg"
                      alt="walletOutline"
                    />
                    <Text
                      className="mt-[3px] text-base text-blue_gray-700_01"
                      size="txtGilroySemiBold16Bluegray70001"
                    >
                      Wallet & Cards
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[89%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="mt-[3px] text-base text-blue_gray-700_01"
                      size="txtGilroySemiBold16Bluegray70001"
                    >
                      Transactions
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[70%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                    <Text
                      className="mt-1 text-base text-blue_gray-700_01"
                      size="txtGilroySemiBold16Bluegray70001"
                    >
                      Analytics
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-end justify-start w-[74%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_menu.svg"
                      alt="menu"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700_01"
                      size="txtGilroySemiBold16Bluegray70001"
                    >
                      Messages
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start w-[67%] md:w-full">
                  <Line className="bg-blue-A700 h-6 w-0.5" />
                  <Img
                    className="h-6 ml-1.5 w-6"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="ml-2 mt-[5px] text-base text-blue-A700"
                    size="txtGilroySemiBold16BlueA700"
                  >
                    Settings
                  </Text>
                </div>
              </div>
              <div className="flex flex-row font-opensans gap-2 items-end justify-start mb-6 ml-2 md:ml-[0] mt-[478px] w-[27%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_question.svg"
                  alt="question"
                />
                <Text
                  className="mt-[5px] text-base text-blue_gray-700_01"
                  size="txtOpenSansRomanSemiBold16"
                >
                  Help
                </Text>
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-8 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <Text
                className="mb-0.5 md:mt-0 mt-3.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtGilroySemiBold32"
              >
                Settings
              </Text>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[819px] p-2 rounded-[50%] w-14">
                <div className="md:h-9 h-[35px] mb-1 relative w-9">
                  <Img
                    className="absolute bottom-[0] h-8 left-[0] w-8"
                    src="images/img_notification.svg"
                    alt="notification"
                  />
                  <Text
                    className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                    size="txtOpenSansRomanSemiBold12WhiteA700"
                  >
                    2
                  </Text>
                </div>
              </div>
              <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  src="images/img_profileimglarg.png"
                  alt="ProfileImgLarg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[46px] items-center justify-start pt-1 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[13px] justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-10 md:ml-[0] w-[61%] md:w-full">
                    <Text
                      className="text-base text-blue_gray-400_01"
                      size="txtGilroyMedium16Bluegray40001"
                    >
                      My Profile
                    </Text>
                    <Text
                      className="ml-11 md:ml-[0] text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Notifications
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[34px] text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Language
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[34px] md:mt-0 mt-0.5 text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      General settings
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[34px] text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Theme
                    </Text>
                    <a
                      href="javascript:"
                      className="md:ml-[0] ml-[37px] text-base text-blue-A700"
                    >
                      <Text size="txtGilroyMedium16BlueA700">Privacy</Text>
                    </a>
                  </div>
                  <div className="flex flex-col relative w-full">
                    <Line className="bg-gray-300 h-px mx-auto w-full" />
                    <Line className="bg-blue-A700 h-0.5 mb-auto ml-auto mr-[372px] mt-[-1px] w-[9%] z-[1]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pt-1 w-[49%] md:w-full">
                <div className="flex flex-col gap-[9px] items-start justify-start rounded-lg w-full">
                  <Text
                    className="text-base text-blue_gray-800"
                    size="txtGilroyMedium16Bluegray800"
                  >
                    Username or Email
                  </Text>
                  <Input
                    name="email"
                    placeholder="jane@gmail.com"
                    className="font-medium p-0 placeholder:text-blue_gray-700_01 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid w-full"
                    type="email"
                    size="md"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start mt-5 rounded-lg w-full">
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtGilroyMedium16Bluegray900"
                  >
                    Password
                  </Text>
                  <Input
                    name="Group10198"
                    placeholder="Enter Password"
                    className="!placeholder:text-blue_gray-400_01 !text-blue_gray-400_01 font-medium p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid w-full"
                    type="password"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start mt-[21px] rounded-lg w-full">
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtGilroyMedium16Bluegray900"
                  >
                    Security Question
                  </Text>
                  <Input
                    name="Group10198 One"
                    placeholder="What Was Your First Pet’s Name?"
                    className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-medium p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid mt-[3px] w-full"
                    type="text"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start mt-5 rounded-lg w-full">
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtGilroyMedium16Bluegray900"
                  >
                    Answer
                  </Text>
                  <Input
                    name="Group10198 Two"
                    placeholder="Pluto"
                    className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-medium p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid w-full"
                  ></Input>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-4 rounded-md text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="lg"
                >
                  Save sequrity question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityPolicyPage;
