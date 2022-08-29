import AllPosts from "../../components/posts/all-posts";

const dummyPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the react framework for production - it makes building React apps and sites a breeze and ships with built-in SSR ",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the react framework for production - it makes building React apps and sites a breeze and ships with built-in SSR ",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the react framework for production - it makes building React apps and sites a breeze and ships with built-in SSR ",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the react framework for production - it makes building React apps and sites a breeze and ships with built-in SSR ",
    date: "2022-02-10",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={dummyPosts} />;
};

export default AllPostsPage;
