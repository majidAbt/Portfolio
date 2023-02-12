import useSoundCloud from "../../hooks/useSoundCloud"

export default function SoundClouadIframe() {
    const { iframeRef } = useSoundCloud()

  return (
    <iframe ref={iframeRef} id="sound-cloud-player" style={{
        border: 'none', height: 120, width: 400, position: "fixed",
        right: 16,
        bottom: 16
      }} allow="autoplay"
        src={"https://w.soundcloud.com/player/?url=https://soundcloud.com/aboveandbeyond/sets/we-are-all-we-need-1"}>
      </iframe>
  )
}
