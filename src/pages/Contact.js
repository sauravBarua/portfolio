import React from "react";

const Contact = () => {
  return (
    <div>
      <form
        method="post"
        action="https://getform.io/{your-unique-getform-endpoint}"
      >
        ...
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Message
          <input type="text" name="message" />
        </label>
        ...
      </form>
    </div>
  );
};

export default Contact;
