import styles from './styles.module.css';

export default function Index({ text = '' }: { text?: string }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span className={styles.text}>{text}</span>
    </section>
  );
}
