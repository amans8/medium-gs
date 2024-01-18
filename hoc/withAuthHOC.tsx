import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useGlobalContext } from "@/app/context/store";
import { blogs as allBlogs } from "@/data/data.json";

const withAuthHOC = (WrappedComponent: any) => {
  const HocComponent = ({ ...props }) => {
    const { userID, setUserID, setBlogs, blogs } = useGlobalContext();
    const router = useRouter();
    const setAllBlogs = () => {
      if (blogs.length) {
        setBlogs(blogs);
      } else {
        setBlogs(allBlogs);
      }
    };
    useEffect(() => {
      if (userID !== "") {
        setAllBlogs();
        // router.push("/dashboard");
      } else {
        const id = localStorage.getItem("userID");
        if (id) {
          setUserID(id);
          setAllBlogs();
        } else {
          router.push("/");
        }
      }
    }, [userID, router, setUserID, setBlogs]);
    return <WrappedComponent {...props} />;
  };

  return HocComponent;
};

export default withAuthHOC;
