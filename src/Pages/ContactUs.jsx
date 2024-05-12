import { Container, Row, Col } from 'react-bootstrap';
import Navb from '../Componennts/Navbar/Navbar';
import MyFooter from '../Componennts/footer/Footer';
import { Helmet ,HelmetProvider} from 'react-helmet-async';


function ContactUs() {
  return (
<HelmetProvider>
<Helmet>
        <title>ContactUs</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
    <Navb />
    <Container className="my-5">
      <Row className="mb-5">
        <Col className="mt-8">
          <h1 className="text-center">Contact Us</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <p>
            Wed love to hear from you! If you have any questions, feedback, or
            inquiries, please dont hesitate to get in touch with us using the
            contact information below.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <h4>Contact Information</h4>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={7} className="text-center">
          <p><strong>Email:</strong> freelancer.codegeeks@gmail.com</p>
          <p><strong>Address:</strong> Pune,Maharashtra</p>
        </Col>
      </Row>
    </Container>
    <MyFooter />
  </HelmetProvider>
  )
}

export default ContactUs