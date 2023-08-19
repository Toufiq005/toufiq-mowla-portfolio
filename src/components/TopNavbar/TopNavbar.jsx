import "./TopNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSkype,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function (props) {
  const socilaLinks = [
    {
      id: 1,
      name: "facobook",
      href: "https://www.facebook.com/profile.php?id=100083757555513",
      icon: faFacebook,
    },
    {
      id: 2,
      name: "Skype",
      href: "https://join.skype.com/invite/tDzcszJavPHE",
      icon: faSkype,
    },
    {
      id: 3,
      name: "Whatsapp",
      href: "https://wa.me/1975513724",
      icon: faWhatsapp,
    },
  ];

  return (
    <div className="top-navbar fixed top-0 z-30 flex items-center justify-between">
      <ul className="flex items-center justify-center gap-8 ml-28">
        {socilaLinks.map((link) => {
          return (
            <li key={link.id} className={"opacity-70" + " " + props.brand.hover}>
              <a target="_blank" href={link.href}>
                <FontAwesomeIcon icon={link.icon} className="text-3xl" />
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-center max-sm:hidden">
        <a className={"resume-link text-2xl mr-10" + " " + props.brand.border} href="#">My resume</a>
      </div>
    </div>
  );
}
