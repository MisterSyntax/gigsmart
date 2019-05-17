import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './Quiz.module.css';

// -- components -- //
import Category from './Category/Category';
import Question from './Question/Question';
import QuestionCount from './QuestionCount/QuestionCount';
import TrueFalseContainer from './Answers/TrueFalseContainer/TrueFalseContainer';
// -- actions -- //

// -- selectors -- //
import {
    getHasStartedQuiz,
    getHasCompletedQuiz,
} from './viewStates';

export const Quiz = ({
    hasCompletedQuiz,
    hasStartedQuiz,
}) => {
    if (!hasStartedQuiz || hasCompletedQuiz) {
        return null;
    }

    return (
        <div className={styles.quiz}>
            <Category />
            <Question />
            <div className={styles['button-count-container']}>
                <TrueFalseContainer />
                <QuestionCount />
            </div>
        </div>
    );
};

Quiz.propTypes = {
    hasCompletedQuiz: PropTypes.bool,
    hasStartedQuiz: PropTypes.bool,
};

Quiz.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = state => ({
    hasCompletedQuiz: getHasCompletedQuiz(state),
    hasStartedQuiz: getHasStartedQuiz(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
