import React from "react";
import { Box } from "@gluestack-ui/themed";
import styles from "./Tags.module.css";
import { useGlobalContext } from "@/app/context/store";
import { blogs } from "../../../data/data.json";
import Heading from "../Heading";

const Tags = ({ tags }: { tags: any }) => {
  const { setBlogs } = useGlobalContext();
  const handleTagClick = (tag: string) => {
    const filteredBlogs = blogs.filter((blog: any) => blog.tag === tag);
    setBlogs(filteredBlogs);
  };
  return (
    <Box mt={42}>
      <Heading title="Recommended Topics" />
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {tags.map((tag: string, index: number) => (
          <div
            key={index}
            style={{
              backgroundColor: "#F2F2F2",
              padding: "8px 16px",
              borderRadius: "1rem",
              fontSize: "14px",
              margin: "0px 8px 8px 0px",
              lineHeight: "20px",
              cursor: "pointer",
            }}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </div>
        ))}
      </Box>
      <a href="/" className={styles.full_list}>
        See the full list
      </a>
    </Box>
  );
};

export default Tags;
