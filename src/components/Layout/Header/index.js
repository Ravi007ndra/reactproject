import React, { useContext } from 'react';
import { ThemeContext } from '../../../App';

export default function Header({ children }) {
    let {themeMode} = useContext(ThemeContext)
    return (
        <div className="row">
            <div className='col justify-content-end'>
                {children}
                {themeMode}
            </div>            
        </div>
    )
}