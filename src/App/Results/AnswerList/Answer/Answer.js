import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './Answer.module.css';

// -- components -- //

// -- actions -- //

// -- selectors -- //
import { getDidAnswerCorrectlyForIndex } from '../../viewStates';
import { getQuestionTextForIndex } from '../../../../store/apiData/questions/apiData';

export const Answer = ({
    didAnswerCorrectly,
    questionText,
}) => {
    if (!didAnswerCorrectly) {
        return (
            <div className={styles['incorrect-answer-container']}>
                <span className={styles['incorrect-answer-label']}>Wrong:</span> {questionText}
            </div>
        );
    }
    return (
        <div className={styles['correct-answer-container']}>
            <span className={styles['correct-answer-label']}>Correct:</span> {questionText}
        </div>
    );
};

Answer.propTypes = {
    didAnswerCorrectly: PropTypes.bool,
    index: PropTypes.number, /* eslint-disable-line */ /* used for mapStateToProps */
    questionText: PropTypes.string,
};

Answer.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = (state, ownProps) => ({
    didAnswerCorrectly: getDidAnswerCorrectlyForIndex(state, ownProps.index),
    questionText: getQuestionTextForIndex(state, ownProps.index),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
