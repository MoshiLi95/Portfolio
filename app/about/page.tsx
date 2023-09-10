import TypingHeader from "./TypingHeader";
import Image from "next/image";
import "./style.css";

export default function About() {
  return (
    <main className="flex min-h-screen justify-center pl-16 pt-20">
      <aside className="absolute left-0 top-0 h-full w-16 bg-white dark:bg-zinc-800">
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
          <div className="float-left mb-12 mr-12 flex  w-full flex-col items-center justify-center md:w-auto">
            <Image
              className="max-w-full animate-fade-down rounded-full"
              width={250}
              height={250}
              src={"/dragonball.png"}
              alt=""
            />
            <div className="mt-3 flex flex-col items-center justify-center">
              <span className="font-semibold">Moshi Li</span>
              <span className="italic">Toronto, Canada</span>
            </div>
          </div>
          <p className="text-xl">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting`}
            <br /> <br />
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            PageMaker including versions of Lorem Ipsum`}
            <br /> <br />
            {` Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a`}
          </p>
        </div>
      </div>
    </main>
  );
}
