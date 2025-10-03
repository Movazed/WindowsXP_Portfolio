import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import gallery from "../../assets/folder_image.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import users from "../../assets/users.png";
import butterfly from "../../assets/butterfly.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import userprofile from "../../assets/userprofile.jpg";
import userprofile2 from "../../assets/userprofile2.jpg";
import ebc1 from "../../assets/ebc1.webp";
import ebc2 from "../../assets/ebc2.webp";
import cf from "../../assets/cf.png";
import cc from "../../assets/cc.png";
import lc from "../../assets/lc.png";

const INTRO = `Hi, I'm Arya Putatunda, a driven and innovative software engineer based in India. I am currently a Computer Science student at SRM IST, Ghaziabad, and I am passionate about building next-generation AI platforms and solving complex algorithmic challenges.`;

const WHYSITE = `My software development journey was forged in the competitive programming arena. The main reason I created this site is to reflect that journey—from the structured logic of competitive coding to the creative and expansive world of AI development. My beginnings were on platforms like Codeforces and LeetCode, where efficiency and optimal solutions are paramount. This space is a nod to that foundation, built to be direct and functional, while also showcasing the full-stack and AI-powered applications I now focus on building. It's designed to feel like you're looking at my digital workspace.`;

const INTERESTS = `Other than my interest in developing AI applications, I am deeply passionate about competitive programming. It's a mental sport that constantly challenges me to devise elegant solutions to complex puzzles under tight deadlines. This isn't just a hobby; it’s a core part of my identity as a problem-solver. Achieving the rank of Candidate Master on Codeforces and 6-star on CodeChef has been a rewarding experience, pushing me to compete with and learn from some of the best programmers in the world.`;

const INTERESTS2 = `This love for analytical problem-solving naturally guided me toward the field of Artificial Intelligence. For me, building an AI model or a RAG pipeline is like solving a multi-layered algorithmic puzzle. I find immense satisfaction in architecting systems that can learn, generate, and interact intelligently. Leading AI/ML initiatives at HackHound and the Google Developer Student Club has allowed me to share this passion, mentoring peers on how to integrate LLMs and deep learning concepts into their own full-stack projects.`;

const INTERESTS3 = `I am always exploring the latest advancements in technology, especially in generative AI and large language models. My projects, from an AI-powered learning platform to a generative tattoo design app, are a testament to this curiosity. My true passion lies in bridging the gap between theoretical algorithms and practical, enterprise-scale AI solutions. Whether it’s spending a weekend competing in a Codeforces contest or fine-tuning an LLM, I am constantly driven by the desire to learn, build, and innovate.
`;

interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };

  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };

  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);

  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Welcome To Arya&apos;s portfolio website!
          </h3>
          <p className={styles.subtitle}>
            Learn more about me by clicking any of the icons below to get
            started!
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"About Me"}
                tooltip="Who am I?"
                onClick={handleSwitchView}
              />
              <WelcomeIcon
                img={github}
                text={"My GitHub Profile"}
                tooltip="My Brain Dump"
                onClick={() => {
                  window.open(
                    "https://github.com/Movazed",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={linkedin}
                text={"My Linkedin"}
                tooltip="Connect with me!"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/arya-putatunda-002b40261/",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={pdf}
                text={"My Resume"}
                tooltip="My Curriculum Vitae"
                onClick={() => {
                  window.open("./Resume.pdf");
                }}
              />
              {/* CodeChef moved to left */}
              <WelcomeIcon
                img={cc}
                text={"My CodeChef Profile"}
                tooltip="My CodeChef Profile"
                onClick={() => {
                  window.open(
                    "https://www.codechef.com/users/movazed5",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
            </div>

            <div className={styles.rightpanel}>
              <WelcomeIcon
                img={cmd}
                text={"My Work"}
                tooltip="Interesting projects I have done"
                onClick={() => handleRunApp(2)}
              />
              <WelcomeIcon
                img={outlook}
                text={"Send Me An Email"}
                tooltip="Reach out to me!"
                onClick={() => handleRunApp(1)}
              />
              <WelcomeIcon
                img={gallery}
                text={"My Photography Collection"}
                tooltip="Click to view!"
                onClick={() => handleRunApp(4)}
              />
              <WelcomeIcon
                img={cf}
                text={"My Codeforces Profile"}
                tooltip="My Codeforces Profile"
                onClick={() => {
                  window.open(
                    "https://codeforces.com/profile/Movazed",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={lc}
                text={"My LeetCode Profile"}
                tooltip="My LeetCode Profile"
                onClick={() => {
                  window.open(
                    "https://leetcode.com/u/Movazed/",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>About Me</h3>
          <p className={styles.subtitle}></p>
          <div className={styles.content}>
            <div className={styles.pic_col}>
              <Image
                alt="profile_pic"
                src={userprofile.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userprofile2.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={ebc1.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={ebc2.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
            </div>
            <div className={styles.text_col}>
              <p className={styles.subtitle}>{INTRO}</p>
              <h3 className={styles.subtitle_header}>
                Why a personal website like this?
              </h3>
              <p className={styles.subtitle}>{WHYSITE}</p>
              <h3 className={styles.subtitle_header}>
                What are your interests?
              </h3>
              <p className={styles.subtitle}>{INTERESTS}</p>
              <br />
              <p className={styles.subtitle}>{INTERESTS2}</p>
              <br />
              <p className={styles.subtitle}>{INTERESTS3}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
