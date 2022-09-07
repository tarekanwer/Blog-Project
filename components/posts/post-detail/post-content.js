import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';
import PostHeader from './post-header';


const PostContent = (props) => {
  const post = props.post;
    const imgPath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article  className={classes.content}>
        <PostHeader title = {post.title} image = {imgPath} />
        <ReactMarkdown>{post.content}</ReactMarkdown>
        
    </article>
  )
}

export default PostContent