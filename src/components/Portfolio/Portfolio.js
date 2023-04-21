import React, { useEffect } from "react";
import ModalImage from "react-modal-image";
import styles from "./Portfolio.module.css";
import { photoArray } from "../../utils/GQL/photoArray";
import "./modal.css";
// import ProgressiveImage from 'react-progressive-graceful-image';

const Portfolio = () => {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  return (
    <div className={styles["portfolio"]}>
      <h1 className={styles["heading"]}>Testimonials</h1>
      <div className={styles["testimonials-left"]}>
        <div className={styles["quote-box-left"]}>
          <h3>
            <p className={styles["quote-mark-left"]}>"</p>Great quality resin
            and one of my go-to's in a pinch on a collaboration project. [He
            does] great work and get[s] it done super quick, while also making
            sure everything is up to snuff with my vision and your standards.
            Also a top notch lad in general.
            <p className={styles["quote-mark-right"]}>"</p>
          </h3>
          <h1 className={styles["author"]}>
            <img
              src={`https://pbs.twimg.com/media/DzAo42-WoAEvaMk?format=jpg&name=4096x4096`}
              alt=""
            />
            <a
              href="https://twitter.com/ControlInColor"
              target="_blank"
              rel="noreferrer"
            >
              - Joe Marchesi, Owner of Control in Color
            </a>
          </h1>
        </div>
      </div>
      <div className={styles["testimonials-right"]}>
        <div className={styles["quote-box-left"]}>
          <h3>
            <p className={styles["quote-mark-left"]}>"</p>FPC was one of the
            first people I bought from and couldn't be happier. The quality is
            amazing and consistent and the people are even better! Bought over
            12 sets from them at this point (sticks, triggers, abxy, the works!)
            and the results + communication was on point!
            <p className={styles["quote-mark-right"]}>"</p>
          </h3>
          <h1 className={styles["author"]}>
            <img
              src="https://pbs.twimg.com/profile_images/1472764312708124673/BFqC30IS_400x400.jpg"
              alt=""
            />
            <a
              href="https://twitter.com/Kubbymo"
              target="_blank"
              rel="noreferrer"
            >
              - Kubby, Owner of Kubbymo Customs
            </a>
          </h1>
        </div>
      </div>
      <h1 className={styles["heading"]}>Past Work</h1>
      <div className={styles["grid"]}>
        {photoArray.map((photo, idx) => (
          <div key={idx} className={styles["grid-card"]}>
            <ModalImage
              hideDownload={true}
              hideZoom={true}
              small={photo}
              medium={photo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
