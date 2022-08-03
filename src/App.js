import React, { useRef, useState} from "react";
import Nav from './components/nav.js';
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import './styles/app.scss';

const App = () =>  {  

    const [onHomePage, setOnHomePage] = useState(true);

    return (
        <main className="app-page-container">
            <title>Test 2</title>
            <Nav setOnHomePage={setOnHomePage}/>
            
            {onHomePage &&
                <Home/>   
            }
            
            {!onHomePage &&
                <Contact/>   
            } 

        </main>
    );
}

export default App;
 