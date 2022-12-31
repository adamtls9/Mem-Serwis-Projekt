import React from "react";

const AppContext = React.createContext({
  memesDataState: [],
  setMemesDataState: () => {},
})

export default AppContext;
