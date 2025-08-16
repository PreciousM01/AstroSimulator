import Welcome from "../components/home/welcome";
import Features from "../components/home/features";
import HowToStart from "../components/home/HowToStart";
import ExampleVideos from "../components/home/exampleVideos";

export default function HomePage() {
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto space-y-16">
      <Welcome />
      <Features />
      <HowToStart />
      <ExampleVideos />
    </div>
  );
}