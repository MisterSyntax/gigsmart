import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './Results.module.css';

// -- components -- //
import AnswerList from './AnswerList/AnswerList';
import Score from './Score/Score';
import PlayAgainButton from './PlayAgainButton/PlayAgainButton';

// -- actions -- //

// -- selectors -- //
import { getHasCompletedQuiz } from '../Quiz/viewStates';

export const Results = ({
    hasCompletedQuiz,
}) => {
    if (!hasCompletedQuiz) {
        return null;
    }

    return (
        <div className={styles.results}>
            <Score />
            <AnswerList />
            <PlayAgainButton />
        </div>
    );
};

Results.propTypes = {
    hasCompletedQuiz: PropTypes.bool,
};

Results.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = state => ({
    hasCompletedQuiz: getHasCompletedQuiz(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
