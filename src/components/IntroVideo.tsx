import introVideo from "../assets/intro-video.mp4";
import Button from "./Button";
import VideoPlayer from "./VideoPlayer";

const IntroVideo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-10">
          What PWealth has to say
        </h2>
        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <VideoPlayer src={introVideo} />
          <div className="flex flex-col">
            <p className="text-xl font-semibold text-blue-950 lg:text-center text-start">
              You get to learn, a lot of things about being wealthy at a young
              age, exciting classes, with live lessons, teachings from our Man
              of God and so much more, get the "Not too young for Wealth 3.0"
              now!
            </p>
            <Button
              form={true}
              label="Buy now"
              onClick={() => alert("Redirecting to purchase page...")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;
