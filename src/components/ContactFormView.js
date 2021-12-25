import React from "react";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import NavBar from "./NavBar";
import RowSection from "./RowSection";
import sscolors from "../sscolors";

export default function ContactFormView() {
  return (
    <div>
      <RowSection height="120vh">
        {window.location.href.includes("contact") && <NavBar />}
        <div id="contact" className="col-md-6">
          <h2 style={{ marginTop: "5rem" }} className="display-3">
            we can’t wait to meet you
          </h2>
          <p className="lead">
            Every membership at Fellow begins with a tour of the space and a conversation with one of our Community
            Managers.
          </p>
          <h2 className="my-5" style={{ color: sscolors.ltblue }}>
            CONTACT TEAM FELLOW
          </h2>
          <p className="lead mb-0">management@sharespace.com</p>
          <p className="lead mt-0 p-0">(817)555-6129</p>
        </div>
        <div className="col-md-6 text-center mh-50 border align-self-center">
          <ContactForm />
        </div>
      </RowSection>
      <Footer />
    </div>
  );
}
