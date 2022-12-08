import Link from "next/link";
import styles from "./story.module.scss";
const Story = (props: any) => {
  // const dateStart = new Date(+props.time * 1000).toLocaleString("dk-DK");
  return (
    <div className={styles.grid}>
      <div className={styles.cart}>
        <span className={styles["cart__date"]}> {props.time} </span>
        <h3 className={styles["cart__title"]}>
          <a
            className={styles["cursor-pointer text-3xl"]}
            href={props.url}
            target="_blank"
            rel="noreferrer"
          >
            {props.title}
          </a>
        </h3>
        <span className={styles["cart__score"]}>{props.score} points</span>
        <Link href={`/author/${props.by}`}>
          <span className={styles["cart__author"]}> by {props.by}</span>
        </Link>
      </div>
    </div>
  );
};

export default Story;
