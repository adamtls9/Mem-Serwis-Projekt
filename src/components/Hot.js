import React from "react";
import data from "./data";
import Mem from "./Mem";

function Hot() {
  const memes = data.map((mem) => {
    return <Mem key={mem.id} mem={mem} />;
  });
  return (
    <div>
      <p>Hot!</p>
      {memes}
    </div>
  );
}

export default Hot;
