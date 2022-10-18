import Logo from "./../../public/assets/images/majid-logo.png";
import MenuIcon from "../../public/assets/icons/MenuIcon";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CloseIcon from "../../public/assets/icons/CloseIcon";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import Linkedin from "../../public/assets/icons/Linkedin";
import Github from "../../public/assets/icons/Github";
import Twitter from "../../public/assets/icons/Twitter";

export default function Sidebar({ isSidebarOpen, setSidebarOpen }) {
  const { pathname } = useRouter();
  const { isMd } = useBreakpoint('md');
  const owner = { name: "Majid", role: "Web Developer" };

  return isMd || isSidebarOpen ? <main className="lg:w-[140px] md:w-[140px] xl:w-[140px] h-full bg-stone-800 flex flex-col justify-between w-full fixed z-[2]">
    <div className="h-[160px] bg-[black] flex-col items-center justify-center text-center">
      {!isMd && <CloseIcon className="w-[15px] absolute top-[15px] right-[20px] fill-primary" onClick={() => setSidebarOpen(false)} />}
      <div className="w-[70px] m-auto mt-2">
        <Image src={Logo} alt="logo" style={{ width: "100%", height: "100%" }} />
      </div>
      <h2 className="text-white font-bold mt-1 text-xl text-primaryText">
        {owner["name"]}
      </h2>
      <h6 className="mt-1 text-sm text-secondaryText">{owner["role"]}</h6>
    </div>
    <div>
      {pages.map((item) => (
        // eslint-disable-next-line @next/next/link-passhref
        <Link key={item.id} href={item.route} >
          <p
            onClick={() => setSidebarOpen(false)}
            className={`py-3 text-center hover:text-primary border-b-[1px] border-b-slate-400 cursor-pointer ${pathname == item.route ? "text-primary" : "text-white"
              }  hover:animate-pulse`}
          >
            {item.label}
          </p>
        </Link>
      ))}
    </div>
    <div className="h-[80px] flex justify-center">
      <div className="flex gap-3">
        {socialMedias.map((item, idx) => (
          <a key={idx} href={item.url} className="hover:fill-primary">
            {item.icon}
          </a>

        ))}
      </div>
    </div>
  </main > : <MenuIcon className="w-[35px] absolute top-[15px] right-[15px] fill-primary z-[5]" onClick={() => setSidebarOpen(true)} />




}

const pages = [
  {
    id: 0,
    label: "About",
    route: "/about",
  },
  {
    id: 2,
    label: "Blog",
    route: "/blog",
  },
  {
    id: 3,
    label: "Contact",
    route: "/contact",
  },
  {
    id: 4,
    label: "Home",
    route: "/",
  },
];

const socialMedias = [
  { id: "Twitter", url: "", icon: <Twitter /> },
  { id: "Linkedin", url: "", icon: <Linkedin /> },
  { id: "Github", url: "", icon: <Github /> },
];
