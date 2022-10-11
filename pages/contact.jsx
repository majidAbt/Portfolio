import AnimatedText from "../components/AnimatedText";
import styles from "./Contact.module.css";
import Map from "../components/GoogleMap";
function Contact() {
  const title = "Contact\u00A0Me!";
  const desc =
    "I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.";
  const email = "majid.abt98@gmail.com"
  return (
    <div className="h-full text-primaryText grid xl:grid-cols-2 gap-2">
      <div className="flex-col self-center justify-center pl-8 relative md:col-span-full">
        <AnimatedText text={title} />
        <div className="relative">
          <p className={styles.paragraph}>{desc}</p>
        </div>
        <div className="mt-10 min-h-[460px] p-6 relative">
          <form
            className="grid grid-cols-2 gap-4"
            method="POST"
            action={`mailto: ${email}`}
            encType="multipart/form-data"
          >
            <input
              className="appearance-none block w-full border-none bg-gray-700 text-white border rounded py-4 px-4 mb-3 leading-tight focus:outline-none "
              id="grid-first-name"
              type="text"
              placeholder="Name"
            />
            <input
              className="appearance-none block w-full border-none bg-gray-700 text-white border rounded py-4 px-4 mb-3 leading-tight focus:outline-none "
              id="grid-first-name"
              type="text"
              placeholder="Email"
            />
            <input
              className="appearance-none block w-full border-none bg-gray-700 text-white border rounded py-4 px-4 mb-3 leading-tight focus:outline-none col-span-full"
              id="grid-first-name"
              type="text"
              placeholder="Subject"
            />

            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white min-h-[160px] col-span-full"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="bg-transparent text-[#08fdd8] hover:bg-primary [#08fdd8] font-semibold hover:text-white py-2 px-4 border border-[#08fdd8] hover:border-transparent rounded max-w-[270px]"
            >
              Send message!
            </button>
          </form>
        </div>
      </div>

      <h1 className="text-primry md:col-span-full">
        <Map />
      </h1>
    </div>
  );
}

export default Contact;
