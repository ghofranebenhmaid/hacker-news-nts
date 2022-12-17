import Head from "next/head";
import { Fragment } from "react";
import Author from "./components/Author/Author";
import { Auth } from "./types";

const AuthorInfo = ({ author }: { author: Auth }) => {
  return (
    <Fragment>
      <Head>
        <title>{author.id}</title>
        <meta name="description" content={author.id} />
      </Head>
      <Author id={author.id} karma={author.karma} />
    </Fragment>
  );
};

export async function getStaticPaths() {
  // Fetch the list of top stories
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const topStoriesIds = await res.json();

  // Fetch the details of each individual story
  const stories = await Promise.all(
    topStoriesIds.map(async (id: number) => {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      return res.json();
    })
  );
  return {
    paths: stories.map((author) => {
      return { params: { id: String(author.by) } };
    }),
    fallback: false,
  };
}

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/user/${params.id}.json`
  );
  const author = await res.json();

  return {
    props: { author },
  };
};

export default AuthorInfo;
