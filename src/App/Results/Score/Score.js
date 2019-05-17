import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './Score.module.css';

// -- components -- //

// -- actions -- //

// -- selectors -- //
import { getScore } from '../viewStates';
import { getQuestionsApiSettingsAmount } from '../../../store/config/selectors/questionApi/config';

export const Score = ({
    score,
    totalQuestions,
}) => {
    return (
        <h1 className={styles.score}>
            Score: {score} of {totalQuestions}
        </h1>
    );
};

Score.propTypes = {
    score: PropTypes.number,
    totalQuestions: PropTypes.number,
};

Score.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = state => ({
    score: getScore(state),
    totalQuestions: getQuestionsApiSettingsAmount(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Score);
