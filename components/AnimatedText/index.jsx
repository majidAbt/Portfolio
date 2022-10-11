import styles from "./AnimatedText.module.css";

export default function AnimatedText({ text }) {
  return (
    <h1 className={`text-primary sm:text-5xl text-7xl my-8 ${styles.title} relative`}>
      {text.split("").map((char, idx) => (
        <span key={char + idx} className={styles.animated}>
          {char}
        </span>
      ))}
    </h1>
  );
}
