import { Link } from "react-router-dom";

const socials = [
  {
    name: "instagram",
    link: "https://www.instagram.com/shantitripholidays",
    icon: "/icons/instagram.svg",
  },
  {
    name: "twitter",
    link: "https://www.instagram.com/shantitripholidays",
    icon: "/icons/twitter.svg",
  },
  {
    name: "facebook",
    link: "https://www.instagram.com/shantitripholidays",
    icon: "/icons/facebook.svg",
  },
];

const usefulLinks = [
  [
    { title: "Destinations", link: "/" },
    { title: "Gallery", link: "/" },
    { title: "Contact Us", link: "/" },
    { title: "Collaborate", link: "/" },
  ],
  [
    { title: "Terms & Conditions", link: "/" },
    { title: "Privacy Policy", link: "/" },
    { title: "Cookie Policy", link: "/" },
  ],
  [
    { title: "Help", link: "/" },
    { title: "Support", link: "/" },
    { title: "Partner with us", link: "/" },
  ],
];

export default function Footer() {
  return (
    <>
      <footer className="pt-44 pb-6 p-page bg-primary flex text-back justify-between">
        <div className="flex flex-col gap-y-5 items-baseline basis-2/5">
          <Link to="/" draggable={false}>
            <img
              src="/header.webp"
              alt="shantitrip logo"
              className="brightness-0 invert h-14"
              draggable={false}
            />
          </Link>
          <p className="">
            Lorem ipsum dolor sit amet. 33 nulla odit aut quia fugit in culpa
            voluptatem sit esse quasi. Qui distinctio cupiditate sit tempora
            exercitationem et ducimus internos sed perspiciatis expedita eos
            porro dolorem.
          </p>
          <div className="flex text-lg font-light gap-x-3 items-center  ">
            Follow us on
            {socials.map((social) => (
              <div className="rounded-full bg-background flex justify-center items-center w-14 h-14">
                <img src={social.icon} alt={social.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="basis-2/5">
          <h2 className="text-2xl font-light py-4">Useful Links</h2>
          <div className="flex justify-between">
            {usefulLinks.map((sect) => (
              <div className="flex flex-col gap-y-2">
                {sect.map((link) => (
                  <Link className="font-semibold text-sm" to={link.link}>
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="w-full text-center text-xs py-2 border-t bg-primary border-back border-opacity-40 text-back">
        © ShantiTrip. All Rights Reserved 2023.
      </div>
    </>
  );
}
