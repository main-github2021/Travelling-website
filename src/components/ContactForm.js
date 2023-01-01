import "./ContactFormStyle.css";
function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Emain" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="6"></textarea>
        <button type="button">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
