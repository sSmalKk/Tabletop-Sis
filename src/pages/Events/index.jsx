import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const EventsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-gilroy gap-[50px] items-end justify-start mx-auto pb-[66px] w-full">
        <div className="flex flex-col items-center w-full">
          <header className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_4.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search"
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] rounded-md w-2/5 md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-5 my-4 mx-3"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#bac1ce"
                      className="cursor-pointer h-5 my-auto"
                      onClick={() => setInputfieldvalue("")}
                      style={{
                        visibility:
                          inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  }
                ></Input>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                  <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                    <Text
                      className="ml-[9px] text-base text-gray-900"
                      size="txtGilroyMedium16Gray900"
                    >
                      Orders
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_902.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <Text
                    className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900"
                    size="txtGilroyMedium16Gray900"
                  >
                    Categories
                  </Text>
                  <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                    <Text
                      className="ml-4 text-base text-gray-900"
                      size="txtGilroyMedium16Gray900"
                    >
                      More
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_902.svg"
                      alt="arrowdown One"
                    />
                  </div>
                </div>
                <Img
                  className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                  src="images/img_cart.svg"
                  alt="cart"
                />
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col md:gap-10 gap-[70px] items-start justify-start overflow-auto md:px-5 w-[95%] md:w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start pt-1.5 w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between w-[66%] md:w-full">
              <Text
                className="mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtGilroySemiBold32"
              >
                Today’s Events
              </Text>
              <Img
                className="h-10 mb-1.5 w-10"
                src="images/img_clock_40X40.svg"
                alt="clock"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-[18px] items-center justify-start w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  src="images/img_rectangle1320.png"
                  alt="Rectangle1320"
                />
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtGilroyMedium20"
                  >
                    Music concert
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroySemiBold18Bluegray400"
                  >
                    7:30 PM
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <div className="flex flex-col gap-3 items-start justify-end pr-[5px] py-[5px]">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Elgin St. Celina, Delaware 10299
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      40 Ticket Left
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[121px] rounded-md text-base text-center"
                    shape="round"
                    color="blue_A700"
                    size="2xl"
                    variant="outline"
                  >
                    Book Ticket
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[17px] items-center justify-start w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  src="images/img_rectangle1320_250X620.png"
                  alt="Rectangle1320 One"
                />
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtGilroyMedium20"
                  >
                    Health Seminar
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroySemiBold18Bluegray400"
                  >
                    7:30 PM
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <div className="flex flex-col gap-3 items-start justify-end pr-[5px] py-[5px]">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Elgin St. Celina, Delaware 10299
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      10 Ticket Left
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[121px] rounded-md text-base text-center"
                    shape="round"
                    color="blue_A700"
                    size="2xl"
                    variant="outline"
                  >
                    Book Ticket
                  </Button>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[13px] items-center justify-start w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  src="images/img_rectangle1320_1.png"
                  alt="Rectangle1320 Two"
                />
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtGilroyMedium20"
                  >
                    Health Seminar
                  </Text>
                  <Text
                    className="text-blue-A700 text-lg text-right"
                    size="txtGilroySemiBold18BlueA700"
                  >
                    7:30 PM
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between py-[5px] w-full">
                  <div className="flex flex-col gap-3 items-start justify-start">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Elgin St. Celina, Delaware 10299
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      10 Ticket Left
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[121px] rounded-md text-base text-center"
                    shape="round"
                    color="blue_A700"
                    size="lg"
                    variant="outline"
                  >
                    Book Ticket
                  </Button>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[25px] items-start justify-end pt-1.5 w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between w-[78%] md:w-full">
              <Text
                className="mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtGilroySemiBold32"
              >
                Upcoming Events
              </Text>
              <Img
                className="h-10 mb-1.5 w-10"
                src="images/img_clock_40X40.svg"
                alt="clock One"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-40 md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  src="images/img_rectangle1320.png"
                  alt="Rectangle1320 Three"
                />
                <div className="flex flex-col items-start justify-end mt-1 pt-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroySemiBold18Black900"
                    >
                      Music concert
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroySemiBold14Bluegray400"
                    >
                      7:30 PM
                    </Text>
                  </div>
                  <Text
                    className="mt-[21px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    Elgin St. Celina, Delaware 10299
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-3.5 w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      40 Ticket Left
                    </Text>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[88px] rounded-md text-center text-xs"
                      shape="round"
                      color="blue_A700"
                      variant="outline"
                    >
                      Book Ticket
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-40 md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  src="images/img_rectangle1320.png"
                  alt="Rectangle1320 Four"
                />
                <div className="flex flex-col items-start justify-end mt-1 pt-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroySemiBold18Black900"
                    >
                      Music concert
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroySemiBold14Bluegray400"
                    >
                      7:30 PM
                    </Text>
                  </div>
                  <Text
                    className="mt-[21px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    Elgin St. Celina, Delaware 10299
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-3.5 w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      40 Ticket Left
                    </Text>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[88px] rounded-md text-center text-xs"
                      shape="round"
                      color="blue_A700"
                      variant="outline"
                    >
                      Book Ticket
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-40 md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  src="images/img_rectangle1320.png"
                  alt="Rectangle1320 Five"
                />
                <div className="flex flex-col items-start justify-end mt-1 pt-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroySemiBold18Black900"
                    >
                      Music concert
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroySemiBold14Bluegray400"
                    >
                      7:30 PM
                    </Text>
                  </div>
                  <Text
                    className="mt-[21px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    Elgin St. Celina, Delaware 10299
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-3.5 w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      40 Ticket Left
                    </Text>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[88px] rounded-md text-center text-xs"
                      shape="round"
                      color="blue_A700"
                      variant="outline"
                    >
                      Book Ticket
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-40 md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  src="images/img_rectangle1320.png"
                  alt="Rectangle1320 Six"
                />
                <div className="flex flex-col items-start justify-end mt-1 pt-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroySemiBold18Black900"
                    >
                      Music concert
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtGilroySemiBold14Bluegray400"
                    >
                      7:30 PM
                    </Text>
                  </div>
                  <Text
                    className="mt-[21px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    Elgin St. Celina, Delaware 10299
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-3.5 w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      40 Ticket Left
                    </Text>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[88px] rounded-md text-center text-xs"
                      shape="round"
                      color="blue_A700"
                      variant="outline"
                    >
                      Book Ticket
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-40 md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                  src="images/img_rectangle1320_160X300.png"
                  alt="Rectangle1320 Seven"
                />
                <div className="flex flex-col items-center justify-start mt-1 pt-[3px] w-full">
                  <div className="flex flex-row gap-2 items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroySemiBold18Black900"
                    >
                      Music concert
                    </Text>
                    <Text
                      className="text-blue-A700 text-right text-sm"
                      size="txtGilroySemiBold14BlueA700"
                    >
                      7:30 PM
                    </Text>
                  </div>
                  <Text
                    className="mt-[19px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    Elgin St. Celina, Delaware 10299
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-between mt-3.5 w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      40 Ticket Left
                    </Text>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[88px] rounded-md text-center text-xs"
                      shape="round"
                      color="blue_A700"
                      variant="outline"
                    >
                      Book Ticket
                    </Button>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
