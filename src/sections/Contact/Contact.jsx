import "./Contact.css";
import { useState } from "react";

export default function Contact({ brand }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="w-full h-auto flex items-center justify-center">
      <div className="wrapper py-28 flex flex-col items-center justify-center contact max-xl:ml-28 max-xl:mr-5">
        <h1 className="text-7xl max-sm:text-4xl font-bold">
          Contact<span className={brand.color + " " + "text-10xl"}>.</span>
        </h1>
        <p className="mt-3 mb-5">Shoot me an email if you want to connect!</p>
        <p className={brand.color + " " + "text-xl"}>toufiqmowla@gmail.com</p>
        <form className="flex flex-col items-center justify-center gap-7 mt-10">
          <input
            type="text"
            required
            placeholder="Name..."
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="mail"
            required
            placeholder="E-mail..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className={brand.border + " " + "border w-28 h-10 rounded-md"}>Submit</button>
        </form>
      </div>
    </section>
  );
}
