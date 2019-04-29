import React from 'react';
// --- styles --- //
import styles from './App.module.css';

// -- components -- //
import Home from './Home/Home';

function App() {
    return (
        <div className={styles['app-container']}>
            <Home />
        </div>
    );
}

export default App;
