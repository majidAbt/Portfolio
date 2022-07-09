import {Spherical, Vector3 } from "three";
import Word from "./Word"
import { useMemo } from 'react'

export default function Cloud({radius = 20, count =20  }) {
    // const list = ["CSS","HTML","JS","Python","Tailwind CSS","Redux","Next js","Material UI","Ant Design","Webpack","SSR","React","Cypress","Jest","Story Book","Javascript","Functional Programming","Three Js","JS","Python","Tailwind CSS","Redux","Bootstrap","BS4"]
    const list = [
    {label: "CSS",phi: 8,theta:0.5},
    {label: "Git",phi: 20,theta:1},
    {label: "Linux",phi: 6,theta:17},
    {label: "NPM",phi: 25,theta:2},
    {label: "Data Structure",phi: 15,theta:12},
    {label: "Clean code",phi: 16,theta:11},
    {label: "SASS",phi: 6,theta:8},
    {label: "HTML",phi: 1.9,theta:2},
    {label: "Python",phi: 3,theta:3},
    {label: "Javascript",phi: 8,theta:4.5},
    {label: "Tailwind CSS",phi: 3,theta:5},
    {label: "Redux",phi: 4,theta:6},
    {label: "Next js",phi: 5,theta:6.5},
    {label: "Material UI",phi: 5,theta:8},
    {label: "Webpack",phi: 4,theta:1},
    {label: "Ant Design",phi: 2.6,theta:2.9},
    {label: "SSR",phi: 2,theta:3},
    {label: "Typescript",phi: 6,theta:4.8},
    {label: "React",phi: 8,theta:6},
    {label: "Cypress",phi: 7.8,theta:7.5},
    {label: "Jest",phi: 6,theta:7},
    {label: "Story Book",phi: 4.6,theta:6.5},
    {label: "Bootstrap",phi: 7,theta:8},
    {label: "BS4",phi: 5,theta:10},
    {label: "ES6",phi: 4,theta:3},
  ]

    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
        const temp = []
        const spherical = new Spherical()
        const phiSpan = (Math.PI  *2) / (count )
        const thetaSpan = (Math.PI * 2) / count

        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
        }
      
      list.forEach((element,index) => {
        temp.push([new Vector3().setFromSpherical(spherical.set(radius, phiSpan * element.phi, thetaSpan * element.theta + index)), element.label])
      });
        return temp
     
      }, [count, radius])
    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
  }