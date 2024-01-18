import React from "react";
import { Box } from "@gluestack-ui/themed";
import { useGlobalContext } from "@/app/context/store";
import Blog from "./Blog";
import { BlogDetails } from "@/app/types/globalTypes";

const Blogs = ({ blogs }: { blogs: any[] }) => {
  const { userID } = useGlobalContext();
  return (
    <Box>
      {blogs.length ? (
        blogs.map((blog: BlogDetails, index: number) => (
          <Blog
            key={index}
            uri={blog?.uri}
            title={blog.title}
            description={blog.description}
            localImage={blog?.localImage}
            tag={blog?.tag}
            userID={userID}
            name={blog?.name}
            slug={blog?.slug}
          />
        ))
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="row"
          alignItems="center"
          //@ts-ignore
          height="80vh"
        >
          No blogs found
        </Box>
      )}
    </Box>
  );
};

export default Blogs;
