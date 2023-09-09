import Link from "next/link";
import { LinkedInIcon, GithubIcon } from "../(Utilities)/Icons";

export default function IconLinks() {
  return (
    <>
      <Link
        href={"https://www.linkedin.com/in/moshi-li/"}
        target="_blank"
        title="LinkedIn"
      >
        <LinkedInIcon
          size="text-4xl"
          svgClassName="group-hover:fill-sky-800 fill-gray-600 dark:fill-green-400"
        />
      </Link>

      <Link
        href={"https://github.com/Moshi-Li"}
        target="_blank"
        title="Github"
      >
        <GithubIcon
          size="text-4xl"
          svgClassName="group-hover:fill-black fill-gray-600 dark:fill-green-400 dark:group-hover:fill-white"
        />
      </Link>
    </>
  );
}
