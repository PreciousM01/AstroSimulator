import welcome from "../components/home/welcome";
import features from "../components/home/features";
import HowToStart from "../components/home/HowToStart";
import exampleVideos from "../components/home/exampleVideos";

export default function HomePage() {
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto space-y-16">
      <welcome />
      <features />
      <HowToStart />
      <exampleVideos />
    </div>
  );
}