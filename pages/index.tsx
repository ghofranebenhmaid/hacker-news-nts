import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import StoryList from "../components/Stories/StoryList";
import { HackerNewsStory } from "../types";

const Home: NextPage<{ stories: HackerNewsStory[] }> = ({ stories }) => {
  return (
    <Fragment>
      <Head>
        <title>Hacker News Stories</title>
        <meta name="description" content="Hacker News Stories" />
      </Head>
      <main>
        <div className="text">
          <h1 className="title">Hacker News stories</h1>
          <h1 className="description">
            Displays 10 random Hacker News stories, listed in ascending order
            based on the stories scores.
          </h1>
        </div>
        <StoryList stories={stories} />
      </main>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // Fetch the list of top stories
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const topStoriesIds = await res.json();
  // console.log(topStoriesIds);

  const getRandom = (arr: any, count: number) => {
    let _arr = [...arr];
    return [...Array(count)].map(
      () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
    );
  };

  const random10Stories = getRandom(topStoriesIds, 10);
  // Fetch the details of each individual story
  const stories = await Promise.all(
    random10Stories.map(async (id: number) => {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      return res.json();
    })
  );
  const sortedStory = stories.sort((a, b) => +a.score - +b.score);

  return {
    props: { stories: sortedStory },
  };
};

export default Home;
