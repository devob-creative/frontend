import React from "react";
import {
  Hero,
  Layout,
  Head,
  Container,
  Row,
  Col,
  Text,
  Input,
  Button,
  Icon,
} from "../components";
import { CONTACT } from "../constants";

function Contact() {
  return (
    <Layout>
      <Head title="Contact" />
      <Hero title="Contact" />
      <Container className="mb-5">
        <Row>
          <Col sm="7">
            <Text as="h2" weight="bold" text="Form" className="mb-4" />
            <Row>
              <Col sm={6}>
                <Input.Group className="mb-4">
                  <Input.Control type="text" />
                  <Input.Label title="Name*" />
                </Input.Group>
              </Col>
              <Col sm={6}>
                <Input.Group className="mb-4">
                  <Input.Control type="text" />
                  <Input.Label title="Company*" />
                </Input.Group>
              </Col>
              <Col sm={6}>
                <Input.Group className="mb-4">
                  <Input.Control type="text" />
                  <Input.Label title="Email*" />
                </Input.Group>
              </Col>
              <Col sm={6}>
                <Input.Group className="mb-4">
                  <Input.Control type="text" />
                  <Input.Label title="Phone*" />
                </Input.Group>
              </Col>
              <Col sm={12}>
                <Input.Group className="mb-3">
                  <Input.Control as="textarea" rows="4" />
                  <Input.Label title="A few words about your project*" />
                </Input.Group>
              </Col>
            </Row>
            <Button title="Send Message" variant="secondary" />
          </Col>
          <Col sm="5">
            <div className="d-flex justify-content-center align-items-center flex-column h-100 border-start">
              {Object.values(CONTACT).map((i, index) => (
                <div key={index} className="d-flex align-items-center mb-5">
                  <Icon type="regular" name={i.icon} size="2x" />
                  <div className="mx-5">
                    <Text as="h5" weight="normal" className="text-black-50">
                      {i.title}
                    </Text>
                    <Text as="h3" className="mt-1 mb-0">
                      {i.value}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <style global="true">{`footer{display:none}`}</style>
    </Layout>
  );
}

export default Contact;
