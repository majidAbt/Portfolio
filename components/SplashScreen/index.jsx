import Image from "next/image";
import styles from "./Splash.module.css";
import { useEffect, useState } from "react";
import Logo from "./../../public/assets/images/majid-logo.png";
export default function SplashScreen() {
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setDisplay(val => val < 100 ? val + 5 : val)
        }, 200)
        return () => clearInterval()
    }, [display]);

    return (
        <div className={`w-full h-[100vh] bg-stone-800 text-center flex animate-in slide-in-from-left ${display < 100 ? styles.enterAnimate : styles.exitAnimate} `}>
            <div className="text-center p-5 m-auto w-full">
                <Image src={Logo} alt="logo" width="180" height="180" />
                <h5 className="text-white">Majid is Thinking ...</h5>
                <div className="w-[50%] m-auto p-2">

                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-primary dark:text-white">Loading</span>
                        <span className="text-sm font-medium text-primary dark:text-white">{display}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${display}% ` }} ></div>
                    </div>
                </div>
            </div>
        </div>
    )

}