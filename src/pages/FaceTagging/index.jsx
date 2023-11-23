import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const FaceTaggingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] md:mt-0 my-0.5 rounded-md w-2/5 md:w-full"
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
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-center md:ml-[0] ml-[50px] w-[31%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-row gap-3 items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                    <Text
                      className="ml-0.5 text-base text-gray-900"
                      size="txtGilroyMedium16Gray900"
                    >
                      Products
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtGilroyMedium16Gray900"
                    >
                      Resouces
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown One"
                    />
                  </div>
                </List>
                <Text
                  className="text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Request a demo
                </Text>
              </div>
              <Img
                className="h-14 md:h-auto md:ml-[0] ml-[58px] rounded-[50%] w-14"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start md:px-5 w-[42%] md:w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start p-[30px] sm:px-5 shadow-bs w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
              <div className="flex flex-row gap-6 items-center justify-start md:pr-10 sm:pr-5 pr-[137px]">
                <Img
                  className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                  src="images/img_profileimglarg_72X72.png"
                  alt="ProfileImgLarg One"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-blue_gray-900 text-xl"
                    size="txtGilroySemiBold20"
                  >
                    Rose J. Henry
                  </Text>
                  <Text
                    className="mt-0.5 text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    7 May at 19:18
                  </Text>
                </div>
              </div>
              <Img
                className="h-6 sm:mt-0 mt-3 w-6"
                src="images/img_user.svg"
                alt="user"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col font-inter h-[407px] items-end justify-start mt-6 p-4 rounded-md w-full"
              style={{ backgroundImage: "url('images/img_group925.png')" }}
            >
              <div className="flex flex-col gap-9 justify-start mb-[124px] w-[94%] md:w-full">
                <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[340px] p-2.5 w-[30%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_offer.svg"
                    alt="offer"
                  />
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtInterMedium16"
                  >
                    Tag People
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[22px] items-start justify-start mr-[25px] w-[95%] md:w-full">
                  <div className="md:h-[136px] h-[159px] mb-3 relative w-[71%] sm:w-full">
                    <div className="absolute md:h-[124px] h-[155px] inset-y-[0] left-[0] my-auto w-[68%]">
                      <div className="absolute flex flex-col gap-2 justify-start left-[0] rounded top-[0] w-[53%]">
                        <div className="border border-blue-A700 border-solid h-[83px] md:ml-[0] ml-[29px] rounded w-[84px]"></div>
                        <Button
                          className="!text-gray-50_01 cursor-pointer font-medium leading-[normal] min-w-[102px] mr-[11px] text-center text-sm"
                          shape="round"
                          color="blue_A700"
                          size="sm"
                        >
                          Jane Cooper
                        </Button>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col gap-2 justify-start right-[0] rounded w-[53%]">
                        <div className="border border-blue-A700 border-solid h-[83px] ml-7 md:ml-[0] rounded w-[84px]"></div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[99px] mr-[13px] text-center text-sm"
                          shape="round"
                          color="blue_gray_400"
                          size="sm"
                        >
                          + Add Name
                        </Button>
                      </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col gap-2 justify-start right-[0] rounded w-[35%]">
                      <div className="border border-blue-A700 border-solid h-[83px] md:ml-[0] ml-[27px] rounded w-[84px]"></div>
                      <Button
                        className="!text-gray-50_01 cursor-pointer font-medium leading-[normal] min-w-[97px] mr-3.5 text-center text-sm"
                        shape="round"
                        color="blue_A700"
                        size="sm"
                      >
                        John Hydon
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start sm:mt-0 mt-[47px] rounded w-[26%] sm:w-full">
                    <div className="border border-blue-A700 border-solid h-[83px] md:ml-[0] ml-[30px] rounded w-[84px]"></div>
                    <Button
                      className="!text-gray-50_01 cursor-pointer font-medium leading-[normal] min-w-[96px] mr-[18px] text-center text-sm"
                      shape="round"
                      color="blue_A700"
                      size="sm"
                    >
                      Lisa Cooper
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row font-gilroy items-center justify-between md:ml-[0] ml-[43px] mt-[22px] w-[85%] md:w-full">
              <Text
                className="text-blue_gray-400 text-sm"
                size="txtGilroyMedium14"
              >
                109 Likes
              </Text>
              <Text
                className="text-blue_gray-400 text-sm"
                size="txtGilroyMedium14"
              >
                03 Comment
              </Text>
              <Text
                className="text-blue_gray-400 text-sm"
                size="txtGilroyMedium14"
              >
                2 Share
              </Text>
            </div>
            <div className="border-blue_gray-100 border-solid border-y flex flex-row font-gilroy items-center justify-between mt-[9px] p-2 w-full">
              <div className="flex flex-row gap-2 items-center justify-center ml-[37px] w-[11%]">
                <Img
                  className="h-6 w-6"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Text
                  className="text-blue_gray-400 text-xs"
                  size="txtGilroyMedium12"
                >
                  Like
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-[17%]">
                <Img
                  className="h-6 w-6"
                  src="images/img_volume.svg"
                  alt="volume"
                />
                <Text
                  className="text-blue_gray-400 text-xs"
                  size="txtGilroyMedium12"
                >
                  Comment
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center mr-[23px] w-[13%]">
                <Img
                  className="h-6 w-6"
                  src="images/img_reply.svg"
                  alt="reply"
                />
                <Text
                  className="text-blue_gray-400 text-xs"
                  size="txtGilroyMedium12"
                >
                  Share
                </Text>
              </div>
            </div>
            <List
              className="flex flex-col font-gilroy gap-[34px] ml-4 md:ml-[0] mt-4 w-[36%]"
              orientation="vertical"
            >
              <div className="flex flex-row items-start justify-evenly w-full">
                <Img
                  className="h-8 md:h-auto rounded-[50%] w-8"
                  src="images/img_profileimglarg_32X32.png"
                  alt="ProfileImgLarg Two"
                />
                <div className="flex flex-col items-center justify-start rounded-[10px] w-[82%]">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-blue_gray-50 flex flex-col gap-3.5 items-start justify-end p-2.5 rounded-[10px] w-full">
                      <Text
                        className="md:ml-[0] ml-[5px] mt-1 text-blue_gray-900 text-sm"
                        size="txtGilroyBold14"
                      >
                        <span className="text-colors font-gilroy text-left text-base font-bold">
                          Landon Mosby
                        </span>
                        <span className="text-colors font-gilroy text-left font-bold">
                          {" "}
                        </span>
                        <span className="text-colors1 font-gilroy text-left text-xs font-normal">
                          2d
                        </span>
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[5px] text-blue_gray-400 text-lg"
                        size="txtGilroyRegular18"
                      >
                        Nice Pic
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start w-1/2 md:w-full">
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtGilroySemiBold14"
                      >
                        Like
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtGilroySemiBold14"
                      >
                        Reply
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start w-[85%] md:w-full">
                <Img
                  className="h-8 md:h-auto rounded-[50%] w-8"
                  src="images/img_profileimglarg.png"
                  alt="ProfileImgLarg Three"
                />
                <div className="flex flex-col items-center justify-start ml-1 rounded-[10px] w-[78%]">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-blue-50 flex flex-col gap-4 items-start justify-end p-2.5 rounded-[10px] w-full">
                      <Text
                        className="md:ml-[0] ml-[5px] mt-[3px] text-blue_gray-900 text-sm"
                        size="txtGilroyBold14"
                      >
                        <span className="text-colors font-gilroy text-left text-base font-bold">
                          Man Marin
                        </span>
                        <span className="text-colors font-gilroy text-left font-bold">
                          {" "}
                        </span>
                        <span className="text-colors1 font-gilroy text-left text-xs font-medium">
                          2d
                        </span>
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[5px] text-blue_gray-400 text-lg"
                        size="txtGilroyRegular18"
                      >
                        Nice Pic
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start w-[61%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtGilroySemiBold14"
                      >
                        Like
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtGilroySemiBold14"
                      >
                        Reply
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex sm:flex-col flex-row font-gilroy sm:gap-5 items-center justify-start mb-[9px] ml-4 md:ml-[0] mt-[27px] w-[98%] md:w-full">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg Four"
              />
              <Input
                name="Group9832"
                placeholder="Write a comment..."
                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-medium p-0 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-100 border-solid flex ml-2 sm:ml-[0] rounded-md w-[78%] sm:w-full"
                suffix={
                  <Img
                    className="h-5 ml-[35px] mr-4 my-3.5"
                    src="images/img_user_20X20.svg"
                    alt="user"
                  />
                }
              ></Input>
              <Button
                className="border border-blue_gray-100 border-solid flex h-12 items-center justify-center ml-4 sm:ml-[0] rounded-md w-12"
                shape="round"
                color="white_A700"
                size="lg"
              >
                <Img className="h-5" src="images/img_send.svg" alt="send" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaceTaggingPage;
