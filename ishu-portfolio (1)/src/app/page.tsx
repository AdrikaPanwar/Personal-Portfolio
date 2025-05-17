import About from "@/components/About";
import SunflowerCursor from "@/components/Cursor";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GitHubStats from "@/components/GithubStat";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <GitHubStats />
      </main>
      <Footer />
      <SunflowerCursor />
    </div>
  );
}
