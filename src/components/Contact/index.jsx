import { useState, useRef, lazy, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_xb8byp3",
        "template_gzfc2bc",
        {
          from_name: form.name,
          to_name: "Oscar",
          from_email: form.email,
          to_email: "oscardavid2094@gmail.com",
          message: form.message,
        },
        "g46gQOVJi3DfOgNnp"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I will get back to you, as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <section className="overflow-hidden pb-5 sectionWrapper" id="contact">
      <div></div>
      <div className="bg-black-100 p-8 rounded-2xl flex flex-col gap-3">
        <div>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-3"
        >
          <label className="col-span-2 xs:col-span-1 text-sm">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
              required
            />
          </label>
          <label className="col-span-2 xs:col-span-1 text-sm">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
              required
            />
          </label>
          <label className="col-span-2 text-sm sm:text-base">
            <textarea
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Leave a message!"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none text-white font-bold shadow-md shadow-primary rounded-xl col-span-2 w-full xl:w-1/2"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
