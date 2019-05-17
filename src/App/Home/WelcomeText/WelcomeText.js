import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// --- styles --- //
import styles from './WelcomeText.module.css';

// -- components -- //

// -- actions -- //

// -- selectors -- //
import { getQuestionsApiSettingsAmount } from '../../../store/config/selectors/questionApi/config';

export const WelcomeText = ({
    numberOfQuestions,
}) => (
    <Fragment>
        <h1 className={styles['welcome-header']}>Welcome To The Trivia Dome</h1>

        <div className={styles['welcome-text']}>
            <p>You will be presented with {numberOfQuestions} questions</p>
            <p>Can you score 100%?</p>
        </div>
    </Fragment>
);

WelcomeText.propTypes = {
    numberOfQuestions: PropTypes.number,
};

WelcomeText.defaultProps = {

};

const mapStateToProps = state => ({
    numberOfQuestions: getQuestionsApiSettingsAmount(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeText);
