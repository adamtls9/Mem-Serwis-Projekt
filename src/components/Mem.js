import React from "react";

function Mem(props) {
  const [countUp, setCountUp] = React.useState(0);
  const [countDown, setCountDown] = React.useState(0);

  function like() {
    setCountUp((prevCount) => prevCount + 1);
  }

  function dislike() {
    setCountDown((prevCount) => prevCount + 1);
  }

  return (
    <div className="MemMain">
      <div>
        <h2 className="title">{props.mem.title}</h2>
        <img className="image" src={props.mem.img} alt="random pic" />
        <div className="buttons">
          <button className="upvote" onClick={like}>
            HOT {props.mem.upvotes} {countUp}
          </button>
          <button className="downvote" onClick={dislike}>
            meh {props.mem.downvotes} {countDown}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mem;
