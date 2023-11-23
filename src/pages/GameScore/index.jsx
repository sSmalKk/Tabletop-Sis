import React from "react";

import { Img, Text } from "components";

const GameScorePage = () => {
  return (
    <>
      <div className="bg-blue-A700 flex flex-col font-gilroy items-center justify-start mx-auto p-[246px] md:px-10 sm:px-5 w-full">
        <div className="md:h-[395px] h-[479px] mb-[53px] relative w-[41%] sm:w-full">
          <div className="absolute bottom-[0] md:h-[342px] h-[450px] inset-x-[0] mx-auto w-[85%]">
            <Img
              className="absolute bottom-[0] h-[342px] inset-x-[0] mx-auto rounded-[32.64px] w-[93%]"
              src="images/img_group9789.svg"
              alt="Group9789"
            />
            <div className="absolute md:h-[106px] h-[180px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="h-[180px] m-auto w-full">
                <div className="md:h-[62px] h-[98px] mb-[-24px] mx-auto w-3/5 z-[1]">
                  <div className="absolute h-[86px] inset-x-[0] mx-auto top-[0] w-[85px]">
                    <Img
                      className="h-[68px] m-auto object-cover w-[67px]"
                      src="images/img_union.png"
                      alt="Union"
                    />
                    <Img
                      className="absolute bg-gradient  h-[86px] inset-[0] justify-center m-auto rounded-[6.22px] shadow-bs1 w-[85px]"
                      src="images/img_star1.svg"
                      alt="StarOne"
                    />
                  </div>
                  <div className="absolute bottom-[0] h-[72px] left-[0] w-[72px]">
                    <Img
                      className="h-[55px] m-auto object-cover w-[54px]"
                      src="images/img_union_white_A700.png"
                      alt="Union One"
                    />
                    <Img
                      className="absolute bg-gradient  h-[72px] inset-[0] justify-center m-auto rounded-[6.22px] shadow-bs1 w-[72px]"
                      src="images/img_star1_72X72.svg"
                      alt="StarOne One"
                    />
                  </div>
                  <div className="absolute bottom-[0] h-[72px] right-[0] w-[72px]">
                    <Img
                      className="h-[55px] m-auto object-cover w-[54px]"
                      src="images/img_union_white_A700_55X54.png"
                      alt="Union Two"
                    />
                    <Img
                      className="absolute bg-gradient  h-[72px] inset-[0] justify-center m-auto rounded-[6.22px] shadow-bs1 w-[72px]"
                      src="images/img_star1_1.svg"
                      alt="StarOne Two"
                    />
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[106px] items-center justify-start mt-auto mx-auto p-[27px] sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group2236.png')" }}
                >
                  <Text
                    className="mb-2 sm:text-[33.3px] md:text-[35.3px] text-[37.3px] text-shadow-ts text-white-A700"
                    size="txtGilroyMedium373"
                  >
                    complete
                  </Text>
                </div>
              </div>
              <Text
                className="absolute bottom-[41%] inset-x-[0] mx-auto sm:text-[16.21px] md:text-[18.21px] text-[20.21px] text-pink-A700 w-max"
                size="txtGilroyMedium2021"
              >
                level 20
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[7%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-1/2">
            <Text
              className="text-2xl md:text-[22px] text-light_blue-300 sm:text-xl"
              size="txtGilroyMedium24Lightblue300"
            >
              score
            </Text>
            <Text
              className="bg-cyan-100 h-[45px] justify-center mt-1 pt-[3px] sm:px-5 px-[35px] rounded-[22.5px] text-4xl sm:text-[32px] md:text-[34px] text-blue-600 w-48"
              size="txtGilroyMedium36"
            >
              15 200
            </Text>
            <Text
              className="mt-4 text-2xl md:text-[22px] text-light_blue-300 sm:text-xl"
              size="txtGilroyMedium24Lightblue300"
            >
              reward
            </Text>
            <div className="flex flex-row gap-3 items-start justify-center mt-[5px] w-[55%] md:w-full">
              <Img
                className="h-[45px] w-3/5"
                src="images/img_coinimg.svg"
                alt="coinimg"
              />
              <Text
                className="mt-[5px] sm:text-3xl md:text-[32px] text-[34px] text-blue-600"
                size="txtGilroyMedium34"
              >
                15
              </Text>
            </div>
            <div className="bg-deep_purple-A400 flex flex-col items-center justify-start mt-[22px] outline outline-[3.11px] outline-white-A700 rounded-[27.5px] shadow-bs2 w-[70%] md:w-full">
              <div className="bg-deep_purple-A200 flex flex-col items-start justify-start mb-1.5 rounded-[24px] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-12 items-end justify-end p-1.5"
                  style={{ backgroundImage: "url('images/img_group2237.svg')" }}
                >
                  <Text
                    className="h-[33px] mt-[3px] sm:text-2xl md:text-[26px] text-[28px] text-shadow-ts1 text-white-A700 tracking-[1.12px] w-[33px]"
                    size="txtGilroyMedium28"
                  >
                    ok
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[186px] inset-x-[0] mx-auto object-cover top-[0] w-full"
            src="images/img_vector9.png"
            alt="VectorNine"
          />
        </div>
      </div>
    </>
  );
};

export default GameScorePage;
