import Image from "next/image";
import Link from "next/link";
import styles from "./author.module.scss";

const Author = (props: any) => {
  return (
    <div className="container">
      <div className={styles.cart}>
        <div>
          <Image src={"/user.png"} alt={props.id} width={70} height={70} />
          <p> Name: {props.id}</p>
          <p> Karma score: {props.karma}</p>
        </div>
        <Link href={"/"}>
          <h3>Go back!</h3>
        </Link>
      </div>
    </div>
  );
};

export default Author;
