import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './FalseButton.module.css';

// -- components -- //

// -- actions -- //
import {
    updateCurrentQuestionIndex,
    submitQuizAnswer,
} from '../../../actions';

// -- selectors -- //
import { getCurrentQuestionIndex } from '../../../viewStates';

export const FalseButton = ({
    currentQuestionIndex,
    submitQuizAnswer,
    updateCurrentQuestionIndex,
}) => (
    <button
        className={styles['false-button']}
        onClick={() => {
            updateCurrentQuestionIndex(currentQuestionIndex + 1);
            submitQuizAnswer('False');
        }}
        type="button"
    >
        False
    </button>
);

FalseButton.propTypes = {
    currentQuestionIndex: PropTypes.number,
    submitQuizAnswer: PropTypes.func,
    updateCurrentQuestionIndex: PropTypes.func,
};

FalseButton.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = state => ({
    currentQuestionIndex: getCurrentQuestionIndex(state),
});

const mapDispatchToProps = {
    submitQuizAnswer,
    updateCurrentQuestionIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(FalseButton);
