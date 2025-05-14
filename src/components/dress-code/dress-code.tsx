import styles from "./dress-code.module.scss";

const DressCode = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ДЕТАЛИ</h1>
      <p className={styles.text}>
        Мы старались сделать мероприятие красивым и будем благодарны, если при
        выборе нарядов на наше торжество Вы придержитесь следующих пожеланий:
      </p>
      <div className={styles.row}>
        <p className={styles.subtitle}>Джентльмены:</p>
        <p className={styles.text}>
          Черный или светлый костюм или рубашка + брюки. Так же мы приготовили
          для всех мужчин бабочки изумрудного цвета, поэтому просим не надевать
          такие аксессуары дома.
        </p>
      </div>
      <div className={styles.row}>
        <p className={styles.subtitle}>Леди:</p>
        <p className={styles.text}>
          Будем рады, если ваш наряд и аксессуары будут в следующей цветовой
          гамме:
        </p>
        <div className={styles.colors}>
          <div
            className={styles.color}
            style={{ backgroundColor: "#276D3B" }}
          />
          <div
            className={styles.color}
            style={{ backgroundColor: "#96C490" }}
          />
          <div
            className={styles.color}
            style={{ backgroundColor: "#E2DACE" }}
          />
          <div
            className={styles.color}
            style={{ backgroundColor: "#D8D8D8" }}
          />
        </div>
      </div>

      <h1 className={styles.footer}>Ждем Вас на нашей свадьбе!</h1>
      <h1 className={styles.end}>
        С любовью, <span />
        Николай и Янина!
      </h1>
    </div>
  );
};

export default DressCode;
