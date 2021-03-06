import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './TrueButton.module.css';

// -- components -- //

// -- actions -- //
import {
    updateCurrentQuestionIndex,
    submitQuizAnswer,
} from '../../../actions';

// -- selectors -- //
import { getCurrentQuestionIndex } from '../../../viewStates';

export const TrueButton = ({
    currentQuestionIndex,
    submitQuizAnswer,
    updateCurrentQuestionIndex,
}) => (
    <button
        className={styles['true-button']}
        onClick={() => {
            updateCurrentQuestionIndex(currentQuestionIndex + 1);
            submitQuizAnswer('True');
        }}
        type="button"
    >
        True
    </button>
);

TrueButton.propTypes = {
    currentQuestionIndex: PropTypes.number,
    submitQuizAnswer: PropTypes.func,
    updateCurrentQuestionIndex: PropTypes.func,
};

TrueButton.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = state => ({
    currentQuestionIndex: getCurrentQuestionIndex(state),
});

const mapDispatchToProps = {
    submitQuizAnswer,
    updateCurrentQuestionIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrueButton);
