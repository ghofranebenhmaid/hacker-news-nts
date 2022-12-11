import React from "react";
import Story from "./Story";
import styles from "./story.module.scss";

const StoryList = (props: any) => {
  if (props.stories.length === 0) {
    return <p className="center">No stories found!!</p>;
  }
  return (
    <ol>
      {props.stories?.map((story: any, index: number) => (
        <Story
          key={index}
          title={story.title}
          score={story.score}
          url={story.url}
          by={story.by}
          time={story.time}
        />
      ))}
    </ol>
  );
};

export default StoryList;
