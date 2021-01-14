import LentButton from "./lent-button";
import LentNav from "./lent-nav";
import LentNavItem from "./lent-nav-item";
import Icon from "../icon/icon";
import { useModals } from "../../apollo/actions/modal.action";
import { modalsVar } from "../../apollo/cache/modal.cache";
import { SOCIAL } from "../../constants";
import styles from "../../styles/lent.module.scss";

export default function Lent(props) {
  const { data: { modals } = {} } = useModals();
  return (
    <div className={styles.wrapper} {...props}>
      <LentButton
        isActive={modals?.extra}
        onClick={() => modalsVar({ extra: !modalsVar()?.extra })}
        aria-label="Menu"
      >
        <Icon type="solid" name={modals?.extra ? "times" : "bars"} />
      </LentButton>
      <LentNav>
        {SOCIAL.map((item, index) => (
          <LentNavItem key={index} title={item.title} url={item.url} />
        ))}
      </LentNav>
      <LentButton aria-label="Language">
        <span>EN</span>
      </LentButton>
    </div>
  );
}
