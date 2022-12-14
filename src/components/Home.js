import React from "react";
import Mem from "./Mem";
import data from "./data";

function Home() {
  const memes = data.map((mem) => {
    return <Mem key={mem.id} mem={mem} />;
  });

  return (
    <div>
      <p>Home page</p>
      {memes}
    </div>
  );
}

export default Home;
