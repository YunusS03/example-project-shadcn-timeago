import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle";
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'
import {CardDemo} from "@/components/CardDemo";

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)




function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle />
            <CardDemo/>

        </ThemeProvider>
    )
}

export default App
