import { GithubIcon, LinkedInIcon } from "../(Utilities)/Icons";

import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col flex-wrap justify-between bg-blue-700 px-12 py-36 text-xl text-white dark:bg-green-700 md:flex-row">
        <div className="w-full pt-24 md:w-6/12">
          <h2 className="mb-6 text-5xl font-bold">Contact</h2>
          <div className="mb-4 flex flex-row gap-2">
            <div
              className={
                "inline-block cursor-pointer rounded-full bg-white p-3 focus:rounded-full"
              }
            >
              <GithubIcon size="text-4xl" svgClassName="fill-black" />
            </div>
            <div
              className={
                "inline-block cursor-pointer rounded-full bg-white p-3 focus:rounded-full"
              }
            >
              <LinkedInIcon size="text-4xl" svgClassName="fill-sky-800" />
            </div>
          </div>
          <div className="mb-4">
            <h6 className="font-bold">Email:</h6>
            <p className="text-xl">li.moshi@outlook.com</p>
          </div>
          <div className="mb-4">
            <h6 className="font-bold">Address:</h6>
            <p className="tracking-wider">
              Toronto, ON
              <br />
              Canada
              <br />
            </p>
          </div>
        </div>

        <iframe
          className="rounded-sm border-0 pt-5 md:pt-24"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.5728962702!2d-79.51814148730774!3d43.71815566250607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1622089491873!5m2!1sen!2sca"
          loading="lazy"
          title="Address pinned on map"
        ></iframe>
      </div>
    </footer>
  );
}
