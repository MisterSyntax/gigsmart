import React from 'react';
// --- styles --- //
import styles from './App.module.css';

// -- components -- //
import Home from './Home/Home';
import Quiz from './Quiz/Quiz';
import Results from './Results/Results';

export const App = () => (
    <main className={styles['app-container']}>
        <Home />
        <Quiz />
        <Results />
    </main>
);

export default App;
