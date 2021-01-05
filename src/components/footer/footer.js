import Link from "next/link";
import { Text, Icon, Container, Row, Col } from "../index";
import { REGEX, CONTACT } from "../../constants";
import styles from "../../styles/footer.module.scss";

export default function Footer() {
  const phone = new RegExp(REGEX.phone).exec(CONTACT.phone?.value);
  return (
    <footer className={styles.wrapper}>
      <Container>
        <Row>
          <Col sm="6">
            <Link href="/">
              <a className={styles.brand}>
                <Text text="Devob Creative" as="strong" transform="uppercase" />
              </a>
            </Link>
          </Col>
          <Col sm="6" className="d-flex justify-content-end">
            {phone && (
              <Text as="span" className="d-flex align-items-center">
                <Icon type="regular" name="phone" size="lg" />
                <Text as="strong" className="mx-2">
                  {`${phone[1]}${phone[2]}`}
                </Text>
                <Text as="h4" weight="bold" className="my-0">
                  {`${phone[3]}${phone[4]}${phone[5]}`}
                </Text>
              </Text>
            )}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
