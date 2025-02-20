// GuideComponent.jsx
import { useRef, useEffect } from "react";
import video from "../assets/webvideo.mp4";
import Container from "./Container";
import TextContent from "./TextContent";
import { useInView } from "../util/useInview";

export default function GuideComponent() {
  const videoRef = useRef(null);
  const [containerRef, isInView] = useInView({
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch((error) => {
          console.log("Autoplay failed:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section className="flex flex-col" ref={containerRef}>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        src={video}
        className="w-full "
      ></video>
      <Container className="mx-5 md:mx-[3.8525rem]  bg-white py-[3.125rem]  md:py-[6.25rem] border-[1px] border-[#E2E2E2]  rounded-[2.5rem]  my-[7.5rem]">
        <TextContent
          className="text-center"
          headline="التوافق مع رؤيتك"
          title="رحلتك العقارية"
          paragraph="نحن ملتزمون بجعل تجربتك العقارية استثنائية. يعمل فريق الخبراء لدينا بلا كلل للتوافق مع رؤيتك وضمان تجربة سلسة، سواء كنت مالكًا للعقار أو مستأجرًا أو مستثمرًا."
        />
      </Container>
    </section>
  );
}
