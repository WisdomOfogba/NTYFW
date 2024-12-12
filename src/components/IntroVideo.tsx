import introVideo from "../assets/intro-video.mp4";

const IntroVideo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-10">
          Program Highlights
        </h2>
        <div className="max-w-[600px] p-4 mx-auto">
          <video className="w-full rounded-md" src={introVideo} controls></video>
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;
