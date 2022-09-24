import { createContext, useState } from 'react';

export const ShowContext = createContext();

const UseShow = ({ children }) => {
  const [language, setLanguage] = useState(true);
  const tap = language ? 'Inicio' : 'Home';
  const [show, setShow] = useState(tap);
  const [titleState, setTitle] = useState(tap);

  return (
    <ShowContext.Provider
      value={{ show, setShow, language, setLanguage, titleState, setTitle }}
    >
      {children}
    </ShowContext.Provider>
  );
};

export default UseShow;
