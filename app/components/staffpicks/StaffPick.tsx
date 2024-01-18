import React from "react";
import { Avatar, AvatarImage, Box } from "@gluestack-ui/themed";
import styles from "./StaffPick.module.css";
import { StarPick } from "@/app/types/globalTypes";

const avatarContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 5,
};
const StaffPick = ({ uri, name, tagLine }: StarPick) => {
  return (
    <Box display="flex" mb={15} sx={{ _web: { fontFamily: "$mono" } }}>
      {
        //@ts-ignore
        <Box {...avatarContainer}>
          <Avatar size="sm" bgColor="#fff">
            <AvatarImage
              source={{
                uri: uri,
              }}
              sx={{ width: 28, height: 28, bgColor: "#fff" }}
              alt="author"
            />
          </Avatar>
          <p className={styles.staff_pick_name}>{name}</p>
        </Box>
      }
      <h2 className={styles.staff_pick_heading}>{tagLine}</h2>
    </Box>
  );
};

export default StaffPick;
