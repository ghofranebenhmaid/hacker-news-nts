import React from "react";
import Story from "./Story";
import styles from "./story.module.scss";

const StoryList = (props: any) => {
  if (props.stories.length === 0) {
    return <p className="center">No stories found!!</p>;
  }
  return (
    <div className={styles.grid}>
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
    </div>
  );
};

export default StoryList;
