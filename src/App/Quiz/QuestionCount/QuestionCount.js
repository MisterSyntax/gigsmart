import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './QuestionCount.module.css';

// -- components -- //

// -- actions -- //

// -- selectors -- //
import { getCurrentQuestionIndex } from '../viewStates';
import { getTotalQuestions } from '../../../store/apiData/questions/apiData';

export const QuestionCount = ({
    currentQuestionIndex,
    totalQuestions,
}) => (
    <div className={styles['question-count']}>
        {currentQuestionIndex} of {totalQuestions}
    </div>
);

QuestionCount.propTypes = {
    currentQuestionIndex: PropTypes.number,
    totalQuestions: PropTypes.number,
};

QuestionCount.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = state => ({
    currentQuestionIndex: getCurrentQuestionIndex(state),
    totalQuestions: getTotalQuestions(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCount);
