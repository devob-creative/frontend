import styles from "../../styles/lent.module.scss";
import LentButton from "./lent-button";
import LentNav from "./lent-nav";
import LentNavItem from "./lent-nav-item";
import Icon from "../icon/icon";

export default function Lent(props) {
  return (
    <div className={styles.lent} {...props}>
      <LentButton>
        <Icon type="solid" name="bars" />
      </LentButton>
      <LentNav>
        <LentNavItem title="behance" url="#" />
        <LentNavItem title="facebook" url="#" />
        <LentNavItem title="instagram" url="#" />
      </LentNav>
      <LentButton>
        <span>EN</span>
      </LentButton>
    </div>
  );
}