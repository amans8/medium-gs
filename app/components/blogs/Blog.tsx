import React from "react";
import {
  Box,
  Avatar,
  AvatarImage,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import Image from "next/image";
import styles from "./Blogs.module.css";
import Link from "next/link";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BlogDetails } from "@/app/types/globalTypes";

interface BlogProps extends BlogDetails {
  userID: string;
}

const containerStyles = {
  display: "flex",
  width: "100%",
  paddingTop: 24,
  borderBottomWidth: 1,
  borderBottomColor: "#f2f2f2",
};
const avatarContainerStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 5,
};
const Blog = ({
  uri,
  title,
  description,
  localImage,
  tag,
  userID,
  name,
  slug,
}: BlogProps) => {
  return (
    //@ts-ignore
    <Box {...containerStyles}>
      {
        //@ts-ignore
        <Box {...avatarContainerStyles}>
          {uri ? (
            <Avatar size="sm" bgColor="#fff">
              <AvatarImage
                source={{
                  uri: uri,
                }}
                sx={{ width: 28, height: 28, bgColor: "#fff" }}
                alt="author"
              />
            </Avatar>
          ) : (
            <Avatar bgColor="#00579B" size="sm" borderRadius="$full">
              <AvatarFallbackText sx={{ _light: { color: "#fff" } }}>
                {userID}
              </AvatarFallbackText>
            </Avatar>
          )}
          <p className={styles.author_name}>{name ?? userID}</p>
          <p className={styles.blog_date}>. May 2</p>
        </Box>
      }
      <div className={styles.blog_details_contianer}>
        <div className={styles.blog_details}>
          <Link href={`/blogs/${slug}`} className={styles.hyper_link}>
            <h2 className={styles.blog_title}>{title}</h2>
            <div className={styles.blog_description}>{description}</div>
          </Link>
          <div className={styles.action_icons}>
            <Box display="flex" flexDirection="row" alignItems="center">
              <div className={styles.tag}>{tag}</div>
              <div className={styles.read}>4 min read</div>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              width={100}
              justifyContent="space-between"
            >
              <MdOutlineBookmarkAdd color="#6B6B6B" fontSize={22} />
              <IoIosRemoveCircleOutline color="#6B6B6B" fontSize={22} />
              <BiDotsHorizontalRounded color="#6B6B6B" fontSize={22} />
            </Box>
          </div>
        </div>
        <Image
          alt="blog image"
          src={localImage ?? "/assets/image.webp"}
          width={100}
          height={100}
        />
      </div>
    </Box>
  );
};

export default Blog;
