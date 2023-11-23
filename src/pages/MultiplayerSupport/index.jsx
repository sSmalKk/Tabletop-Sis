import React from "react";

import { Img, List, Text } from "components";

const MultiplayerSupportPage = () => {
  return (
    <>
      <div className="bg-gray-900_01 font-gilroy h-[1024px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto w-full"
          style={{ backgroundImage: "url('images/img_group2232.png')" }}
        >
          <div className="bg-gray-900_02 h-[1024px] w-full"></div>
        </div>
        <div className="absolute bottom-[0] md:h-[1024px] h-[1944px] inset-x-[0] mx-auto pb-[920px] md:px-5 w-full">
          <Img
            className="h-[1024px] mx-auto object-cover w-full"
            src="images/img_group_1024X1440.png"
            alt="Group"
          />
          <List
            className="absolute flex flex-col gap-[61px] inset-x-[0] items-center mx-auto top-[14%] w-[47%]"
            orientation="vertical"
          >
            <div className="flex flex-col items-center justify-start w-full">
              <div className="h-[175px] md:h-[214px] mb-[23px] mt-4 relative w-full">
                <div className="h-[175px] m-auto w-full">
                  <Img
                    className="h-[175px] m-auto object-cover w-full"
                    src="images/img_vector.png"
                    alt="Vector One"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[3%] flex flex-col md:gap-10 gap-[105px] h-[155px] inset-x-[0] justify-start mx-auto px-4 w-[99%]"
                    style={{
                      backgroundImage: "url('images/img_group2233.png')",
                    }}
                  >
                    <Img
                      className="h-[18px] md:h-auto md:ml-[0] ml-[13px] object-cover w-[23%]"
                      src="images/img_vector_18X141.png"
                      alt="Vector One"
                    />
                    <Img
                      className="h-8 md:h-auto md:ml-[0] ml-[325px] object-cover w-[48%]"
                      src="images/img_vector_18X141.png"
                      alt="Vector Two"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[3%] flex sm:flex-col flex-row sm:gap-10 items-end justify-between left-[6%] w-[82%]">
                  <Img
                    className="h-[7px] md:h-auto sm:mt-0 mt-[22px] object-cover"
                    src="images/img_vector_18X141.png"
                    alt="Vector Three"
                  />
                  <Text
                    className="sm:text-[22.61px] md:text-[24.61px] text-[26.61px] text-white-A700 uppercase"
                    size="txtGilroyRegular2661"
                  >
                    Single Player
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="h-[175px] md:h-[214px] sm:h-[241px] mb-[23px] mt-4 relative w-full">
                <div className="h-[175px] sm:h-[202px] m-auto w-full">
                  <Img
                    className="h-[175px] m-auto object-cover w-full"
                    src="images/img_vector.png"
                    alt="Vector Two"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[3%] flex flex-col h-[155px] inset-x-[0] items-center justify-start mx-auto px-4 w-[99%]"
                    style={{
                      backgroundImage: "url('images/img_group2234.png')",
                    }}
                  >
                    <div className="flex flex-col md:gap-10 gap-[105px] justify-start w-[98%] md:w-full">
                      <Img
                        className="h-[18px] md:h-auto object-cover w-[24%]"
                        src="images/img_vector_18X141.png"
                        alt="Vector One One"
                      />
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between ml-1.5 md:ml-[0] w-full">
                        <Img
                          className="h-[7px] md:h-auto sm:mt-0 mt-6 object-cover"
                          src="images/img_vector_18X141.png"
                          alt="Vector Two One"
                        />
                        <Img
                          className="h-8 md:h-auto object-cover"
                          src="images/img_vector_18X141.png"
                          alt="Vector Three One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute bottom-[3%] right-[13%] sm:text-[22.61px] md:text-[24.61px] text-[26.61px] text-white-A700 uppercase"
                  size="txtGilroyRegular2661"
                >
                  Multi Player
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default MultiplayerSupportPage;
