import Link from "next/link";
import { getDateSincePost } from "../../helpers/date-format";
import styles from "./story.module.scss";
const Story = (props: any) => {
  return (
    <li className={styles.grid}>
      <div className={styles.cart}>
        <span className={styles["cart__date"]}>
          {" "}
          {getDateSincePost(props.time)}
        </span>
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
        <span className={styles["cart__score"]}>
          {props.score} {props.score > 1 ? "points " : "point "}
          <span>by </span>
        </span>
        <Link href={`/author/${props.by}`}>
          <span className={styles["cart__author"]}>{props.by}</span>
        </Link>
      </div>
    </li>
  );
};

export default Story;
