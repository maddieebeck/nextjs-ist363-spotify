import ButtonUI from "../../html/ButtonUI";

import styles from "./Showcase.module.scss";

const ShowcaseExpandedContent = ({ items, activeIndex }) => {
  return (
    <section className={styles.showcase__expanded__content}>
      <div classNames={styles.showcase__expanded__content__top}>
        <h2 className={styles.showcase__artist__name}>
          {items[activeIndex].name}
        </h2>
        <ButtonUI label="View albums" icon="faAngleDown" />
      </div>
      <div classNames={styles.showcase__expanded__content__bottom}>
        bottom content
      </div>
    </section>
  );
};
export default ShowcaseExpandedContent;
