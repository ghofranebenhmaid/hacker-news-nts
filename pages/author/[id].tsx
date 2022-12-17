import Head from "next/head";
import { Fragment } from "react";
import { GetServerSideProps } from "next";
import Author from "../../components/Author/Author";
import { Auth } from "../../types";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/user/${context.query.id}.json`
  );
  const author = await res.json();

  return {
    props: { author },
  };
};

export default AuthorInfo;
