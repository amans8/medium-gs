import React from "react";
import { Box } from "@gluestack-ui/themed";
import styles from "./StaffPick.module.css";
import { StarPicksProps } from "@/app/types/globalTypes";
import Heading from "../Heading";
import StaffPick from "./StaffPick";

const StafPicks = ({ staffPicks }: StarPicksProps) => {
  return (
    <Box mt={20}>
      <Heading title=" Staff Picks" />
      {staffPicks.map((chatData: any, index: number) => (
        <StaffPick
          key={index}
          uri={chatData?.uri}
          name={chatData?.name}
          tagLine={chatData?.tagLine}
        />
      ))}
      <a href="/" className={styles.full_list}>
        See the full list
      </a>
    </Box>
  );
};

export default StafPicks;
