import styles from "./detail.module.scss";
import { DetailProps } from "./types";

const Detail = ({ title, text, details, buttonText }: DetailProps) => {
  const handleButtonClick = () => {
    const mapElement = document.getElementById("map");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
      {details && <p className={styles.text}>{details}</p>}

      {buttonText && (
        <button onClick={handleButtonClick} className={styles.button}>
          {buttonText}
        </button>
      )}
      {details && (
        <a
          href="https://t.me/+05RvVEa2Joc5NTIy"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.button} ${styles.telegramButton}`}
        >Перейти в Телеграм канал</a>
      )}
    </div>
  );
};

export default Detail;
