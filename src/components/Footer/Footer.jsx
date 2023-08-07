import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/Withmumtazcs"
            className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a
            href="https://twitter.com/"
            className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="https://www.google.com/m.mumtazcs@yahoo.com" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a
            href="https://www.instagram.com/withmumtazcs/"
            className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-mumtaz-3957b4260/"
            className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a
            href="https://github.com/Mumtaz12"
            className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Flipkart
              </h6>
              <p>
                The company initially focused on online book sales with
                country-wide shipping. Flipkart slowly grew in prominence and
                was receiving 100 orders per day by 2008.   
              </p>
              <p>Number of employees:
                30,000 (2016)</p>
                <p>Industry: E-commerce Headquarters: Bengaluru,
              Karnataka, India ...</p>
              <p>Services: Online shopping</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Fashion
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Grocery
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Mobile
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Jwellery
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Kupwara, Jammu & Kashmir India
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                m.mumtazcs@yahoo.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 91
                7006717827
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 91
                9622412556
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.07)" }}>
        ©2021 Copyright:@Mohammad Mumtaz
      </div>
    </MDBFooter>
  );
}

export default Footer;
