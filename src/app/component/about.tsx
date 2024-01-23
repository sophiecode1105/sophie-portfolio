"use client";

import { RefObject, useState } from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import user_icon from "../../../assets/user.png";
import github_icon from "../../../assets/github.png";
import phone_icon from "../../../assets/phone.png";
import email_icon from "../../../assets/email.png";
import blog_icon from "../../../assets/blog.png";
import study_icon from "../../../assets/study.png";
import Link from "next/link";

export default function About({
  aboutRef,
}: {
  aboutRef: RefObject<HTMLDivElement>;
}) {
  return (
    <article ref={aboutRef} className={styles.container}>
      <div className={styles.alignment}>
        <div className={styles.title}>
          <span>ABOUT ME</span>
        </div>
        <div className={styles.contents}>
          <div>
            <span className={styles.bigger}>
              긍정적인 생각으로, 지속적인 성장을 위해 노력하고, 협업하는 환경을
              좋아합니다.
            </span>
            <span>
              <span className={styles.bluecolor}>React</span>와{" "}
              <span className={styles.redcolor}>Angular</span>를 활용하여 다양한
              웹사이트를 개발한 경험이 있습니다.
            </span>
            <span>
              UI / UX에도 흥미를 느끼며 사용자의 입장에서 좀 더 편리한 디자인을
              생각합니다.
            </span>
            <span>
              최신 기술과 트렌드를 주시하며 지속적인 발전에 노력하고 있습니다.
            </span>
          </div>
          <ul className={styles.icon_wrapper}>
            <li>
              <Image className={styles.icon} src={user_icon} alt="user_icon" />
              <div className={styles.detail_info}>
                <span>이름</span>
                <span>이채영</span>
              </div>
            </li>
            <li>
              <Image
                className={styles.icon}
                src={phone_icon}
                alt="phone_icon"
              />
              <div className={styles.detail_info}>
                <span>전화번호</span>
                <span>010-4780-2873</span>
              </div>
            </li>
            <li>
              <Image
                className={styles.icon}
                src={study_icon}
                alt="study_icon"
              />
              <div className={styles.detail_info}>
                <span>학력</span>
                <span>
                  University of Manchester
                  <br />
                  (패션경영)
                </span>
              </div>
            </li>
            <Link
              className={styles.detail_link}
              target="_blank"
              href="https://developeritchaeyachae.tistory.com/"
            >
              <Image
                className={styles.email_icon}
                src={email_icon}
                alt="email_icon"
              />
              <div className={styles.detail_info}>
                <span>이메일</span>
                <span>sophiecode1105@gmail.com</span>
              </div>
            </Link>
            <Link
              className={styles.detail_link}
              target="_blank"
              href="https://github.com/sophiecode1105"
            >
              <Image
                className={styles.icon}
                src={github_icon}
                alt="github_icon"
              />
              <div className={styles.detail_info}>
                <span>깃허브</span>
                <span>sophiecode</span>
              </div>
            </Link>

            <Link
              target="_blank"
              className={styles.detail_link}
              href="https://developeritchaeyachae.tistory.com/"
            >
              <Image className={styles.icon} src={blog_icon} alt="blog_icon" />
              <div className={styles.detail_info}>
                <span>블로그</span>
                <span>코딩하는 이채야채</span>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </article>
  );
}
