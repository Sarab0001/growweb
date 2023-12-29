import "./FormStyles.css";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cch18al",
        "template_tf4njjv",
        form.current,
        "Qa5KrplL3ZE5afQHr"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const send = () => {
    toast.success("Message send");
  };

  return (
    <body className="bodyF">
      <section id="contact">
        <div class="backgroundF">
          <div class="f-container ">
            <div class="screen">
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div class="title">
                    <span>CONTACT US</span>
                  </div>
                  <div class="contact">Call us on : +91-9711489594</div>
                </div>
                <div class="screen-body-item ">
                  <div class="form">
                    <div class="form-group">
                      <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="NAME"
                          name="from_name"
                          className="form-control"
                        />
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder="EMAIL"
                          name="from_email"
                          className="form-control"
                        />
                        <label>Phone No</label>
                        <input
                          type="text"
                          placeholder="PHONE NO."
                          name="from_phone"
                          className="form-control"
                        />
                        <label>Message</label>

                        <textarea
                          name="message"
                          placeholder="MESSAGE...."
                          className="form-control"
                        />
                        <div class="form-group buttons">
                          <input
                            onClick={send}
                            className="form-buttons mt-3"
                            type="submit"
                            value="SEND"
                          />
                          <ToastContainer />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Form;
