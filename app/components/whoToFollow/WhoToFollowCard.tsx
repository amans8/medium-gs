import React from "react";
import { WhoToFollow } from "@/app/types/globalTypes";
import { Avatar, AvatarImage, Box, Button } from "@gluestack-ui/themed";
import styles from "./WhoToFollow.module.css";

const container = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingTop: 16,
};

const WhoToFollowCard = ({ uri, name, about }: WhoToFollow) => {
  return (
    //@ts-ignore
    <Box {...container}>
      <div style={{ display: "flex", width: "75%" }}>
        <Avatar size="sm">
          <AvatarImage
            source={{
              uri: uri,
            }}
            sx={{ width: 32, height: 32, bgColor: "#fff" }}
            alt="author"
          />
        </Avatar>
        <div className={styles.details}>
          <h2 className={styles.heading}>{name}</h2>
          <div className={styles.about}>{about}</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          size="sm"
          variant="outline"
          borderRadius={"$full"}
          borderColor="#242424"
        >
          Follow
        </Button>
      </div>
    </Box>
  );
};

export default WhoToFollowCard;
