import { useContext, useMemo } from "react";
import AppContext from "../context/AppContext";
import MemesList from "../memes__list/MemesList";

const RegularMemes = () => {
  const { memesDataState } = useContext(AppContext);

  const regularMemesData = useMemo(() => (
    memesDataState.filter(mem => mem.upvotes - mem.downvotes <= 5)
  ), [ memesDataState ]);

  return <MemesList memesData={regularMemesData} />
}

export default RegularMemes;