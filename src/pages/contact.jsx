import ContactCard from "../components/contactCard"
import Button from "../components/primary-btn"
import "../assets/css/contact.css"
const contact = () => {
  return (
    <main>
      <section className="contactSection">
        <div className="containerlarge">
          <div className="contentWrapper">
            <h2>Connect with Your Trusted Accounting Advisors</h2>
            <div className="mainContent">
              <div className="leftContent">
                <h4>Reach us anytime via Call, Email, or a Visit</h4>
                <div className="actions">
                  <ContactCard
                    src="/call.svg"
                    title="Give us call"
                    text="(407) 298-9140 x1192"
                    width="100%"
                  />
                  <ContactCard
                    src="/mail.svg"
                    title="Send us Email"
                    text="Henry.Blick@hotmail.com"
                    width="100%"
                  />
                  <ContactCard
                    src="/location.svg"
                    title="Our Location"
                    text="59875 Parisian Fork"
                    width="100%"
                  />
                </div>
              </div>
              <form action="" id="contactForm">
                <div className="form-top">
                  <input
                    type="text"
                    id="fnameInput"
                    placeholder="Enter your first name"
                    required
                  />
                  <input
                    type="text"
                    id="lnameInput"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <input
                  type="email"
                  id="mailInput"
                  placeholder="Enter your e-mail"
                  required
                />
                <input
                  type="tel"
                  id="phoneInput"
                  placeholder="Enter your phone number"
                  required
                />
                <input
                  type="text"
                  id="msgInput"
                  placeholder="Enter the subject to discuss"
                  required
                />
                <textarea
                  id="messageInput"
                  placeholder="Write your message"
                  required
                ></textarea>
                <Button btnTitle="Send Message" type="submit" width="100%" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default contact;
