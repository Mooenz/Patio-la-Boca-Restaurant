import { createContext, useState } from 'react';

export const ShowContext = createContext();

const UseShow = ({ children }) => {
  const [show, setShow] = useState('Home');
  const [language, setLanguage] = useState('es');

  return (
    <ShowContext.Provider value={{ show, setShow, language, setLanguage }}>
      {children}
    </ShowContext.Provider>
  );
};

export default UseShow;
