import { useStateContext } from "@/context/ContextProvider";
import fig1 from "@/public/fig1.png";
import fig2 from "@/public/fig2.png";
import fig3 from "@/public/fig3.png";
import fig4 from "@/public/fig4.png";
import fig5 from "@/public/fig5.png";
import fig6 from "@/public/fig6.png";
import fig7 from "@/public/fig7.png";
import fig8 from "@/public/fig8.png";
import qna_logo from "@/public/qna_logo.png";
import styles from "@/styles/Layout.module.css";
import Image from "next/image";

const LayoutComponent = ({ children }) => {
  const { screenSize } = useStateContext();

  return (
    <div className={styles.wrapper}>
      {screenSize > 900 && (
        <div className={styles.left}>
          <div className={styles.figure}>
            <Image src={fig1} alt="fig1" layout="fill" />
          </div>
          <div className={styles.figure}>
            <Image src={fig2} alt="fig2" layout="fill" />
          </div>
          <div className={styles.figure}>
            <Image src={fig3} alt="fig3" layout="fill" />
          </div>
          <div className={styles.figure}>
            <Image src={fig4} alt="fig4" layout="fill" />
          </div>
        </div>
      )}
      {children}
      {screenSize >= 900 && (
        <div className={styles.right}>
          <div className={styles.figure}>
            <Image src={fig5} alt="fig5" layout="fill" />
          </div>
          <div className={styles.figure}>
            <Image src={fig6} alt="fig6" layout="fill" />
          </div>
          <div className={styles.figure}>
            <Image src={fig7} alt="fig7" layout="fill" />
          </div>
          <div className={styles.figure}>
            <Image src={fig8} alt="fig8" layout="fill" />
          </div>
        </div>
      )}
      {screenSize < 900 && (
        <div className={styles.bottom}>
          <div className={styles.figure}>
            <Image src={fig1} alt="fig1" layout="fill" />
          </div>
          <div className={styles.figure}>
            <Image src={fig2} alt="fig2" layout="fill" />
          </div>
          <div className={styles.figure}>
            <Image src={fig3} alt="fig3" layout="fill" />
          </div>
          <div className={styles.figure}>
            <Image src={fig4} alt="fig4" layout="fill" />
          </div>
          <div className={styles.figure}>
            <Image src={fig5} alt="fig5" layout="fill" />
          </div>
          <div className={styles.figure}>
            <Image src={fig6} alt="fig6" layout="fill" />
          </div>
          <div className={styles.figure}>
            <Image src={fig7} alt="fig7" layout="fill" />
          </div>
          <div className={styles.figure}>
            <Image src={fig8} alt="fig8" layout="fill" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutComponent;
