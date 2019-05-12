import React from 'react';
// import PropTypes from 'prop-types';

// --- styles --- //
import styles from './TrueFalseContainer.module.css';

// -- components -- //
import FalseButton from './FalseButton/FalseButton';
import TrueButton from './TrueButton/TrueButton';

export const TrueFalseContainer = () => (
    <div className={styles['true-false-container']}>
        <TrueButton />
        <FalseButton />
    </div>
);

TrueFalseContainer.propTypes = {

};

TrueFalseContainer.defaultProps = {

};

export default TrueFalseContainer;
