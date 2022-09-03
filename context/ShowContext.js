import { createContext, useState } from 'react';

export const ShowContext = createContext();

const UseShow = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const tap = language === 'es' ? 'Inicio' : 'Home';
  const [show, setShow] = useState(tap);

  return (
    <ShowContext.Provider value={{ show, setShow, language, setLanguage }}>
      {children}
    </ShowContext.Provider>
  );
};

export default UseShow;
