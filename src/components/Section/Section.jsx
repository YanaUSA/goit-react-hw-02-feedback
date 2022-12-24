import PropTypes from 'prop-types';
import css from '../Section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.wraper}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
