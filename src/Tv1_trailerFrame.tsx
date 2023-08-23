interface TrailerFrameProps {
  src: string;
}

export const Tv2_trailerFrame = ({ src = "https://www.youtube.com/embed/dDK_u-lx1c0" }: TrailerFrameProps) => {
  return (
    <>
      <iframe
        className=" aspect-video"
        width="100%"
        height="auto"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};
