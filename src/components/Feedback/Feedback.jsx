import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Feedback = () => {


  goodFeedbackCount = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutralFeedbackCount = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  badFeedbackCount = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good * 100) / this.countTotalFeedback();
  };

  render() {
    return (
      <section className={css.wraper}>
        <h1 className={css.mainTitle}>Please leave feedback</h1>
        <div className={css.btnWraper}>
          <button
            type="button"
            className={css.feedbackBtn}
            onClick={this.goodFeedbackCount}
          >
            Good
          </button>
          <button
            type="button"
            className={css.feedbackBtn}
            onClick={this.neutralFeedbackCount}
          >
            Neutral
          </button>
          <button
            type="button"
            className={css.feedbackBtn}
            onClick={this.badFeedbackCount}
          >
            Bad
          </button>
        </div>

        <h2 className={css.title}>Statistics</h2>
        <p className={css.statValues}>Good: {this.state.good}</p>
        <p className={css.statValues}>Neutral: {this.state.neutral}</p>
        <p className={css.statValues}>Bad: {this.state.bad}</p>

        <p className={css.statValues}>Total: {this.countTotalFeedback()}</p>
        <p className={css.statValues}>
          Positive feedback:{' '}
          {this.countPositiveFeedbackPercentage()
            ? Math.round(this.countPositiveFeedbackPercentage())
            : 0}{' '}
          %{' '}
        </p>
      </section>
    );
  }
}

export default Feedback;
