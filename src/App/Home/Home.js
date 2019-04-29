import React from 'react';
import PropTypes from 'prop-types';

// --- styles --- //
import styles from './Home.module.css';

// -- components -- //
import BeginButton from './BeginButton/BeginButton';
import WelcomeText from './WelcomeText/WelcomeText';

export const Home = ({
    shouldShowHome,
}) => {
    if (!shouldShowHome) {
        return null;
    }

    return (
        <section className={styles.home}>
            <WelcomeText />
            <BeginButton />
        </section>
    );
};

Home.propTypes = {
    shouldShowHome: PropTypes.bool,
};

Home.defaultProps = {

};

export default Home;
