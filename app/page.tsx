"use client";
import { useEffect } from "react";
import { useGlobalContext } from "./context/store";
import Navigation from "./components/navigation/Navigation";
// import { useRouter } from "next/navigation";
import { blogs } from "../data/data.json";
import { Box } from "@gluestack-ui/themed";
import Blogs from "./components/blogs/Blogs";
import StafPicks from "./components/staffpicks/StaffPicks";
import Tags from "./components/tags/Tags";
import WhoToFollow from "./components/whoToFollow/WhoToFollow";
import { whoToFollow, staffPicks, recommendedTopics } from "../data/data.json";

const dashboardContainer = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-evenly",
};

const Home = () => {
  const { userID, setUserID, setBlogs } = useGlobalContext();
  // const router = useRouter();
  console.log(blogs, "blogsabcd");

  useEffect(() => {
    if (userID !== "") {
      setBlogs(blogs);
      // router.push("/dashboard");
    } else {
      const id = localStorage.getItem("userID");
      if (id) {
        setUserID(id);
      }
    }
  }, [userID]);
  console.log("This is userId", userID);
  return (
    <main>
      <Navigation />
      {userID ? (
        //@ts-ignore
        <Box {...dashboardContainer}>
          <Box width={"50%"} pt={50}>
            <Blogs blogs={blogs} />
          </Box>
          <Box
            width={"25%"}
            pl={40}
            pt={50}
            borderLeftWidth={1}
            borderLeftColor="#F2F2F2"
          >
            <StafPicks staffPicks={staffPicks} />
            <Tags tags={recommendedTopics} />
            <WhoToFollow whoToFollow={whoToFollow} />
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          flex={1}
          justifyContent="center"
          alignItems="center"
          width={"100%"}
          //@ts-ignore
          height={"90vh"}
        >
          <h1>Medium</h1>
        </Box>
      )}
    </main>
  );
};

export default Home;
