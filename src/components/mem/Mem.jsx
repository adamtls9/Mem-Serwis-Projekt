import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faHeart, } from "@fortawesome/free-regular-svg-icons";
import styles from "./Mem__styles.module.css"

const Mem = ({ mem, onMemChange }) => {
  const { title, upvotes, downvotes, img } = mem;

  const handleUpvoteClick = () => {
    onMemChange({ ...mem, upvotes: upvotes + 1 });
  };

  const handleDownvoteClick = () => {
    onMemChange({ ...mem, downvotes: downvotes + 1 });
  };


  return (
    <div className={styles.mem}>
      <div className={styles.header}>
      <h3>{title}</h3>
      </div>
      <img className={styles.image} src={img} alt="mem" />
      <div className={styles.votes}>
        <button onClick={handleUpvoteClick} className={styles.upvotesBtn}>
        <FontAwesomeIcon icon={faHeart} />
                </button>
        <span className={styles.upvotes}>{upvotes}</span>
        <button onClick={handleDownvoteClick} className={styles.downvotesBtn}>
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
        <span className={styles.downvotes}>{downvotes}</span>
      </div>
    </div>
  );
};

export default memo(Mem);
