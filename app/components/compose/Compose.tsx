import { useGlobalContext } from "@/app/context/store";
import React from "react";
import {
  Box,
  InputField,
  Input,
  Button,
  ButtonText,
  FormControl,
  Heading,
  Icon,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  AddIcon,
  Textarea,
  TextareaInput,
  CloseIcon,
  InputIcon,
  VStack,
  Toast,
  useToast,
  ToastTitle,
  ToastDescription,
} from "@gluestack-ui/themed";
import Image from "next/image";
import { useState } from "react";

interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const Compose = ({ showModal, setShowModal }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const { setBlogs, blogs, userID } = useGlobalContext();
  const toast = useToast();

  const removeFile = () => {
    setSelectedFile(null);
    setSelectedImage(null);
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    removeFile();
  };

  const handleSumbit = () => {
    const newBlog = {
      title,
      description,
      localImage: selectedImage,
      name: userID,
      tag: "Sample",
      slug: title.toLowerCase().split(" ").join("-"),
    };
    setBlogs([newBlog, ...blogs]);
    setShowModal(false);
    clearForm();
    toast.show({
      placement: "top",
      render: () => {
        return (
          <Toast action="success">
            <VStack space="xs">
              <ToastTitle>Success!</ToastTitle>
              <ToastDescription>Blog addedd successfully!</ToastDescription>
            </VStack>
          </Toast>
        );
      },
    });
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
          <Heading size="lg"></Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody pl={30} pr={30}>
          <Heading size="lg" textAlign="center">
            Compose Article
          </Heading>
          <FormControl>
            <Input
              variant="outline"
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={true}
              mt={30}
              borderRadius={"$full"}
              borderColor="#F5F5F5"
              bgColor="#F5F5F5"
            >
              <InputField
                placeholder="Title"
                onChange={(e: any) => setTitle(e.target.value)}
                value={title}
              />
            </Input>
            <Textarea
              size="md"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              mt={10}
              borderColor="#F5F5F5"
              bgColor="#F5F5F5"
            >
              <TextareaInput
                placeholder="Tell your story..."
                onChange={(e: any) => setDescription(e.target.value)}
              />
            </Textarea>

            <Box mt={10}>
              {selectedImage && (
                <Box position="relative" width={200} height={200} mb={10}>
                  <Image
                    alt="image"
                    src={selectedImage}
                    height={200}
                    width={200}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: -8,
                      top: -8,
                      backgroundColor: "#aaa",
                      borderRadius: "50%",
                      padding: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={removeFile}
                  >
                    <InputIcon as={CloseIcon} size="sm" />
                  </div>
                </Box>
              )}
              {!selectedImage && (
                <label>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    onChange={({ target }: any) => {
                      setSelectedImage(URL.createObjectURL(target.files[0]));
                      setSelectedFile(target.files[0]);
                    }}
                  />
                  <Box
                    height={100}
                    borderColor="#ddd"
                    borderWidth={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderStyle="dashed"
                    alignContent="center"
                  >
                    <AddIcon size="lg" margin={10} />
                  </Box>
                </label>
              )}
            </Box>

            <Button
              variant="solid"
              bgColor="#000"
              action="secondary"
              mt={10}
              size="lg"
              borderRadius={"$full"}
              onPress={handleSumbit}
              isDisabled={
                !title ||
                title.length < 4 ||
                !description ||
                description.length < 4 ||
                !selectedFile
              }
            >
              <ButtonText color="#fff">Post</ButtonText>
            </Button>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            mt={10}
            variant="outline"
            size="sm"
            action="secondary"
            onPress={handleSumbit}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Compose;
