import About from "@/components/about";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
// import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 sm:px-6 md:px-8 w-full overflow-hidden">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
