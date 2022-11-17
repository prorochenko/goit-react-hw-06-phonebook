import PropTypes from 'prop-types';

import css from './Contacts.module.scss';

const Contacts = ({ list, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {list.length === 0 ? (
        <div className={css.list__box}>
          <p className={css.list__text}>Phonebook is empty.</p>
        </div>
      ) : (
        list.map(({ id, name, number }) => (
          <li key={id} className={css.list__item}>
            <div className={css.list__box}>
              <p className={css.list__text}>
                {name}: {number}
              </p>
              <button
                className={css.list__btn}
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

Contacts.propTypes = {
  list: PropTypes.array,
};
export default Contacts;
