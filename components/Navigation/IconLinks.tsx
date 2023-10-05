import Link from "next/link";
import { LinkedInIcon, GithubIcon } from "../Utilities/Icons";

export default function IconLinks() {
  return (
    <>
      <Link
        href={"https://www.linkedin.com/in/moshi-li/"}
        target="_blank"
        title="LinkedIn"
      >
        <LinkedInIcon size="text-4xl" className="h-12 w-12" />
      </Link>

      <Link href={"https://github.com/Moshi-Li"} target="_blank" title="Github">
        <GithubIcon size="text-4xl" className="h-12 w-12" />
      </Link>
    </>
  );
}
