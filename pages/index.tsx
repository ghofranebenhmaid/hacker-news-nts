import { GetStaticProps, NextPage } from "next";
import { Fragment } from "react";
import StoryList from "../components/Stories/StoryList";
import { HackerNewsStory } from "../types";

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

const Home: NextPage<{ stories: HackerNewsStory[] }> = ({ stories }) => {
  return (
    <Fragment>
      <main>
        <StoryList stories={stories} />
      </main>
    </Fragment>
  );
};
export default Home;
