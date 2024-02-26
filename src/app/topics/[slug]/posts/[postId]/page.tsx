import paths from "@/app/path";
import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import PostShow from "@/components/posts/post-show";
import PostShowLoading from "@/components/posts/post-show-loading";
import {
  CommentWithAuthor,
  fetchCommentsByPostId,
} from "@/db/queries/comments";
import Link from "next/link";
import { Suspense } from "react";

interface IPostShowPage {
  params: {
    slug: string;
    postId: string;
  };
}
export default function PostShowPage({ params }: IPostShowPage) {
  const { slug, postId } = params;
  return (
    <div className="space-y-2">
      <Link href={paths.topicShow(slug)}>Back</Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>

      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
}
