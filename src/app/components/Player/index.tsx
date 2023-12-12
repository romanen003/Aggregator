'use client';

import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import Plyr from 'plyr';

import 'plyr/dist/plyr.css';
import styles from './styles.module.css';

const defaultOptions = {
  autoplay: true,
  hideControls: true,
  displayDuration: false,
  muted: true,
};

type VideoPlayerPropTypes = {
  src: string;
}

function VideoPlayer({ src }:VideoPlayerPropTypes) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // This will run in safari, where HLS is supported natively
      video.src = src;
    } else if (Hls.isSupported()) {
      // This will run in all other modern browsers

      const hls = new Hls();

      hls.loadSource(src);
      new Plyr(video, defaultOptions);

      hls.attachMedia(video);
    } else {
      console.error(
        'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API',
      );
    }
  }, [src, videoRef]);

  return (
    <video className={styles.Player} data-displaymaxtap ref={videoRef} />
  );
}

export default VideoPlayer;
