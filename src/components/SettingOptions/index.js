import { useContext, useState } from "react"
import { SetThemeContext, ThemeContext } from "../../App"

export default function SettingOptions() {

    let {themeMode, setThemeMode} = useContext(ThemeContext)

    
    return (
        <div>
            value of theme mode{themeMode}
            <select className="form-select w-25" aria-label="Default select example" onChange={(e) => setThemeMode(e.target.value)} defaultValue={themeMode}>
                <option value="light" {...(themeMode === "light" ? { selected: true } : {})}>Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    )
}