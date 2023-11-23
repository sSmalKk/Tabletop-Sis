import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, SeekBar, Switch, Text } from "components";

const CustomiseSoundsModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-1/4"
      overlayClassName="bg-black-900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-4 items-center justify-center p-5 md:px-5 rounded-md w-full">
          <Text
            className="mt-[17px] text-blue_gray-900 text-lg"
            size="txtGilroySemiBold18"
          >
            Sound Settings
          </Text>
          <div className="flex flex-col gap-[30px] items-center justify-start mb-2.5 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-[98%] md:w-full">
              <div className="flex flex-col gap-5 items-center justify-start pt-[5px] w-[97%] md:w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    Ring Volume
                  </Text>
                  <SeekBar
                    inputValue={[50.95]}
                    trackColors={["#0061ff", "#e0ebff"]}
                    thumbClassName="h-6 border-blue-A700 border-[1.5px] border-solid bg-gray-50_04 w-6 flex rounded-[50%] justify-center items-center"
                    className="flex h-[18px] rounded-[3px] w-full"
                    trackClassName="h-[5px] flex rounded-[3px] w-full"
                  />{" "}
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    Alarm Volume
                  </Text>
                  <SeekBar
                    inputValue={[50.95]}
                    trackColors={["#0061ff", "#e0ebff"]}
                    thumbClassName="h-6 border-blue-A700 border-[1.5px] border-solid bg-gray-50_04 w-6 flex rounded-[50%] justify-center items-center"
                    className="flex h-[18px] rounded-[3px] w-full"
                    trackClassName="h-[5px] flex rounded-[3px] w-full"
                  />{" "}
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-row items-end justify-between w-full">
                  <Text
                    className="mt-[5px] text-base text-blue_gray-400"
                    size="txtGilroyMedium16"
                  >
                    Vibrate on Ring
                  </Text>
                  <Switch
                    onColor="#0061ff"
                    offColor="#0061ff"
                    onHandleColor="#f9fbff"
                    offHandleColor="#f9fbff"
                    value={true}
                    className="mr-[5px]"
                  />
                </div>
                <div className="flex flex-col gap-[18px] items-center justify-start py-0.5 w-full">
                  <div className="flex flex-row items-start justify-between pt-[3px] w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Ringtone
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-between mb-0.5 w-[27%]">
                      <Text
                        className="mt-0.5 text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        Playtime
                      </Text>
                      <Img
                        className="h-4 mb-[3px] w-4"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between pt-[3px] w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Message
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-between w-[27%]">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        Bamboo
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowright.svg"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between py-0.5 w-full">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Notifications
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-between w-1/4">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyRegular14"
                      >
                        Tri-tone
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowright.svg"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-between w-full">
              <Button
                className="common-pointer cursor-pointer font-medium h-[50px] rounded-md text-base text-center w-36"
                onClick={props.onRequestClose}
                shape="round"
                color="blue_A700"
                size="2xl"
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                className="cursor-pointer font-medium rounded-md text-base text-center w-36"
                shape="round"
                color="blue_A700"
                size="2xl"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default CustomiseSoundsModal;
