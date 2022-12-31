import { useMemo, useState } from "react"
import { memes__data } from "../../memes__data"
import AppContext from "./AppContext"

const AppContextProvider = ({children}) => {
  const [memesDataState, setMemesDataState] = useState(memes__data);
  const contextData = useMemo(() => ({
    memesDataState,
    setMemesDataState,
  }), [ memesDataState ]);

  return (
    <>
      <AppContext.Provider value={contextData}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export default AppContextProvider;