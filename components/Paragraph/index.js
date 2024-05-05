import classnames from "classnames/bind";

import styles from "./Paragraph.module.scss";

const cx = classnames.bind(styles);

const Paragraph = ({
  caption,
  children,
  intro,
  marginBottom,
  marginLeft,
  marginTop,
  marginRight,
}) => {
  const paragraphClasses = cx({
    paragraph: true,
    intro: intro,
    caption: caption,
    [`margin-bottom--${marginBottom}`]: marginBottom,
    [`margin-top--${marginTop}`]: marginTop,
    [`margin-left--${marginLeft}`]: marginLeft,
    [`margin-right--${marginRight}`]: marginRight,
  });
  return <p className={paragraphClasses}>{children}</p>;
};
export default Paragraph;
