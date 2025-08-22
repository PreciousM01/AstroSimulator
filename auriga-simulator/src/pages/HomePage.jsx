import BackgroundVideo from "../components/shared/BackgroundVideo";
import Welcome from "../components/home/welcome";
import Features from "../components/home/features";
import HowToStart from "../components/home/HowToStart";
import ExampleVideos from "../components/home/exampleVideos";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      
      <div className="relative z-10 overflow-y-scroll h-[calc(100vh-80px)] snap-y snap-mandatory">
        <div className="w-[70%] ml-8">
          <section className="h-[calc(100vh-80px)] snap-start flex items-center">
            <div className="bg-black/80 backdrop-blur-sm text-white p-8 rounded-xl w-full max-w-4xl shadow-2xl">
              <Welcome />
            </div>
          </section>

          <section className="h-[calc(100vh-80px)] snap-start flex items-center">
            <div className="bg-black/80 backdrop-blur-sm text-white p-8 rounded-xl w-full max-w-4xl shadow-2xl">
              <Features />
            </div>
          </section>

          <section className="h-[calc(100vh-80px)] snap-start flex items-center">
            <div className="bg-black/80 backdrop-blur-sm text-white p-8 rounded-xl w-full max-w-4xl shadow-2xl">
              <HowToStart />
            </div>
          </section>

          <section className="h-[calc(100vh-80px)] snap-start flex items-center">
            <div className="bg-black/80 backdrop-blur-sm text-white p-8 rounded-xl w-full max-w-4xl shadow-2xl">
              <ExampleVideos />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
