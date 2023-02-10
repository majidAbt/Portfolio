import AnimatedText from "../components/AnimatedText";
import styles from "./About.module.css";
import Lottie from 'react-lottie';
import animationData from '../public/assets/lotties/laptop.json';
import ArrowDown from "../public/assets/icons/ArrowDown";

function Landing() {
  const name = "Hi,\u00A0I\u00A0am\u00A0Majid";
  const desc =
    "I’m a Front-End Developer located in Poland. I have a serious passion for UI effects, animations and creating intuitive, dynamic userexperiences. Well-organised person, problem solver, independentemployee with high attention to detail. Fan of MMA, outdooractivities, TV series and English literature. A family person and father of two fractious boys, Interested in the entire fronten dspectrum and working on ambitious projects with positive people.";

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <div className="min-h-screen h-full text-primaryText grid xl:grid-cols-4 gap-2 min-screen-full">
        <div className="flex-col self-center justify-center relative col-span-2 self-end">
          <AnimatedText text={name} />
          <p className={`text-textPrimary ${styles.paragraph}`}>
            {desc}
            <p className="mt-2 text-primary cursor-pointer">
              For more information click here!
            </p>
          </p>
        </div>
        <div className="col-span-2 h-[400px] m-auto ">
          <Lottie options={defaultOptions} height={400}
            width={400} />
        </div>
        <div className="col-span-4 text-center flex justify-center items-end  p-4">
          <div className="flex gap-1 animate-bounce items-center">
            <p className="self-end hover:text-primary cursor-pointer p-2 " ><a href="#section2" className="scroll-smooth">More details Scroll down </a></p>
            <ArrowDown className=" color-primary" />
          </div>
        </div>
      </div>
      <div id="section2" className="min-h-screen text-primaryText grid xl:grid-cols-4 gap-2 min-screen-full scroll-smooth">s
      </div>
    </>
  );
}

export default Landing;
