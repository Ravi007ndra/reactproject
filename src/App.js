import { createContext, useState } from 'react';
import Layout from './components/Layout'
import GlobalSearch from './components/GlobalSearch';

let ThemeContext = createContext("dark");
let SetThemeContext = createContext(null);
export { ThemeContext, SetThemeContext };

function App() {
  return (
    <GlobalSearch />
    // <Layout />
  );
}

export default App;
