import { useCallback, useContext } from "react";
import AppContext from "../context/AppContext";
import Mem from "../mem/Mem"
import styles from "./MemesList__styles.module.css"

const MemesList = ({ memesData }) => {
  const { setMemesDataState } = useContext(AppContext);

  const handleMemChange = useCallback((mem) => {
      setMemesDataState((prevState) =>
        prevState.map((prevMem) => (prevMem.id === mem.id ? mem : prevMem))
      );
    },[setMemesDataState]);

  return (
    <div className={styles.list}>
      {memesData.length ? (
        memesData.map((mem) => (
          <Mem key={mem.id} mem={mem} onMemChange={handleMemChange} />
        ))
      ) : (
        <p>Nic tu jeszcze nie ma :( </p>
      )}
    </div>
  );
};

export default MemesList;
