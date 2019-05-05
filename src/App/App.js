import React from 'react';
// --- styles --- //
import styles from './App.module.css';

// -- components -- //
import Home from './Home/Home';

export const App = () => (
    <main className={styles['app-container']}>
        <Home />
    </main>
);

export default App;
