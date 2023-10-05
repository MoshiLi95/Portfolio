import { TypingHeader } from "../../components/About";
import Image from "next/image";
import "./style.css";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <main className="relative flex min-h-screen justify-center bg-white pl-16 pt-20 dark:bg-black">
      <aside className="l absolute bottom-0 left-0 top-0 h-full w-16 border-r-[6px] border-black bg-white dark:border-white dark:bg-black">
        <h1 className="aside--header">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>M</span>
          <span>e</span>
        </h1>
      </aside>
      <div className="flex w-full flex-col justify-center px-5 py-16 md:w-6/12 md:py-0">
        <TypingHeader />
        <div className="mt-10">
          <div className="float-left mb-8 mr-12 flex  w-full flex-col items-center justify-center md:w-auto">
            <Image
              className="max-w-full animate-fade-down rounded-full"
              width={250}
              height={250}
              src={"/asset/selfie.png"}
              alt="selfie"
            />
            <div className="mt-3 flex flex-col items-center justify-center">
              <span className="font-semibold">Moshi Li</span>
            </div>
          </div>
          <p className="text-xl">
            {`Hi there, I'm Moshi, and I'm enthusiastic about crafting a wide array of creations. 
            My primary focus lies in front-end development, although I'm no stranger to tackling 
            back-end tasks when the situation calls for it.`}
            <br /> <br />
            {`As a software developer, my true passion lies in transforming concepts into reality, 
            all while prioritizing exceptional user-friendliness, innovative aesthetics, and a generous 
            dose of finesse. My goal is to provide users with seamless and delightful experiences.`}
            <br /> <br />
            {`The world of software development is in constant flux, evolving rapidly, and it can be 
            quite the challenge to stay abreast of the latest trends. Nevertheless, armed with my skills 
            and unwavering enthusiasm, I'm prepared to take on this lifelong journey of learning, excited 
            to discover where it will lead me.`}
          </p>
        </div>
      </div>
    </main>
  );
}
