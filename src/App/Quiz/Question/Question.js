import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './Question.module.css';

// -- components -- //

// -- actions -- //

// -- selectors -- //
import { getCurrentQuestionText } from '../../../store/apiData/questions/apiData';

export const Question = ({
    questionText,
}) => (
    <div className={styles['question-text']}>
        {questionText}
    </div>
);

Question.propTypes = {
    questionText: PropTypes.string,
};

Question.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = state => ({
    questionText: getCurrentQuestionText(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
