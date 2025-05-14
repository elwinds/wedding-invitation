import React from "react";
import styles from "./top-block.module.scss";
import { calculateTimeLeft } from "./utils";

export const TopBlock = () => {
  const weddingDate = new Date("2025-08-30T16:00:00");
  const [timeLeft, setTimeLeft] = React.useState(
    calculateTimeLeft(weddingDate)
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>НИКОЛАЙ & ЯНИНА</h1>

        <p className={styles.invitationText}>
          Мы приглашаем Вас разделить с нами наш самый незабываемый день в жизни
        </p>

        <h2 className={styles.date}>30 | 08 | 2025</h2>

        <h1 className={styles.text}>Ждем Вас через:</h1>

        <div className={styles.countdown}>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{timeLeft.weeks}</span>
            <span className={styles.countdownLabel}>недель</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{timeLeft.days}</span>
            <span className={styles.countdownLabel}>дней</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{timeLeft.hours}</span>
            <span className={styles.countdownLabel}>часов</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{timeLeft.minutes}</span>
            <span className={styles.countdownLabel}>минут</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{timeLeft.seconds}</span>
            <span className={styles.countdownLabel}>секунд</span>
          </div>
        </div>
      </div>
    </div>
  );
};
