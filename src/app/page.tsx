"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import avartar from "../../assets/avartar.png";
import ts_icon from "../../assets/typescript.png";
import js_icon from "../../assets/javascript.png";
import react_icon from "../../assets/react.png";
import angular_icon from "../../assets/angular.png";
import About from "./component/about";
import { RefObject, useRef } from "react";
import Career from "./component/career";
import Nav from "./component/nav";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);

  const refList = [homeRef, aboutRef, careerRef];

  const scrollTo = (ref: RefObject<HTMLDivElement>) => {
    const top = ref.current?.offsetTop;
    const nav = 70;

    if (!top) return;
    const height = top - nav;

    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
  };

  const liftingUp = (idx: number) => {
    scrollTo(refList[idx]);
  };
  return (
    <div>
      <Nav liftingUp={liftingUp} />
      <main ref={homeRef} className={styles.container}>
        <div className={styles.alignment}>
          <article>
            <div className={styles.header}>
              FRONTEND
              <br />
              DEVELOPER
            </div>
            <div className={styles.paragraph}>
              <span>안녕하세요.</span>
              <span>2년차 프론트엔드 웹 개발자 이채영의 포트폴리오입니다.</span>
              <span>유연한 커뮤니케이션 능력이 저의 장점입니다.</span>
              <span className={styles.margin_top}>
                - 웹 서비스 프론트엔드 설계, 개발, 운영 경험
              </span>
              <span>- 다양한 직군과의 협업 경험</span>
            </div>
            <button
              className={styles.button}
              onClick={() => scrollTo(aboutRef)}
            >
              더 알아보기
            </button>
          </article>
          <div className={styles.img_wrapper}>
            <Image
              className={styles.avartar_img}
              src={avartar}
              alt="avartar_image"
            />
            <Image
              className={styles.typescript}
              src={ts_icon}
              alt="typescript_icon"
            />
            <Image
              className={styles.javascript}
              src={js_icon}
              alt="javascript_icon"
            />
            <Image
              className={styles.angular}
              src={angular_icon}
              alt="angular_icon"
            />
            <Image className={styles.react} src={react_icon} alt="react_icon" />
          </div>
        </div>
      </main>
      <About aboutRef={aboutRef} />
      <Career careerRef={careerRef} />
    </div>
  );
}
