import Image from 'next/image';
import social from './social.json';

const Footer = () => (
  <div className="pt-56 pb-16 bg-[url('/assets/illustrations/footer.svg')] bg-cover bg-top bg-no-repeat">
    <div className="container flex items-center md:items-end text-center md:text-left justify-between flex-col md:flex-row">
      <div className="mb-8 md:mb-0">
        <h2 className="text-brand-primary min-[2170px]:dark:text-white font-bold text-2xl mb-4">Varun Sadasivam</h2>
        <span className="text-brand-primary min-[2170px]:dark:text-white">
          © All rights are reserved | {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex items-center">
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
            className="mr-2 last:mr-0"
          >
            <Image src={icon} alt={name} className="w-6 h-6" width={24} height={24} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
