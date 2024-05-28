import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNode,
    FaDocker,
    FaAws,
    FaPython
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiMysql,
    SiFirebase,
    SiTensorflow
} from "react-icons/si";

import {
    BiLogoMongodb,
    BiLogoPostgresql
} from "react-icons/bi";

interface InfoItem {
    title: string;
    stage?: string;
    icons?: JSX.Element[];
}

export const aboutData: { title: string, info: InfoItem[] }[] = [
    {
        title: "skills",
        info: [
            {
                title: "Front-end -",
                icons: [
                    <FaHtml5 key="html5" />,
                    <FaCss3 key="css3" />,
                    <FaJs key="js" />,
                    <FaReact key="react" />,
                    <SiNextdotjs key="nextjs" />
                ]
            },
            {
                title: "Back-end -",
                icons: [
                    <FaNode key="node" />,
                    <FaDocker key="docker" />,
                    <FaAws key="aws" />
                ]
            },
            {
                title: "Databases -",
                icons: [
                    <BiLogoPostgresql key="postgresql" />,
                    <SiMysql key="mysql" />,
                    <BiLogoMongodb key="mongodb" />,
                    <SiFirebase key="firebase" />
                ]
            },
            {
                title: "Studying now -",
                icons: [
                    <FaPython key="python" />,
                    <SiTensorflow key="tensorflow" />
                ]
            }
        ]
    },
    {
        title: "credentials",
        info: [
            {
                title: "Analysis and Systems Development - Estácio de Sá University",
                stage: "2020 to June 2022.",
            },
            {
                title: "Modern web course with javascript 2021, taught by instructor Leonardo Leitão - Udemy",
                stage: "2021 to September 2021.",
            },
            {
                title: "React.JS course taught by instructor Diego Schell Fernandes - Rocketseat",
                stage: "2022 to July 2022.",
            },
            {
                title: "Node.JS course, taught by instructor Daniele Leão - Rocketseat",
                stage: "2022 to January 2023.",
            },
            {
                title: "Arduino: from scratch to game taught by instructor Rodrigo Gunisalvo - Alura",
                stage: "2024 to March 2024.",
            },
            {
                title: "Introduction to computer science taught by instructors David J. Malan, Doug Llyod and Brian Yu - Harvard University",
                stage: "2024 to March 2024.",
            }
        ]
    },
    {
        title: "experience",
        info: [
            {
                title: "Freelancer, Full Stack Developer",
                stage: "August 2020 – Present.",
            }
        ]
    },
    {
        title: "I love",
        info: [
            {
                title: "Curious about New Technologies: In addition to software development, I am always aware of the latest innovations in technology and gadgets 🚀"
            },
            {
                title: "Video Editing Lover: Develop video editing and production skills as a creative hobby, exploring visual narratives and editing techniques 😄"
            },
            {
                title: "Sports Enthusiast: I practice sports such as running and soccer to maintain balance between body and mind 🍃"
            },
            {
                title: `Boosting Creativity with Technology: I believe that AI doesn't replace, 
                but rather enhances the human capacity to create. I strive to craft artworks that inspire and 
                challenge viewers, proving that creativity knows no bounds 🤖`
            }
        ]
    }
]