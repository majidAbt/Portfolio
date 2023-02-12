import ArrowDown from "../../public/assets/icons/ArrowDown";

export default function ScrollDownText() {
  return (
    <div className="col-span-4 text-center flex justify-center items-end  p-4 h-[200px]">
    <div className="flex gap-1 animate-bounce items-center">
      <p className="self-end hover:text-primary cursor-pointer p-2 " ><a href="#section2" className="scroll-smooth">More details Scroll down </a></p>
      <ArrowDown className=" color-primary" />
    </div>
  </div>
  )
}
