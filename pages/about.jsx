import AnimatedText from "../components/AnimatedText";
import { Suspense } from 'react'

import styles from "./About.module.css";
import dynamic from "next/dynamic";
// import AtomLoading from "./../public/assets/images/atom-loading.gif";
import Image from "next/image";

function Home() {
  const name = "Me,\u00A0Myself\u00A0&\u00A0I";
  const desc =
    "I’m a Front-End Developer located in Iran. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature. Interested in the entire frontend dspectrum and working on ambitious projects with positive people.";

  const DynamicSkillsCanvas = dynamic(() => import('../components/SkillsCanvas'), {
    suspense: true,
  })

  return (
    <div className="h-full text-primaryText grid xl:grid-cols-2 gap-2">
      <div className="flex-col self-center justify-center px-4 relative">
        <AnimatedText text={name} />
        <p className={`text-textPrimary ${styles.paragraph}`}>
          {desc}
          <p className="mt-2 text-primary cursor-pointer">
            For more information click here!
          </p>
        </p>
      </div>
      <Suspense fallback={'loading'}>
        <DynamicSkillsCanvas />
      </Suspense>
    </div >
  );
}

export default Home;
