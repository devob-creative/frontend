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
      <div className="d-sm-block d-none bg-dark text-light">
        <Container className="d-flex justify-content-center align-items-center py-5 mb-5">
          {Object.values(CONTACT).map((i, index) => (
            <div key={index} className="d-flex align-items-center">
              <Icon type="regular" name={i.icon} size="2x" />
              <div className="mx-5">
                <Text as="h5" weight="normal" className="text-white-50">
                  {i.title}
                </Text>
                <Text as="h3" className="mt-1 mb-0">
                  {i.value}
                </Text>
              </div>
            </div>
          ))}
        </Container>
      </div>
      <Container className="mb-5">
        <Row className="justify-content-center">
          <Col sm={7}>
            <Text as="h2" weight="bold" text="Form" className="mb-4" />
            <Row>
              <Col col={12} md={6}>
                <Input.Group className="mb-4">
                  <Input.Control type="text" />
                  <Input.Label title="Name*" />
                </Input.Group>
              </Col>
              <Col col={12} md={6}>
                <Input.Group className="mb-4">
                  <Input.Control type="text" />
                  <Input.Label title="Company*" />
                </Input.Group>
              </Col>
              <Col col={12} md={6}>
                <Input.Group className="mb-4">
                  <Input.Control type="text" />
                  <Input.Label title="Email*" />
                </Input.Group>
              </Col>
              <Col col={12} md={6}>
                <Input.Group className="mb-4">
                  <Input.Control type="text" />
                  <Input.Label title="Phone*" />
                </Input.Group>
              </Col>
              <Col col={12} md={12}>
                <Input.Group className="mb-3">
                  <Input.Control as="textarea" rows="4" />
                  <Input.Label title="A few words about your project*" />
                </Input.Group>
              </Col>
            </Row>
            <Button title="Send Message" variant="secondary" />
          </Col>
        </Row>
      </Container>
      <style global="true">{`footer{display:none}`}</style>
    </Layout>
  );
}

export default Contact;
