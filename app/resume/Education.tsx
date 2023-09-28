import Link from "next/link";
import { LuExternalLink, LuLocateFixed } from "react-icons/lu";

export default function Education() {
  return (
    <section className="flex min-h-screen flex-col" section-name="education">
      <h2 className="mb-5 text-4xl font-semibold tracking-wider ">Education</h2>

      <div className="flex w-full max-w-6xl flex-grow flex-col justify-center pr-3 text-base sm:text-lg">
        {/* Northeastern University */}
        <div className="flex flex-row flex-wrap justify-between text-xl">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold">
              Master of Professional Studies
            </h3>

            <div className="mt-2 flex flex-row items-center text-xl font-semibold">
              <span>
                Informatics in Cloud Computing Application and Management
              </span>
              <Link
                className="education-section--icon ml-3 inline-block"
                href="https://cps.northeastern.edu/program/master-of-professional-studies-in-informatics-toronto/"
                target="_blank"
              >
                <LuExternalLink size={24} />
              </Link>
            </div>

            <div className="mt-2 flex flex-row items-center italic">
              <span>Northeastern University - Toronto, Ontario</span>
              <Link
                className="education-section--icon ml-3 inline-block"
                href="https://maps.app.goo.gl/VxYY3xX2kPRWuzN48"
                target="_blank"
              >
                <LuLocateFixed size={24} />
              </Link>
            </div>
          </div>

          <span className="mt-2 pr-5 uppercase">
            September 2022 - March 2023
          </span>
        </div>

        {/* Purdue University */}
        <div className="mt-10 flex flex-row flex-wrap justify-between text-xl">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold">Bachelor of Science</h3>

            <div className="mt-2 flex flex-row items-center text-xl font-semibold">
              <span>Computer Science in Software Engineering Track</span>
              <Link
                className="education-section--icon ml-3 inline-block"
                href="https://www.cs.purdue.edu/undergraduate/curriculum/bachelor.html"
                target="_blank"
              >
                <LuExternalLink size={24} />
              </Link>
            </div>

            <div className="mt-2 flex flex-row items-center italic">
              <span>Purdue University - West Lafayette, IN, USA</span>
              <Link
                className="education-section--icon ml-3 inline-block"
                href="https://maps.app.goo.gl/t2K7TUbuEYRmRDDc9"
                target="_blank"
              >
                <LuLocateFixed size={24} />
              </Link>
            </div>
          </div>

          <span className="mt-2 pr-5 uppercase">August 2014 - May 2018</span>
        </div>
      </div>
    </section>
  );
}
