import {Link, Outlet} from 'react-router-dom'
import {createContext, useState} from "react";

export const ThemeContext = createContext()

function Layout(props) {
    // const { path, url } = useRouteMatch()
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={``}>Message</Link>
                        </li>
                        <li>
                            <Link to={`news`}>News</Link>
                        </li>
                    </ul>
                </nav>
                <h1>{theme}</h1>
                <Outlet/>
            </div>
        </ThemeContext.Provider>
    )
}

export default Layout
