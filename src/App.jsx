import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectCommandCenter from "./components/ProjectCommandCenter";
import AgentArchitectureExplorer from "./components/AgentArchitectureExplorer";
import AskAILab from "./components/AskAILab";
import AutomationFlow from "./components/AutomationFlow";
import ExperimentLab from "./components/ExperimentLab";
import Achievements from "./components/Achievements";
import TechStack from "./components/TechStack";
import FutureCapstone from "./components/FutureCapstone";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-void">
      <Nav />
      <main>
        <Hero />
        <About />
        <ProjectCommandCenter />
        <AgentArchitectureExplorer />
        <AskAILab />
        <AutomationFlow />
        <ExperimentLab />
        <Achievements />
        <TechStack />
        <FutureCapstone />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
