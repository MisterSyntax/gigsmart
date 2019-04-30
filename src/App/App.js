import React from 'react';
// --- styles --- //
import styles from './App.module.css';

// -- components -- //
import Home from './Home/Home';

function App() {
    return (
        <main className={styles['app-container']}>
            <Home />
        </main>
    );
}

export default App;
