import Logo from "./../../public/assets/majid-logo.png";
import LinkdinIcon from "./../../public/assets/linkdin.svg";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-[140px] h-full bg-stone-800 flex flex-col justify-between xs:w-full fixed">
      <div className="h-[160px] bg-[black] flex-col items-center justify-center text-center">
        <div className="w-[70px] m-auto mt-2">
          <Image src={Logo} style={{ width: "100%", height: "100%" }} />
        </div>
        <h2 className="text-white font-bold mt-1 text-xl text-colors">Majid</h2>
        <h6 className="mt-1 text-sm text-secondaryText">Web Developer</h6>
      </div>
      <div className="">
        {pages.map((item) => (
          <p
            key={item.id}
            className="py-3 text-white text-center  hover:text-primary border-b-[1px] border-b-slate-400 cursor-pointer"
          >
            {item.label}
          </p>
        ))}
      </div>
      <div className="h-[150px] flex justify-center">
        <div className="flex gap-6">
          <Image src={LinkdinIcon} className="text-white">
            img
          </Image>
          <p className="text-white">img</p>
          <p className="text-white">img</p>
        </div>
      </div>
    </div>
  );
}

const pages = [
  {
    id: 0,
    label: "About",
    link: "",
  },
  {
    id: 1,
    label: "My Skills",
    link: "",
  },
  {
    id: 2,
    label: "Work",
    link: "",
  },
  {
    id: 3,
    label: "Contact",
    link: "",
  },
  {
    id: 4,
    label: "Blog",
    link: "",
  },
];

const socialMedias = [
  { id: "linkdin", url: "", icon: "" },
  { id: "github", url: "", icon: "" },
  { id: "Twiiter", url: "", icon: "" },
];
