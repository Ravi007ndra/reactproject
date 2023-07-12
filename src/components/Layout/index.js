import React, { useState } from 'react';

import EMICalculator from '../EMICalculator';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';
import SettingOptions from '../SettingOptions';
import { ThemeContext } from '../../App';

export default function Layout({ children }) {
    let [themeMode, setThemeMode] = useState("light");


    return (
        <ThemeContext.Provider value={{themeMode, setThemeMode}}>
            <div className="container">

                <Header>

                    <SettingOptions />

                </Header>
                <div className='row'>
                    <Sidebar >
                        I'm sidebar
                    </Sidebar>
                    <Content />
                </div>
                <Footer>
                    I'm the footer area
                </Footer>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}