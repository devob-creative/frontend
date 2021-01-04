import Link from "next/link";
import { Text, Icon, Container, Row, Col } from "../index";
import styles from "../../styles/footer.module.scss";

export default function Footer() {
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
            <Text as="span" className="d-flex align-items-center">
              <Icon type="regular" name="phone" size="lg" />
              <Text as="strong" className="mx-2">
                +99450
              </Text>
              <Text as="h4" weight="bold" className="my-0">473 14 23</Text>
            </Text>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
