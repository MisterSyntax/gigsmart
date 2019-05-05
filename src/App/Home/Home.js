import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './Home.module.css';

// -- components -- //
import BeginButton from './BeginButton/BeginButton';
import WelcomeText from './WelcomeText/WelcomeText';

// -- actions -- //

// -- selectors -- //
import { getShouldShowHome } from './viewStates';

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

/* istanbul ignore next */
const mapStateToProps = state => ({
    shouldShowHome: getShouldShowHome(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
