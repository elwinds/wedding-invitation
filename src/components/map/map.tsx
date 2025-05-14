import styles from './map.module.scss'

const Map = () => {
    return (
      <div id="map" className={styles.container}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Acbb4bbe8622395491f1e6e74fb388949f78c9e510313fd859fe8f739c3f7b432&amp;source=constructor"
          width="100%"
          height="500"
          frameBorder="0"
        ></iframe>
      </div>
    );
}
 
export default Map;