// import  { createContext, useState } from "react";
// import PropTypes from "prop-types";

// export  const themeContext = createContext({});

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () =>
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

//   const themeResources = {
//     theme,
//     toggleTheme,
//   };

//   return (
//     <themeContext.Provider value={{ themeResources }}>
//       {children}
//     </themeContext.Provider>
//   );
// };

// ThemeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default ThemeProvider;
