import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './AnswerList.module.css';

// -- components -- //
import Answer from './Answer/Answer';

// -- actions -- //

// -- selectors -- //
import { getQuizAnswers } from '../../Quiz/viewStates';

export const AnswerList = ({
    answers,
}) => {
    return (
        <div className={styles['answer-list']}>
            {answers.map((curr, index) => (<Answer index={index} />))}
        </div>
    );
};

AnswerList.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.bool),
};

AnswerList.defaultProps = {
    answers: [],
};

/* istanbul ignore next */
const mapStateToProps = state => ({
    answers: getQuizAnswers(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerList);
