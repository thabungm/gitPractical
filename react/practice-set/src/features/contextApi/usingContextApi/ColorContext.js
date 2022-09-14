import { createContext, useState } from 'react';

/**
 * A -> B -> C -> D -> E
 * A -> context -> E
 * //component put data ----> context --> consumed by other components
- provider -> produce data
- consumer -> consume data 
*/

export const ColorContext = createContext({});

export const ColorContextProvider = ({ children }) => {
  const [color, setColor] = useState('Green');

  return (
    <ColorContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
