"use client";
import ProjectsCarousel from "./(ProjectCarousel)";

export default function Projects() {
  return (
    <section className="flex min-h-screen flex-col " section-name="projects">
      <h2 className="my-10 text-4xl font-semibold tracking-wider text-blue-600 dark:text-green-400">
        Projects
      </h2>
      <div className="flex flex-grow flex-row items-center">
        <ProjectsCarousel />
      </div>
    </section>
  );
}
