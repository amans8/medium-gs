import React from "react";
import {
  Avatar,
  AvatarImage,
  Box,
  InputIcon,
  MessageCircleIcon,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import { PiHandsClappingThin } from "react-icons/pi";
import { CiShare1 } from "react-icons/ci";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";
import styles from "./BlogDetails.module.css";
import { ReactNode } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";
import { BlogDetails } from "@/app/types/globalTypes";
// const uri =
//   "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";\

const container = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const BlogDetails = ({
  title,
  description,
  name,
  uri,
  localImage,
}: BlogDetails) => {
  const { userID } = useGlobalContext();
  return (
    //@ts-ignore
    <Box {...container}>
      <div className={styles.container}>
        <div className={styles.blog_details}>
          <h1 className={styles.heading}>{title}</h1>
          <Box display="flex" flexDirection="row" alignItems="center">
            {uri ? (
              <Avatar size="md" bgColor="#fff">
                <AvatarImage
                  source={{
                    uri: uri,
                  }}
                  sx={{ bgColor: "#fff", width: 45, height: 45 }}
                  alt="author"
                />
              </Avatar>
            ) : (
              <Avatar bgColor="#00579B" size="md" borderRadius="$full">
                <AvatarFallbackText sx={{ _light: { color: "#fff" } }}>
                  {userID}
                </AvatarFallbackText>
              </Avatar>
            )}

            <Box pl={10}>
              <p className={styles.author_name}>
                {name} . <span className={styles.follow}>Follow</span>
              </p>
              <p className={styles.blog_date}>12 min read . May 2</p>
            </Box>
          </Box>
          <InteractiveIcons />
          <div className={styles.blog_image}>
            <Image
              alt="blog image"
              src={(localImage as string) || "/assets/image.webp"}
              layout="fill"
            />
          </div>
          <p className={styles.blog_description}>{description}</p>
          <InteractiveIcons />
          <br />
          <br />
        </div>
      </div>
    </Box>
  );
};

export default BlogDetails;

const CustomBox = ({ children }: { children: ReactNode }) => (
  <Box
    {...container}
    display="flex"
    flexDirection="row"
    justifyContent="center"
    alignItems="center"
  >
    {children}
  </Box>
);

const InteractiveIcons = () => (
  <div className={styles.interactive_icons_container}>
    {/* Left side icons */}
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      width={130}
      justifyContent="space-between"
    >
      <CustomBox>
        <PiHandsClappingThin color="#6B6B6B" fontSize={20} />{" "}
        <p style={{ fontSize: "14px", color: "#6B6B6B", marginLeft: 8 }}>465</p>
      </CustomBox>
      <CustomBox>
        <InputIcon as={MessageCircleIcon} size="lg" color="#6B6B6B" />{" "}
        <p style={{ fontSize: "14px", color: "#6B6B6B", marginLeft: 8 }}>8</p>
      </CustomBox>
    </Box>
    {/* Right Side icons */}
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      width={200}
      justifyContent="space-between"
    >
      <MdOutlineBookmarkAdd color="#6B6B6B" fontSize={20} />
      <BsPlayCircle color="#6B6B6B" fontSize={20} />
      <CiShare1 color="#6B6B6B" fontSize={20} />
      <BiDotsHorizontalRounded color="#6B6B6B" fontSize={20} />
    </Box>
  </div>
);
