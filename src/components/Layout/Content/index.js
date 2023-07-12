import React, { useContext } from 'react';
import { ThemeContext } from '../../../App';
import EMICalculator from '../../EMICalculator';

export default function Content({ children }) {
    let {themeMode} = useContext(ThemeContext)
    return (
        <div className='col-10'>
            
            <EMICalculator />
            current theme mode is: {themeMode}
        </div>
    )
}