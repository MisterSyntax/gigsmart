import React from 'react';
// --- styles --- //
import styles from './App.module.css';

// -- components -- //
import Home from './Home/Home';
import Quiz from './Quiz/Quiz';

export const App = () => (
    <main className={styles['app-container']}>
        <Home />
        <Quiz />
    </main>
);

export default App;
