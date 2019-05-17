import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './Results.module.css';

// -- components -- //
import AnswerList from './AnswerList/AnswerList';
import Score from './Score/Score';

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
        <section className={styles['results-container']}>
            <AnswerList />
            <Score />
        </section>
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
