// This is your entry file! Refer to it when you render:
// npx remotion render <entry-file> HelloWorld out/video.mp4

import {registerRoot} from 'remotion';
import {RemotionRoot} from './Root';
require('poe-item-renderer');

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'poe-item-popup': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

registerRoot(RemotionRoot);
