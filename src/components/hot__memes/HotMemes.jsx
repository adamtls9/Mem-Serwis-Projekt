import { useContext, useMemo } from "react";
import AppContext from "../context/AppContext";
import MemesList from "../memes__list/MemesList";

const HotMemes = () => {
  const { memesDataState } = useContext(AppContext);
  const hotMemesData = useMemo(() => 
      memesDataState.filter((mem) => mem.upvotes - mem.downvotes > 5
    ),[memesDataState]);

  return <MemesList memesData={hotMemesData} />;
};

export default HotMemes;
