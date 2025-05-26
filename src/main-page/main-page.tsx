import Detail from "../components/detail/detail";
import DressCode from "../components/dress-code/dress-code";
import Invintation from "../components/invintation/invintation";
import Map from "../components/map/map";
import TimeLine from "../components/time-line/time-line";
import { TopBlock } from "../components/top-block/top-block";
import { DETAILS } from "./constants";
import styles from "./main-page.module.scss";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <TopBlock />
      </div>

      <div className={styles.content}>
        <div className={styles.layout}>
          <Invintation />
          <Detail
            title={DETAILS.LOCATION.TITLE}
            text={DETAILS.LOCATION.TEXT}
            buttonText={DETAILS.LOCATION.BUTTON_TEXT}
          />
          <TimeLine />
          <Detail title={DETAILS.GIFT.TITLE} text={DETAILS.GIFT.TEXT} />
          <Detail title={DETAILS.CHILDREN.TITLE} text={DETAILS.CHILDREN.TEXT} />

          <Detail
            title={DETAILS.PHOTO.TITLE}
            text={DETAILS.PHOTO.TEXT}
            details={DETAILS.PHOTO.DETAILS}
          />
          <Detail
            title={DETAILS.CONFRIRMATION.TITLE}
            text={DETAILS.CONFRIRMATION.TEXT}
          />
          <DressCode />
        </div>
      </div>
      <Map />
    </div>
  );
};

export default MainPage;
