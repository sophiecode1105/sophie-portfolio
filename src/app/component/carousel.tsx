"use client";

import { use, useEffect, useState } from "react";
import styles from "./carousel.module.scss";
import Image from "next/image";
import left_arrow_icon from "../../../assets/left_button.svg";
import right_arrow_icon from "../../../assets/right_button.svg";

export default function Carousel({
  project,
  maxNum,
}: {
  project: string;
  maxNum: number;
}) {
  const [currentUrl, setCurrentUrl] = useState("/merror/desc1.png");
  const [currentIdx, setCurrentIdx] = useState(1);

  const moveCarousel = (direction: number) => {
    let newDirection = currentIdx + direction;
    if (newDirection > maxNum) setCurrentIdx(1);
    else if (newDirection < 1) setCurrentIdx(maxNum);
    else setCurrentIdx(newDirection);
  };

  useEffect(() => {
    setCurrentUrl(`/${project}/desc${currentIdx}.png`);
  }, [project, currentIdx]);

  return (
    <div className={styles.carousel_container}>
      <div
        className={styles.carousel_image}
        style={{ backgroundImage: `url(${currentUrl})` }}
      ></div>
      <div className={styles.carousel_controller}>
        <Image
          onClick={() => {
            moveCarousel(-1);
          }}
          className={styles.arrow_button}
          src={left_arrow_icon}
          alt="avartar_image"
        />
        <span>
          {currentIdx} / {maxNum}
        </span>
        <Image
          onClick={() => {
            moveCarousel(1);
          }}
          className={styles.arrow_button}
          src={right_arrow_icon}
          alt="avartar_image"
        />
      </div>
    </div>
  );
}
