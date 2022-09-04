import React, { useState, useEffect } from 'react';
import Home from './pages/Home';

function App() {

    // const [greeting, setGreeting] = useState('')

    // useEffect(() => {
    //     fetch('/api/greeting', {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'text/plain'
    //         }
    //     })
    //         .then(response => response.text())
    //         .then(text => setGreeting(text))
    //         .catch(err => setGreeting('Da ist etwas schief gelaufen'));
    // }, []);

    // return (
    //     <div>
    //         {greeting}
    //     </div>
    // );
    return (
    <div>

    < Home/>
    </div>
    )
}

export default App;
