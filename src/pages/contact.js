import { useState } from "react";
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
import { useNewMessage } from "../apollo/actions/contact.action";
import { CONTACT, REGEX } from "../constants";

function Contact() {
  const [newMessage, { loading }] = useNewMessage();
  const initialState = {
    fullname: "",
    company: "",
    email: "",
    phone: "",
    content: "",
  };
  const [state, setState] = useState({ ...initialState });
  const [errors, setErrors] = useState({});
  const validate = () => {
    let error = {};
    if (state.fullname.trim().length < 3) {
      error.fullname = "Name must be longer from 3";
    }
    if (!state.company) {
      error.company = "Company cannot be empty";
    }
    if (!REGEX.email.test(state.email)) {
      error.email = "Email is incorrect";
    }
    if (state.phone && !REGEX.phone.test(state.phone)) {
      error.phone = "Phone is incorrect";
    }
    if (!state.content) {
      error.content = "Message cannot be empty";
    }
    setErrors(error);
    return error;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({ ...prevState, [name]: false }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (Object.keys(error).length) return;
    try {
      const message = await newMessage({ variables: { ...state } });
      setState({ ...initialState });
    } catch (e) {
      console.log(e);
    }
  };
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
        <form onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col sm={7}>
              <Text as="h2" weight="bold" text="Form" className="mb-4" />
              <Row>
                <Col col={12} md={6}>
                  <Input.Group className="mb-4">
                    <Input.Control
                      type="text"
                      name="fullname"
                      value={state.fullname}
                      onChange={handleChange}
                      className={errors?.fullname ? "border-danger" : ""}
                    />
                    <Input.Label title="Name*" />
                  </Input.Group>
                </Col>
                <Col col={12} md={6}>
                  <Input.Group className="mb-4">
                    <Input.Control
                      type="text"
                      name="company"
                      value={state.company}
                      onChange={handleChange}
                      className={errors?.company ? "border-danger" : ""}
                    />
                    <Input.Label title="Company*" />
                  </Input.Group>
                </Col>
                <Col col={12} md={6}>
                  <Input.Group className="mb-4">
                    <Input.Control
                      type="text"
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                      className={errors?.email ? "border-danger" : ""}
                    />
                    <Input.Label title="Email*" />
                  </Input.Group>
                </Col>
                <Col col={12} md={6}>
                  <Input.Group className="mb-4">
                    <Input.Control
                      type="text"
                      name="phone"
                      value={state.phone}
                      onChange={handleChange}
                      className={errors?.phone ? "border-danger" : ""}
                    />
                    <Input.Label title="Phone" />
                  </Input.Group>
                </Col>
                <Col col={12} md={12}>
                  <Input.Group className="mb-3">
                    <Input.Control
                      as="textarea"
                      rows="4"
                      name="content"
                      value={state.content}
                      onChange={handleChange}
                      className={errors?.content ? "border-danger" : ""}
                    />
                    <Input.Label title="A few words about your project*" />
                  </Input.Group>
                </Col>
              </Row>
              <Button
                type="submit"
                title="Send Message"
                variant="secondary"
                loading={loading}
              />
            </Col>
          </Row>
        </form>
      </Container>
      <style global="true">{`footer{display:none}`}</style>
    </Layout>
  );
}

export default Contact;
