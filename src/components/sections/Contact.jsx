/* eslint-disable no-unused-vars */
import { useState } from "react";
import ShinyText from "../../../components/ShinyText/ShinyText";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Footer } from "../Footer";

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => alert("Oops! Something went wrong. Try again"));
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center mt-200 md:mt-100 lg:mt-50 px-8 md:px-12">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            <ShinyText
              text="Contact"
              disabled={false}
              speed={3}
              className="text-blue-300 font-primary font-bold mb-8 text-3xl shiny-text"
            />

            <div className="">
              <p className="font-product mx-auto text-sm md:text-xl text-gray-300">
                Here is my contact information. Feel free to reach out! Contact
                me and let's be friends! I look forward to receiving your
                message!
              </p>

              <div className="mt-6">
                <h2 className="font-bold mx-auto text-xl md:text-2xl text-gray-700 mb-6">
                  Let's Get in Touch!
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      required
                      className="w-full bg-gray-800/20 border-1 border-purple-700/50 rounded-lg px-4 py-3 text-gray-400 duration-300 transition focus:outline-none focous:border-2 focus:border-purple-700 font-product font-bold"
                      placeholder="Your Name"
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      className="w-full bg-gray-800/20 border-1 border-purple-700/50 rounded-lg px-4 py-3 text-gray-400 duration-300 transition focus:outline-none focous:border-2 focus:border-purple-700 font-product font-bold"
                      placeholder="email@example.com"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      className="w-full bg-gray-800/20 border-1 border-purple-700/50 rounded-lg px-4 py-3 text-gray-400 duration-300 transition focus:outline-none focous:border-2 focus:border-purple-700 font-product font-bold"
                      placeholder="Type your message..."
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="ls-normal font-product font-bold py-3 px-6 bg-purple-600 border-1 border-purple-950/20 rounded-full ls-normal duration-300 transition-all ease-in-out hover:bg-purple-600/50 hover:border-purple-950">
                      Send Message{" "}
                      <i className="ri-send-plane-2-line ml-3 font-normal"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
      <Footer />
    </>
  );
};
