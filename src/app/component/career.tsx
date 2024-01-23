"use client";

import { RefObject, useState } from "react";
import styles from "./career.module.scss";
import Image from "next/image";
import vrillar_logo from "../../../assets/vrillar.png";
import merror_logo from "../../../assets/merror_logo.png";
import Carousel from "./carousel";

export default function Career({
  careerRef,
}: {
  careerRef: RefObject<HTMLDivElement>;
}) {
  return (
    <div ref={careerRef} className={styles.container}>
      <div className={styles.alignment}>
        <div className={styles.history_wrap}>
          <div className={styles.label}>CARRER</div>
          <div>
            <Image
              className={styles.logo_icon}
              src={vrillar_logo}
              alt="phone_icon"
            />
            <div>(주)브릴라</div>
            <div>2022.06 - 2023.11</div>
          </div>
        </div>

        <div className={styles.card_wrap}>
          <div className={styles.merror}>
            <div className={styles.project_title}>
              <span>ME.RROR</span>
              <span>2022.06 - 2023.11</span>
            </div>
            <div>
              <div className={styles.carousel_box}>
                <Carousel project="merror" maxNum={3} />
              </div>
              <div className={styles.desc_box}>
                ME.RROR는 사람, 사물, 공간의 다양한 3D 콘텐츠를 구매할 수 있는
                3D 콘텐츠 플랫폼입니다. 풀스택 CTO와 함께 진행한 프로젝트입니다.
                초기 합류 멤버로서 프론트 엔드를 담당했습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
