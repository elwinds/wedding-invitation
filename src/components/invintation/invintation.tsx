import styles from "./invintation.module.scss";

const Invintation = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Дорогой Гость!</h1>
      <p className={styles.text}>
        Мы рады сообщить Вам, что 30.08.2025 состоится самое главное торжество в
        нашей жизни - день нашей свадьбы!
      </p>
      <div className={styles.imageWrapper}>
        <img
          src="/images/we.jpg"
          className={styles.image}
          loading="lazy"
          alt="Николай и Янина"
        />
      </div>
      <p className={styles.text}>
        Приглашаем Вас разделить с нами радость этого незабываемого дня.
      </p>
    </div>
  );
};

export default Invintation;
