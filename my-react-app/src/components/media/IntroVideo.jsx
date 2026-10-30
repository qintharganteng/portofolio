import { useRef, useState } from 'react';
import { profile } from '../../data/profile';
import './IntroVideo.css';

export default function IntroVideo() {
  const videoRef = useRef(null);
  const [withSound, setWithSound] = useState(false);
  const [playing, setPlaying] = useState(true);
  const videoAvailable = Boolean(profile.introVideoSrc);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = withSound;
    setWithSound(!withSound);
    if (video.paused) {
      try { await video.play(); setPlaying(true); } catch { setPlaying(false); }
    }
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try { await video.play(); setPlaying(true); } catch { setPlaying(false); }
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="intro-media" aria-label="Portrait introduction video, vertical aspect ratio">
      <div className={`video-frame ${videoAvailable ? 'has-video' : 'is-placeholder'}`}>
        {videoAvailable ? (
          <>
            <video
              ref={videoRef}
              className="intro-video"
              src={profile.introVideoSrc}
              poster={profile.introVideoPoster || undefined}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
            >
              Your browser does not support HTML video.
            </video>
            <div className="video-controls">
              <button type="button" onClick={togglePlayback} aria-label={playing ? 'Pause introduction video' : 'Play introduction video'}>
                {playing ? 'Pause' : 'Play'}
              </button>
              <button type="button" onClick={toggleSound} aria-label={withSound ? 'Mute video' : 'Unmute video'}>
                {withSound ? 'Sound on' : 'Sound off'}
              </button>
            </div>
          </>
        ) : (
          <div className="video-poster" role="img" aria-label="Reserved space for a personal 9 by 16 portrait video">
            <div className="poster-top"><span>Q. / INTRODUCTION</span><span>PORTRAIT</span></div>
            <div className="poster-orbit orbit-one" aria-hidden="true" />
            <div className="poster-orbit orbit-two" aria-hidden="true" />
            <div className="poster-center">
              <span className="poster-small">PERSONAL FILM</span>
              <strong>More than<br />a résumé.</strong>
            </div>
            <div className="poster-bottom"><span>YOUR VIDEO GOES HERE</span><span>9 : 16</span></div>
          </div>
        )}
      </div>
      <div className="intro-media-caption flex items-center justify-between">
        
      </div>
    </div>
  );
}
