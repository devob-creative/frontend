import LentButton from "./lent-button";
import LentNav from "./lent-nav";
import LentNavItem from "./lent-nav-item";
import Icon from "../icon/icon";
import { SOCIAL } from "../../constants";
import styles from "../../styles/lent.module.scss";

export default function Lent(props) {
  return (
    <div className={styles.wrapper} {...props}>
      <LentButton>
        <Icon type="solid" name="bars" />
      </LentButton>
      <LentNav>
        {SOCIAL.map((item, index) => (
          <LentNavItem key={index} title={item.title} url={item.url} />
        ))}
      </LentNav>
      <LentButton>
        <span>EN</span>
      </LentButton>
    </div>
  );
}
