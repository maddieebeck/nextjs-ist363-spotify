import Icon from "../Icon";

import styles from "./ButtonUI.module.scss";

const ButtonUI = ({ icon, clickHandler, label }) => {
  return (
    <button className={styles.btnui} onClick={clickHandler}>
      {label}
      <Icon icon={icon} />
    </button>
  );
};
export default ButtonUI;
