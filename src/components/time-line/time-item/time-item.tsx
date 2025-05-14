import styles from './time-item.module.scss';
import { TimeItemProps } from './types';

const TimeItem = ({ time, text, icon, position }: TimeItemProps) => {
  console.log('position', position)
  return (
    <div
      className={`${styles.container} ${styles[position]}`}
    >
      <div className={styles.iconContainer}>
        <img
          src={icon}
          className={styles.icon}
          alt={`${text} в ${time}`}
          loading="lazy"
        />
      </div>
      <div
        className={`${styles.textContainer} ${styles[position]}`}
      >
        <p className={styles.time}>{time}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
 
export default TimeItem;