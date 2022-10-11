import Avatar from "./../../public/assets/icons/avatar.svg";
import Image from "next/image";


const BlogCard = ({ imgSrc, title, desc, author, date }) => {
  return (
    <>
      <div className=" w-full lg:max-w-full lg:flex">
        <div style={{ backgroundImage: `url(${imgSrc})` }} className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Mountain">
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{desc}</p>
          </div>
          <div className="flex items-center">
            <div className="flex align-center text-sm h-[45px] gap-3">

              <Image className="rounded-full mr-4" src={Avatar} width="30" height="15" alt="Avatar of Writer" />
              <div className="flex flex-col gap-0.5 self-end">
                <p className="text-gray-900 leading-none">{author}</p>
                <p className="text-gray-600">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default BlogCard