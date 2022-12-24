import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li className={css.statValues}>Good: {good}</li>
      <li className={css.statValues}>Neutral: {neutral}</li>
      <li className={css.statValues}>Bad: {bad}</li>

      <li className={css.statValues}>Total: {total}</li>
      <li className={css.statValues}>
        Positive feedback:{' '}
        {positivePercentage ? Math.round(positivePercentage) : 0} %{' '}
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
