import React from "react";
import styles from "../styles/EndFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const EndFooter = () => {
  return (
    <div>
      <div className={styles.endFooter}>
        <div className={styles.endContainer}>
          <div className={styles.endFlex}>
            <div className={styles.iconBox}>
              <a href="#" className={styles.iconFontsize}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.facebookIcon}
                ></FontAwesomeIcon>
              </a>

              <a href="#" className={styles.iconFontsize}>
                <FontAwesomeIcon
                  icon={faYoutube}
                  className={styles.youtubeIcon}
                ></FontAwesomeIcon>
              </a>

              <a href="#" className={styles.iconFontsize}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.instagramIcon}
                ></FontAwesomeIcon>
              </a>

              <a href="#" className={styles.iconFontsize}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={styles.linkedInIcon}
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          Copyright © 2022 All rights reserved. Made by Sayami.
        </div>
      </div>
    </div>
  );
};
export default EndFooter;
