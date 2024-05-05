import classnames from "classnames/bind";

import styles from "./Heading.module.scss";

const cx = classnames.bind(styles);

const Heading = ({
  children,
  level,
  marginBottom,
  marginLeft,
  marginTop,
  marginRight,
}) => {
  const Tag = `h${level}`;

  const headingClasses = cx({
    heading: true,
    [`heading--${level}`]: level,
    [`margin-bottom--${marginBottom}`]: marginBottom,
    [`margin-top--${marginTop}`]: marginTop,
    [`margin-left--${marginLeft}`]: marginLeft,
    [`margin-right--${marginRight}`]: marginRight,
  });

  return <Tag className={headingClasses}>{children}</Tag>;
};
export default Heading;
