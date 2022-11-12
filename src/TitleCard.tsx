import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { bgcol, textcol } from "./colors";

const titleContainer: React.CSSProperties = {
  position: 'absolute',
	bottom: 120,
  left: 160,
	width: '100%'
}

const titleStyle: React.CSSProperties = {
  fontFamily: 'Comic Sans MS',
	fontWeight: 'bold',
	fontSize: 100,
};

export const TitleCard: React.FC<{title: String}> = ({title}) => {

  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const pause_length = fps*2;

  const opacity = interpolate(frame, [0, durationInFrames-pause_length], [0, 1], { extrapolateRight: 'clamp'});
  const pos = spring({fps, frame,});

  const item = {
    name: "Random Item",
    typeLine: "Type",
    baseType: "Base",
    identified: true,
    itemLevel: 100
  };

  return(
    <AbsoluteFill style={{...bgcol, ...textcol}}>
      <div style={{...titleContainer}}>
        <h1 style={{...titleStyle, opacity: opacity, marginLeft: pos*100}}>{title}</h1>
        <poe-item-popup>
          <script type="application/json">{JSON.stringify(item)}</script>
        </poe-item-popup>
      </div>
    </AbsoluteFill>
  );
};