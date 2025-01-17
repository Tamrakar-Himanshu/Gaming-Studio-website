import { useEffect, useState } from "react";
import { Button } from "../../Components/ui/Button";

export function Sectoin1() {
  const [showVideo, setShowVideo] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    // Timer for video appearance after 1 second
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 1200);

    // Timer for text animation after 1.5 seconds
    const textTimer = setTimeout(() => {
      setAnimateText(true);
    }, 800);

    return () => {
      clearTimeout(videoTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section
      className="h-[170vh] relative flex items-center overflow-hidden"
      style={{
        backgroundImage: showVideo
          ? "none"
          : 'url("https://demo2.wpopal.com/gamico/wp-content/uploads/2024/01/h1-bgvideo.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover inset-0 z-[-1] transition-opacity duration-1000 ease-in-out"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative containers w-full z-10">
        <div
          className={`max-w-3x -mt-6 transition-all duration-1000 ease-in-out ${animateText ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          <h1 className="text-white font-header-anton leading-none">
            <span
              className={`block text-[200px] font-ext rabold transition-all duration-1000 delay-300 ease-in-out ${animateText ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
            >
              WE MAKE
            </span>
            <span
              className={`block text-[200px] -mt-3 transition-all duration-1000 delay-300 ease-in-out ${animateText ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
              style={{
                WebkitTextStroke: "2px white",
                color: "transparent",
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
              }}
            >
              <img
                src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h1_img-1.jpg"
                className="inline rounded-full -mt-4 mr-4"
                alt=""
              />
              GAMES
            </span>
          </h1>

          <p
            className={`mt-6 font-secondary-unbounded text-[18px] leading-7 text-white max-w-2xl transition-all duration-1000 delay-700 ease-in-out ${animateText ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
          >
            An award-winning Prague-based indie game studio pushing the
            boundaries of narrative and serious games
          </p>

          <div
            className={`transition-all duration-1000 delay-900 ease-in-out ${animateText ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <Button text={"our projects"} className={"mt-14"} href="#" />
          </div>
        </div>
      </div>
    </section>
  );
}