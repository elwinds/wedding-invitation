import TimeItem from "./time-item/time-item";
import styles from "./time-line.module.scss";

const TimeLine = () => {
  const events = [
    {
      time: "16:00",
      text: "Сбор гостей, фуршет",
      icon: "/images/1.png",
      position: "left",
    },
    {
      time: "16:30",
      text: "Свадебная церемония",
      icon: "/images/2.png",
      position: "right",
    },
    {
      time: "17:00",
      text: "Начало банкета",
      icon: "/images/3.png",
      position: "left",
    },
    {
      time: "23:00",
      text: "Завершение вечера",
      icon: "/images/4.png",
      position: "right",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ПЛАН ДНЯ</h1>
      <div className={styles.timeline}>
        {events.map((event, index) => (
          <div
            key={index}
            className={`${styles.event} ${styles[event.position]}`}
          >
            <TimeItem
              time={event.time}
              text={event.text}
              icon={event.icon}
              position={event.position}
            />
          </div>
        ))}
        <div className={styles.verticalLine}></div>
      </div>
    </div>
  );
};

export default TimeLine;
