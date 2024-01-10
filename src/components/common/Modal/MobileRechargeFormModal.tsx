"use client";
import { TbCurrencyTaka } from "react-icons/tb";
import { useState } from "react";
import { BiSolidLogIn } from "react-icons/bi";
import LoadingPage from "@/app/loading";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ReusableInput from "@/components/Forms/ReusableInput";
import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
import FormTitle from "@/components/Forms/FormTitle";
import { useMobileRechargeMutation } from "@/redux/api/transactionApi";

const MobileRechargeFormModal = ({
  isOpen,
  onOpen,
  onOpenChange,
  source,
}: {
  isOpen: boolean;
  onOpen: any;
  onOpenChange: any;
  source: string;
}) => {
  const [mobileRecharge, { isLoading }] = useMobileRechargeMutation();
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [errorMessage, setErrorMessage] = useState("");
  const loginHandler = async (e: any) => {
    e.preventDefault();
    const amount = parseFloat(e?.target?.amount?.value);
    const phoneNumber = e?.target?.phoneNumber?.value;
    // const reference = e?.target?.reference?.value;

    const data = {
      mobileOperators: source,
      simType: "Prepaid",
      amount,
      phoneNumber,
      // reference,
    };

    try {
      const response = await mobileRecharge(data).unwrap();

      if (response?.data) {
        toast.success(`${response?.message}`);
        if (isLoading) {
          return <LoadingPage />;
        }
        // onClose();
      }
    } catch (error: any) {
      console.log("error:", error);

      if (error?.data?.message) {
        setErrorMessage(error?.data?.message);
        // toast.error(error?.data?.message);
      }
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        scrollBehavior="inside"
        backdrop="blur"
        radius="none"
        classNames={{}}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <form
                  onSubmit={loginHandler}
                  className="flex flex-col gap-y-2 py-5"
                >
                  <div className=" mb-2">
                    <FormTitle title="Deposit" />
                  </div>
                  {/* <ReusableSelect /> */}
                  {/* Amount */}
                  <ReusableInput
                    label="Amount"
                    name="amount"
                    placeholder="15000"
                    type={"number"}
                    startContent={
                      <TbCurrencyTaka className="text-lg text-default-400  flex-shrink-0" />
                    }
                    isRequired={true}
                    isInvalid={errorMessage ? true : false}
                  />

                  <ReusableInput
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="01623985191"
                    type={"text"}
                    isRequired={true}
                    isInvalid={errorMessage ? true : false}
                  />

                  {/* Reference */}
                  <ReusableInput
                    label="Reference"
                    name="reference"
                    placeholder="Transaction Reference"
                    type={"text"}
                    errorMessage={errorMessage}
                  />
                  {/* Pin */}
                  {/* <ReusableInput
                    label="Pin"
                    name="pin"
                    placeholder="********"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <GiBleedingEye className="text-lg text-default-400 " />
                        ) : (
                          <IoEyeOffSharp className="text-lg text-default-400 " />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    startContent={
                      <TbPasswordFingerprint className="text-lg text-default-400 " />
                    }
                    isRequired={true}
                    isInvalid={errorMessage ? true : false}
                    errorMessage={errorMessage}
                  /> */}
                  <Button
                    type="submit"
                    className="text-white w-full"
                    color="secondary"
                    startContent={<BiSolidLogIn className="text-lg " />}
                    fullWidth={true}
                    radius="none"
                  >
                    Submit
                  </Button>
                </form>
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="solid" radius="none" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MobileRechargeFormModal;
