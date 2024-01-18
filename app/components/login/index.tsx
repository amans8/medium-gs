import React from "react";
import {
  ButtonText,
  CloseIcon,
  Icon,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
  Heading,
  InputField,
  Input,
  FormControl,
} from "@gluestack-ui/themed";
import { useGlobalContext } from "@/app/context/store";
import { Controller, useForm } from "react-hook-form";
interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

type AuthSchemaType = {
  userName: string;
};

const LoginModal = ({ showModal, setShowModal }: Props) => {
  const { setUserID } = useGlobalContext();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthSchemaType>({
    defaultValues: {
      userName: "",
    },
  });

  const onSubmit = (data: AuthSchemaType) => {
    localStorage.setItem("userID", data.userName);
    setUserID(data.userName);
    setShowModal(false);
  };
  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg" />
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody pl={30} pr={30}>
          <Heading size="lg" textAlign="center">
            Join Medium.
          </Heading>
          <FormControl>
            <Controller
              name="userName"
              control={control}
              rules={{
                required: { value: true, message: "username is required" },
                minLength: {
                  value: 3,
                  message: "username must be at least 3 characters",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  variant="outline"
                  size="lg"
                  mt={30}
                  borderRadius={"$full"}
                >
                  <InputField
                    placeholder="User name"
                    value={value}
                    onChangeText={onChange}
                    //@ts-ignore
                    value={value}
                    onBlur={onBlur}
                  />
                </Input>
              )}
            />

            <Button
              variant="solid"
              bgColor="#000"
              action="secondary"
              mt={10}
              size="lg"
              borderRadius={"$full"}
              isDisabled={isSubmitting}
              onPress={handleSubmit(onSubmit)}
            >
              <ButtonText color="#fff">Login</ButtonText>
            </Button>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            mt={10}
            variant="outline"
            size="sm"
            action="secondary"
            onPress={() => {
              setShowModal(false);
            }}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
