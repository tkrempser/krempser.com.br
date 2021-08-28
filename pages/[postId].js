import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  const postId = router.query.postId;

  return <h1>{postId}</h1>;
};

export default Post;
