import NFTImage from "./image-equilibrium.jpg";
import Avatar from "./image-avatar.png";
import Clock from "./icon-clock.svg";
import Ethereum from "./icon-ethereum.svg";
import View from "./icon-view.svg";
import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.image__wrapper}>
        <img
          className={styles.image}
          src={NFTImage.src}
          alt="A prismatic cube."
        />
        <div className={styles.overlay}>
          <img className={styles.view} src={View.src} />
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Equilibrium #3429</h1>
        <p className={styles.description}>
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className={styles.statistics}>
          <p className={styles.price}>
            <img src={Ethereum.src} /> 0.041 ETH
          </p>
          <p className={styles.time}>
            <img src={Clock.src} />3 days left
          </p>
        </div>
        <hr className={styles.break} />
        <div className={styles.author}>
          <div className={styles.author__avatar}>
            <img className={styles.author__image} src={Avatar.src} />
          </div>

          <div className={styles.author__tag}>
            Creation of <p className={styles.author__name}>Jules Wyvern</p>
          </div>
        </div>
      </div>
    </div>
  );
}
