import Image from 'next/image';
import ContactForm from './ContactForm';

const Contact = () => (
  <>
    <div className="container">
      <h2 className="text-2xl font-bold pb-2">Contact Me</h2>
      <div className="flex gap-3 pb-5">
        <p>Socials: </p>
        <a target="_blank" href="https://linkedin.com/in/varunsadasivam" rel="noopener noreferrer">
          <img src="/assets/social/linkedin6.png" alt="Linkedin" className="h-5 w-5" />
        </a>
        <a target="_blank" href="https://github.com/sadavar" rel="noopener noreferrer">
          <img src="/assets/social/github-mark-white.svg" alt="Githuv" className="h-5 w-5" />
        </a>
      </div>
      <div className="flex items-start justify-between flex-col lg:flex-row" id="contact">
        <div className="flex-none w-full lg:w-auto lg:flex-1 pr-0 lg:pr-8 order-2 lg:order-1">
          <ContactForm />
        </div>
        <div className="flex-none w-full lg:w-auto lg:flex-1 order-1 lg:order-2 mb-8 lg:mb-0">
          <Image
            src="/assets/illustrations/contact.svg"
            alt="contact illustration"
            className="w-auto h-auto"
            width={498}
            height={313}
          />
        </div>
      </div>
    </div>
  </>
);

export default Contact;
