import TypingHeader from "./TypingHeader";
import Image from "next/image";
import "./style.css";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <main className="flex min-h-screen justify-center pl-16 pt-20">
      <aside className="absolute left-0 top-0 h-full w-16 bg-white dark:bg-black">
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
            {`Hi there, my name is Moshi and I like to build all kinds of things. 
            I specialize in front end development and have completed many back end 
            tasks as well when needed.`}
            <br /> <br />
            {`My passion as a front end developer is to bring ideas to reality with 
            excellent usability, creative aesthetics and a lot of polish – all in 
            the name of offering fluid and pleasing experiences for users.`}
            <br /> <br />
            {`Software Development is a rapidly growing field and it is challenging to keep up sometimes. 
            However, with my skills and passion, I am up to the task and excited to see where this life-long 
            learning journey will take me.`}
          </p>
        </div>
      </div>
    </main>
  );
}
