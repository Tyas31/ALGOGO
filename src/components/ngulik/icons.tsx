import Svg, { Circle, Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

type IconProps = { size?: number; color?: string };

export function CloseIcon({ size = 24, color = Colors.inkSoft }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M4 4l16 16M20 4L4 20" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

export function CheckIcon({ size = 14, color = Colors.ink }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16">
      <Path
        d="M2 8.5l4 4 8-9"
        fill="none"
        stroke={color}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CrossIcon({ size = 14, color = Colors.onPrimary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16">
      <Path d="M3 3l10 10M13 3L3 13" fill="none" stroke={color} strokeWidth={2.4} strokeLinecap="round" />
    </Svg>
  );
}

export function StarIcon({ size = 26, color = Colors.onPrimary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.5L12 17.3 6.1 20.5l1.3-6.5L2.5 9.4l6.6-.8z"
        fill={color}
      />
    </Svg>
  );
}

export function GearIcon({ size = 24, color = Colors.onPrimary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8}>
      <Circle cx={12} cy={12} r={3.2} />
      <Path
        d="M12 2.8l1.6 2.3 2.7-.7.7 2.7 2.3 1.6-1.3 2.3 1.3 2.3-2.3 1.6-.7 2.7-2.7-.7L12 21.2l-1.6-2.3-2.7.7-.7-2.7-2.3-1.6L6 13 4.7 10.7 7 9.1l.7-2.7 2.7.7z"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function AddFriendIcon({ size = 20, color = Colors.onPrimary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={9} cy={8} r={4} fill={color} />
      <Path d="M2 20c0-4 3-6 7-6s7 2 7 6z" fill={color} />
      <Path d="M19 8v6M16 11h6" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}
