import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// --- styles --- //
import styles from './WelcomeText.module.css';

// -- components -- //

export const WelcomeText = ({
    numberOfQuestions,
}) => (
    <Fragment>
        <h1 className={styles['welcome-header']}>Welcome To The Trivia Dome</h1>
        <div className={styles['welcome-text']}>
            You will be presented with {numberOfQuestions} questions
        </div>
        <div className={styles['welcome-text']}>
            Can you score 100%?
        </div>
    </Fragment>
);

WelcomeText.propTypes = {
    numberOfQuestions: PropTypes.number,
};

WelcomeText.defaultProps = {

};

export default WelcomeText;
