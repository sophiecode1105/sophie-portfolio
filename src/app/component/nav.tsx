"use client";

import styles from "./nav.module.scss";

export default function Nav({
  liftingUp,
}: {
  liftingUp: (idx: number) => void;
}) {
  const list = ["Home", "About me", "Career", "Skills"];
  const handleNavClick = (idx: number) => {
    liftingUp(idx);
  };
  return (
    <nav className={styles.container}>
      <div className={styles.alignment}>
        <div className={styles.left_nav}> {"<Sophie.lee>"}</div>
        <ul className={styles.right_nav}>
          {list.map((item, index) => {
            return (
              <li
                key={index}
                className={styles.link}
                onClick={() => {
                  handleNavClick(index);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
