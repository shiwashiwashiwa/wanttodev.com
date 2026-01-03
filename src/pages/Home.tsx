import { HeroSection } from "../components/HeroSection";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Portfolio");

  return (
    <div className="h-full flex flex-col">
      <HeroSection />
    </div>
  );
};

export default Home;
