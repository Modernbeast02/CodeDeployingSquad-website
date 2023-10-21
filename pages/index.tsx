import { Footer, Navbar } from "../components";
import {
  About,
  Domains,
  FounderNote,
  ContriGuide,
  Hero,
  Projects,
  CodeOfConduct,
  Contributors,
} from "../sections";

const Home = () => (
  <div className=" bg-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Domains />
    </div>
    <div className="relative">
      <ContriGuide />
      <div className="gradient-04 z-0" />
      <CodeOfConduct />
    </div>
    <Contributors />
    <div className="relative">
      <Projects />
      <div className="gradient-04 z-0" />
      <FounderNote />
    </div>
    <Footer />
  </div>
);

export default Home;
