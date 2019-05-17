import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// --- styles --- //
import styles from './PlayAgainButton.module.css';

// -- components -- //

// -- actions -- //
import { restartQuiz } from '../actions';

// -- selectors -- //

export const PlayAgainButton = ({
    restartQuiz,
}) => {
    return (
        <button
            className={styles['play-again-button']}
            onClick={restartQuiz}
            type="button"
        >
            Play Again
        </button>
    );
};

PlayAgainButton.propTypes = {
    restartQuiz: PropTypes.func,
};

PlayAgainButton.defaultProps = {

};

/* istanbul ignore next */
const mapStateToProps = () => ({

});

const mapDispatchToProps = {
    restartQuiz,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayAgainButton);
