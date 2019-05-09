import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './Quiz.module.css';

// -- components -- //
import Category from './Category/Category';
import Question from './Question/Question';
import QuestionCount from './QuestionCount/QuestionCount';
// -- actions -- //

// -- selectors -- //
import { getShouldShowQuiz } from './viewStates';

export const Quiz = ({
    shouldShowQuiz,
}) => {
    if (!shouldShowQuiz) {
        return null;
    }

    return (
        <div className={styles.quiz}>
            <Category />
            <Question />
            <QuestionCount />
        </div>
    );
};

Quiz.propTypes = {
    shouldShowQuiz: PropTypes.bool,
};

Quiz.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = state => ({
    shouldShowQuiz: getShouldShowQuiz(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
