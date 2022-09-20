import React from "react";
import styles from "../styles/EndFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const EndFooter = () => {
  return (
    <div>
      <div className={styles.endFooter}>
        <div className={styles.endContainer}>
          <div className={styles.endFlex}>
            <div className={styles.iconBox}>
              <a
                href="https://www.facebook.com/bbek.fcb/"
                className={styles.iconFontsize}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.facebookIcon}
                ></FontAwesomeIcon>
              </a>

              <a
                href="https://www.youtube.com/channel/UC6voLdogPhAAMCr5ZIg26vQ"
                className={styles.iconFontsize}
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className={styles.youtubeIcon}
                ></FontAwesomeIcon>
              </a>

              <a
                href="https://www.instagram.com/bbek10/"
                className={styles.iconFontsize}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.instagramIcon}
                ></FontAwesomeIcon>
              </a>

              <a
                href="https://www.linkedin.com/in/bibek-manandhar-51aa9a1b9/"
                className={styles.iconFontsize}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={styles.linkedInIcon}
                ></FontAwesomeIcon>
              </a>

              <a
                href="https://www.linkedin.com/in/bibek-manandhar-51aa9a1b9/"
                className={styles.iconFontsize}
              >
                <FontAwesomeIcon
                  icon={faGithub}
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
