import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ScoringPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-blue_gray-900_01 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[97%]">
              <div className="flex flex-row font-pilatextended gap-[18px] items-start justify-between py-[5px] w-[12%] md:w-full">
                <div className="flex flex-row gap-2 items-start justify-start mt-[3px] w-[49%]">
                  <div className="bg-deep_orange-A400 h-2 my-1 rounded-[50%] w-2"></div>
                  <Text
                    className="text-lg text-white-A700 uppercase"
                    size="txtPilatExtendedHeavy18"
                  >
                    Live
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start mt-[3px]">
                  <Text
                    className="text-lg text-white-A700_87 uppercase"
                    size="txtPilatExtendedHeavy18WhiteA70087"
                  >
                    Line
                  </Text>
                </div>
              </div>
              <Input
                name="InputField"
                placeholder="Search Game"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-gilroy font-medium p-0 text-base text-left w-full"
                wrapClassName="flex md:ml-[0] ml-[111px] md:mt-0 my-1.5 rounded-md w-[31%] md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 m-3"
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
                color="gray_900_01"
                size="xs"
              ></Input>
              <div className="bg-gray-900_01 flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[526px] p-2 rounded-[50%] w-14">
                <div className="md:h-9 h-[35px] mb-1 relative w-9">
                  <Img
                    className="absolute bottom-[0] h-8 left-[0] w-8"
                    src="images/img_notification.svg"
                    alt="notification"
                  />
                  <Text
                    className="absolute bg-red-700 border border-gray-900_01 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-blue_gray-200 text-xs top-[0] w-[18px]"
                    size="txtOpenSansRomanSemiBold12"
                  >
                    2
                  </Text>
                </div>
              </div>
              <Button
                className="flex h-14 items-center justify-center ml-8 md:ml-[0] w-14"
                shape="circle"
                color="gray_900_01"
                size="lg"
              >
                <Img
                  className="h-8"
                  src="images/img_settings.svg"
                  alt="settings"
                />
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-end max-w-[1267px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[26px] items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[34%] md:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[116px] rounded-[5px]"
                leftIcon={
                  <Img
                    className="h-[26px] ml-2.5 mr-2 my-2.5"
                    src="images/img_globe.svg"
                    alt="globe"
                  />
                }
                shape="round"
                color="blue_A700"
                size="xl"
              >
                <div className="font-bold text-base text-left">Football</div>
              </Button>
              <Button
                className="flex h-[46px] items-center justify-center rounded-[5px] w-[46px]"
                shape="round"
                color="blue_gray_900_01"
                size="lg"
              >
                <Img
                  className="h-[21px]"
                  src="images/img_globe.svg"
                  alt="globe"
                />
              </Button>
              <Img
                className="h-[46px] rounded-[5px] w-[46px]"
                src="images/img_tabs.svg"
                alt="Tabs"
              />
              <Img
                className="h-[46px] rounded-[5px] w-[46px]"
                src="images/img_tabs_46X46.svg"
                alt="Tabs One"
              />
              <Img
                className="h-[46px] rounded-[5px] w-[46px]"
                src="images/img_tabs_1.svg"
                alt="Tabs Two"
              />
              <Img
                className="h-[46px] rounded-[5px] w-[46px]"
                src="images/img_info.svg"
                alt="info"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="text-white-A700_87 text-xs"
                          size="txtGilroyMedium12WhiteA70087"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_18X18.svg"
                            alt="globe One"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="ml-[185px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            0
                          </Text>
                          <Text
                            className="ml-[17px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_1.svg"
                            alt="globe One"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="ml-[169px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[15px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_play.svg"
                            alt="play"
                          />
                          <Text
                            className="text-[10px] text-white-A700_87"
                            size="txtSFUIDisplayRegular10"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white-A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          src="images/img_signal.svg"
                          alt="signal"
                        />
                        <Text
                          className="mb-1 rotate-[90deg] text-[10px] text-gray-400"
                          size="txtLatoBold10"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.8
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        2.1
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="text-white-A700_87 text-xs"
                          size="txtGilroyMedium12WhiteA70087"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_2.svg"
                            alt="globe Two"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="ml-[185px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            0
                          </Text>
                          <Text
                            className="ml-[17px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_3.svg"
                            alt="globe One One"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="ml-[169px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[15px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_play.svg"
                            alt="play One"
                          />
                          <Text
                            className="text-[10px] text-white-A700_87"
                            size="txtSFUIDisplayRegular10"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white-A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          src="images/img_signal.svg"
                          alt="signal One"
                        />
                        <Text
                          className="mb-1 rotate-[90deg] text-[10px] text-gray-400"
                          size="txtLatoBold10"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.8
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        2.1
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="text-white-A700_87 text-xs"
                          size="txtGilroyMedium12WhiteA70087"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_4.svg"
                            alt="globe Three"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="ml-[185px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            0
                          </Text>
                          <Text
                            className="ml-[17px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_5.svg"
                            alt="globe One Two"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="ml-[169px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[15px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_play.svg"
                            alt="play Two"
                          />
                          <Text
                            className="text-[10px] text-white-A700_87"
                            size="txtSFUIDisplayRegular10"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white-A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          src="images/img_signal.svg"
                          alt="signal Two"
                        />
                        <Text
                          className="mb-1 rotate-[90deg] text-[10px] text-gray-400"
                          size="txtLatoBold10"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.8
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        2.1
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="text-white-A700_87 text-xs"
                          size="txtGilroyMedium12WhiteA70087"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_6.svg"
                            alt="globe Four"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="ml-[185px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            0
                          </Text>
                          <Text
                            className="ml-[17px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_7.svg"
                            alt="globe One Three"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="ml-[169px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[15px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_play.svg"
                            alt="play Three"
                          />
                          <Text
                            className="text-[10px] text-white-A700_87"
                            size="txtSFUIDisplayRegular10"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white-A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          src="images/img_signal.svg"
                          alt="signal Three"
                        />
                        <Text
                          className="mb-1 rotate-[90deg] text-[10px] text-gray-400"
                          size="txtLatoBold10"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.8
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        2.1
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="text-white-A700_87 text-xs"
                          size="txtGilroyMedium12WhiteA70087"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_8.svg"
                            alt="globe Five"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="ml-[185px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            0
                          </Text>
                          <Text
                            className="ml-[17px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_9.svg"
                            alt="globe One Four"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="ml-[169px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[15px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_play.svg"
                            alt="play Four"
                          />
                          <Text
                            className="text-[10px] text-white-A700_87"
                            size="txtSFUIDisplayRegular10"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white-A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          src="images/img_signal.svg"
                          alt="signal Four"
                        />
                        <Text
                          className="mb-1 rotate-[90deg] text-[10px] text-gray-400"
                          size="txtLatoBold10"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.8
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        2.1
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="text-white-A700_87 text-xs"
                          size="txtGilroyMedium12WhiteA70087"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_10.svg"
                            alt="globe Six"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="ml-[185px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            0
                          </Text>
                          <Text
                            className="ml-[17px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_11.svg"
                            alt="globe One Five"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="ml-[169px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[15px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_play.svg"
                            alt="play Five"
                          />
                          <Text
                            className="text-[10px] text-white-A700_87"
                            size="txtSFUIDisplayRegular10"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white-A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          src="images/img_signal.svg"
                          alt="signal Five"
                        />
                        <Text
                          className="mb-1 rotate-[90deg] text-[10px] text-gray-400"
                          size="txtLatoBold10"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.8
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        2.1
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="text-white-A700_87 text-xs"
                          size="txtGilroyMedium12WhiteA70087"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_12.svg"
                            alt="globe Seven"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="ml-[185px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            0
                          </Text>
                          <Text
                            className="ml-[17px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_13.svg"
                            alt="globe One Six"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="ml-[169px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[15px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_play.svg"
                            alt="play Six"
                          />
                          <Text
                            className="text-[10px] text-white-A700_87"
                            size="txtSFUIDisplayRegular10"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white-A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          src="images/img_signal.svg"
                          alt="signal Six"
                        />
                        <Text
                          className="mb-1 rotate-[90deg] text-[10px] text-gray-400"
                          size="txtLatoBold10"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.8
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        2.1
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="text-white-A700_87 text-xs"
                          size="txtGilroyMedium12WhiteA70087"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_14.svg"
                            alt="globe Eight"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="ml-[185px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            0
                          </Text>
                          <Text
                            className="ml-[17px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_15.svg"
                            alt="globe One Seven"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="ml-[169px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[15px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_play.svg"
                            alt="play Seven"
                          />
                          <Text
                            className="text-[10px] text-white-A700_87"
                            size="txtSFUIDisplayRegular10"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white-A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          src="images/img_signal.svg"
                          alt="signal Seven"
                        />
                        <Text
                          className="mb-1 rotate-[90deg] text-[10px] text-gray-400"
                          size="txtLatoBold10"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.8
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        2.1
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="text-white-A700_87 text-xs"
                          size="txtGilroyMedium12WhiteA70087"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_16.svg"
                            alt="globe Nine"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="ml-[185px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            0
                          </Text>
                          <Text
                            className="ml-[17px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_17.svg"
                            alt="globe One Eight"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="ml-[169px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[15px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_play.svg"
                            alt="play Eight"
                          />
                          <Text
                            className="text-[10px] text-white-A700_87"
                            size="txtSFUIDisplayRegular10"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white-A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          src="images/img_signal.svg"
                          alt="signal Eight"
                        />
                        <Text
                          className="mb-1 rotate-[90deg] text-[10px] text-gray-400"
                          size="txtLatoBold10"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.8
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        2.1
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="text-white-A700_87 text-xs"
                          size="txtGilroyMedium12WhiteA70087"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_18.svg"
                            alt="globe Ten"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="ml-[185px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            0
                          </Text>
                          <Text
                            className="ml-[17px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_19.svg"
                            alt="globe One Nine"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="ml-[169px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[15px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_play.svg"
                            alt="play Nine"
                          />
                          <Text
                            className="text-[10px] text-white-A700_87"
                            size="txtSFUIDisplayRegular10"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white-A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          src="images/img_signal.svg"
                          alt="signal Nine"
                        />
                        <Text
                          className="mb-1 rotate-[90deg] text-[10px] text-gray-400"
                          size="txtLatoBold10"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.8
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        2.1
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="text-white-A700_87 text-xs"
                          size="txtGilroyMedium12WhiteA70087"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_20.svg"
                            alt="globe Eleven"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="ml-[185px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            0
                          </Text>
                          <Text
                            className="ml-[17px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_21.svg"
                            alt="globe One Ten"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="ml-[169px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[15px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_play.svg"
                            alt="play Ten"
                          />
                          <Text
                            className="text-[10px] text-white-A700_87"
                            size="txtSFUIDisplayRegular10"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white-A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          src="images/img_signal.svg"
                          alt="signal Ten"
                        />
                        <Text
                          className="mb-1 rotate-[90deg] text-[10px] text-gray-400"
                          size="txtLatoBold10"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.8
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        2.1
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                        <Text
                          className="text-white-A700_87 text-xs"
                          size="txtGilroyMedium12WhiteA70087"
                        >
                          Premier League
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_22.svg"
                            alt="globe Twelve"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Chelsea
                          </Text>
                          <Text
                            className="ml-[185px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            0
                          </Text>
                          <Text
                            className="ml-[17px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_globe_23.svg"
                            alt="globe One Eleven"
                          />
                          <Text
                            className="ml-2 mt-0.5 text-white-A700 text-xs"
                            size="txtGilroyBold12"
                          >
                            Leicester C
                          </Text>
                          <Text
                            className="ml-[169px] mt-0.5 text-base text-white-A700_75 uppercase"
                            size="txtPilatExtendedHeavy16"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[15px] mt-0.5 text-base text-white-A700 uppercase"
                            size="txtPilatExtendedHeavy16WhiteA700"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-row font-sfuidisplay gap-2.5 items-start justify-start w-[18%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_play.svg"
                            alt="play Eleven"
                          />
                          <Text
                            className="text-[10px] text-white-A700_87"
                            size="txtSFUIDisplayRegular10"
                          >
                            49:30
                          </Text>
                        </div>
                      </div>
                      <div className="border-[0.5px] border-solid border-white-A700_7f flex flex-col font-lato gap-1.5 items-center justify-center p-[7px] rotate-[-90deg] rounded-md w-[10%]">
                        <Img
                          className="h-[11px] mt-[5px] rounded-sm w-2.5"
                          src="images/img_signal.svg"
                          alt="signal Eleven"
                        />
                        <Text
                          className="mb-1 rotate-[90deg] text-[10px] text-gray-400"
                          size="txtLatoBold10"
                        >
                          790
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-lato gap-2 items-center justify-between w-full">
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.8
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        2.1
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                      <Button
                        className="border-[0.5px] border-black-900_0c border-solid cursor-pointer font-bold leading-[normal] min-w-[83px] rounded-md text-center text-xs"
                        shape="round"
                      >
                        1.3
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoringPage;
