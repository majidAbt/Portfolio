import Logo from "./../../public/assets/images/majid-logo.png";
import LinkdinIcon from "./../../public/assets/icons/linkdin.svg";
import GithubIcon from "./../../public/assets/icons/github.svg";
import TwitterIcon from "./../../public/assets/icons/twitter.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const { pathname } = useRouter();
  const owner = { name: "Majid", role: "Web Developer" };

  return (
    <main className="w-[140px] h-full bg-stone-800 flex flex-col justify-between xs:w-full fixed z-[2]">
      <div className="h-[160px] bg-[black] flex-col items-center justify-center text-center">
        <div className="w-[70px] m-auto mt-2">
          <Image src={Logo} style={{ width: "100%", height: "100%" }} />
        </div>
        <h2 className="text-white font-bold mt-1 text-xl text-primaryText">
          {owner["name"]}
        </h2>
        <h6 className="mt-1 text-sm text-secondaryText">{owner["role"]}</h6>
      </div>
      <div>
        {pages.map((item) => (
          <Link key={item.id} href={item.route}>
            <p
              className={`py-3 text-center hover:text-primary border-b-[1px] border-b-slate-400 cursor-pointer ${
                pathname == item.route ? "text-primary" : "text-white"
              }  hover:animate-pulse`}
            >
              {item.label}
            </p>
          </Link>
        ))}
      </div>
      <div className="h-[150px] flex justify-center">
        <div className="flex gap-3">
          {socialMedias.map((item, idx) => (
            <Image
              key={item.url + idx}
              src={item.icon}
              className="text-white cursor-pointer"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

const pages = [
  {
    id: 0,
    label: "About",
    route: "/about",
  },
  {
    id: 1,
    label: "My Skills",
    route: "/mySkills",
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
  { id: "linkdin", url: "", icon: LinkdinIcon },
  { id: "github", url: "", icon: GithubIcon },
  { id: "Twiiter", url: "", icon: TwitterIcon },
];
