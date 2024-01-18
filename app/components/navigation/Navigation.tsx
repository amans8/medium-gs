"use client";
import Image from "next/image";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  Input,
  InputSlot,
  InputIcon,
  SearchIcon,
  InputField,
  AvatarFallbackText,
  EditIcon,
  BellIcon,
  ButtonText,
  Pressable,
  Tooltip,
  TooltipContent,
  TooltipText,
} from "@gluestack-ui/themed";
import { ReactNode, useState } from "react";
import LoginModal from "../login";
import Compose from "../compose/Compose";
import { useGlobalContext } from "@/app/context/store";
import styles from "./Navigation.module.css";
import { useRouter } from "next/navigation";
import { blogs } from "../../../data/data.json";

const Navigation = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showComposeModal, setShowComposeModal] = useState(false);
  const { userID, setUserID, setBlogs } = useGlobalContext();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("userID");
    setUserID("");
  };

  const filterBlogs = (e: any) => {
    const filteredBlogs = blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setBlogs(filteredBlogs);
  };
  return (
    <Box
      height={57}
      borderBottomWidth={1}
      borderBottomColor="#F2F2F2"
      pl={24}
      pr={24}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <CustomBox>
        <Pressable onPress={() => router.push("/")}>
          <Image
            alt="logo"
            src="/assets/medium_icon.png"
            width={40}
            height={40}
          />
        </Pressable>
        {userID && (
          <Input
            borderRadius={"$full"}
            size="sm"
            ml={20}
            bgColor="#F9F9F9"
            borderWidth={0}
          >
            <InputSlot pl="$3">
              <InputIcon as={SearchIcon} size="lg" />
            </InputSlot>
            <InputField placeholder="Search" onChange={filterBlogs} />
          </Input>
        )}
      </CustomBox>
      <CustomBox>
        {userID && (
          <>
            {" "}
            <Pressable
              onPress={() => {
                setShowComposeModal(true);
                console.log("clicked");
              }}
            >
              <CustomBox>
                <InputIcon as={EditIcon} size="lg" color="#6B6B6B" />{" "}
                <p className={styles.write_text}>Write</p>
              </CustomBox>
            </Pressable>
            <InputIcon as={BellIcon} size="lg" color="#6B6B6B" ml={30} />{" "}
            <Pressable onPress={logout}>
              <Tooltip
                placement="bottom"
                trigger={(triggerProps: any) => {
                  return (
                    <Avatar
                      bgColor="#00579B"
                      size="sm"
                      borderRadius="$full"
                      ml={30}
                      {...triggerProps}
                    >
                      <AvatarFallbackText sx={{ _light: { color: "#fff" } }}>
                        {userID}
                      </AvatarFallbackText>
                    </Avatar>
                  );
                }}
              >
                <TooltipContent>
                  <TooltipText>Log Out</TooltipText>
                </TooltipContent>
              </Tooltip>
            </Pressable>
          </>
        )}
        {!userID && (
          <Button
            bgColor="#000000"
            size="md"
            borderRadius={"$full"}
            variant="solid"
            action="default"
            onPress={() => setShowLoginModal(true)}
            ml={30}
          >
            <ButtonText fontWeight="200" color="#FFFFFF">
              Get started
            </ButtonText>
          </Button>
        )}
      </CustomBox>
      <LoginModal showModal={showLoginModal} setShowModal={setShowLoginModal} />
      <Compose
        showModal={showComposeModal}
        setShowModal={setShowComposeModal}
      />
    </Box>
  );
};

const CustomBox = ({ children }: { children: ReactNode }) => (
  <Box display="flex" flexDirection="row" alignItems="center">
    {children}
  </Box>
);

export default Navigation;
