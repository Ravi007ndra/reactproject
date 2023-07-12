import React, { useContext } from 'react';
import { ThemeContext } from '../../../App';

export default function Footer({ children }) {
    let {themeMode} = useContext(ThemeContext)
    return (
        <div className='row'>
            <div className='col'>
                {children}
                theme mode is: {themeMode}
            </div>
        </div>
    )
}