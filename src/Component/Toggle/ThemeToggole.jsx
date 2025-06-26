import React, { use } from 'react';
import { AuthContext } from '../../AuthComtext_provider/AuthContext';

const ThemeToggole = () => {

    const {theme, setTheme}=use(AuthContext)

    console.log(theme)

    return (
        <button onClick={()=>setTheme(!theme)}
            class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            {
                theme ? <p>light</p> : <p>dark</p>
            }
        </button>
    );
};

export default ThemeToggole;