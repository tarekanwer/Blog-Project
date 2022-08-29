import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';
import PostHeader from './post-header';

const dummyPost = {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    content : '# This is a first post'
  }

const PostContent = () => {
    const imgPath = `/images/posts/${dummyPost.slug}/${dummyPost.image}`
  return (
    <article  className={classes.content}>
        <PostHeader title = {dummyPost.title} image = {imgPath} />
        <ReactMarkdown>{dummyPost.content}</ReactMarkdown>
        
    </article>
  )
}

export default PostContent