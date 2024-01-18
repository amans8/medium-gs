"use client";
import BlogDetails from "@/app/components/blogDetails/BlogDetails";
import Navigation from "@/app/components/navigation/Navigation";
import { useGlobalContext } from "@/app/context/store";
import { BlogDetails as BlogDetailsType } from "@/app/types/globalTypes";
import { useEffect, useState } from "react";
import { blogs as allBlogs } from "@/data/data.json";
import { useRouter } from "next/navigation";

interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

const Blog = ({ params: { slug } }: BlogDetailsProps) => {
  const { blogs, setBlogs, userID, setUserID } = useGlobalContext();
  const [blogDetails, setBlogDetails] = useState<BlogDetailsType | null>(null);
  const router = useRouter();
  useEffect(() => {
    const blog = blogs.find((blog) => blog.slug === slug);
    setBlogDetails(blog);
  }, [blogs]);
  useEffect(() => {
    if (userID !== "") {
      setBlogs(blogs);
    } else {
      const id = localStorage.getItem("userID");
      if (id) {
        setUserID(id);
        setBlogs(allBlogs);
      } else {
        router.push("/");
      }
    }
  }, [userID]);

  return (
    <main>
      <Navigation />
      {!blogDetails ? (
        <div
          style={{
            width: "100%",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          page not found
        </div>
      ) : (
        <BlogDetails
          name={blogDetails?.name}
          title={blogDetails?.title}
          description={blogDetails?.description}
          uri={blogDetails?.uri}
          localImage={blogDetails?.localImage}
        />
      )}
    </main>
  );
};

export default Blog;

// export async function getStaticParams() {
//   return [
//     {
//       slug: "blog-1",
//     },
//     {
//       slug: "blog-2",
//     },
//     {
//       slug: "blog-3",
//     },
//   ];
// }
