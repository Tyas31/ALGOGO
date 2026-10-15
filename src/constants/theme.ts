/**
 * Ngulik! design tokens, mirrored from the design system's tokens.json.
 * Single light theme: the source design has no dark mode yet.
 */

import type { TextStyle } from 'react-native';

export const Colors = {
  /** Latar semua layar (krem hangat). */
  surface: '#fdfbf6',
  /** Radio, lingkaran nomor, tombol pil. Bukan latar layar. */
  surfaceRaised: '#ffffff',
  /** Track progress bar, garis pemisah. */
  line: '#d9d9d9',
  /** Warna merek, dipakai sebagai isi blok. Teks putih di atasnya hanya 3.83:1. */
  primary: '#9a67e8',
  /** Muka node level aktif. */
  primaryFace: '#aa76f7',
  /** Sisi bawah node aktif; ungu gelap untuk teks kecil di atas putih (6.36:1). */
  primaryDepth: '#7431e4',
  /** Teks dan ikon di atas `primary`, `danger`, `primaryDepth`. */
  onPrimary: '#ffffff',
  ink: '#000000',
  /** Teks sekunder di atas `surface` (6.08:1). */
  inkSoft: '#606060',
  /** Placeholder kosong. 1.65:1 — jangan untuk info wajib. */
  inkFaint: '#c6c6c6',
  /** Kemajuan dan jawaban benar. Teks di atasnya `ink`. */
  success: '#8feb67',
  /** Jawaban salah. Teks di atasnya `onPrimary`. */
  danger: '#ca2b1e',
  locked: '#b3b3b3',
  lockedFace: '#c5c5c5',
  lockedDepth: '#606060',
  /** Tombol utama nonaktif. */
  disabled: '#bcbcbc',
  accentYellow: '#f2d376',
  accentBrown: '#994d21',
  mascotOrange: '#f4bd79',
  mascotCream: '#fcf2dd',
  mascotOutline: '#542b17',
  illustrationCream: '#f9f2e1',
} as const;

export type ColorName = keyof typeof Colors;

/** Outfit (Google Fonts) stands in for Gilroy. Loaded in the root layout. */
export const Fonts = {
  regular: 'Outfit_400Regular',
  medium: 'Outfit_500Medium',
  semibold: 'Outfit_600SemiBold',
} as const;

export const Typography = {
  /** Judul setiap layar materi dan kuis. */
  display: { fontFamily: Fonts.semibold, fontSize: 20, lineHeight: 26 },
  /** Nama pengguna, angka profil, judul LevelBanner. */
  headline: { fontFamily: Fonts.semibold, fontSize: 16, lineHeight: 20 },
  /** Paragraf materi dan pertanyaan kuis. */
  body: { fontFamily: Fonts.regular, fontSize: 14, lineHeight: 18 },
  /** Kalimat pembuka yang ditebalkan, judul ConceptItem. */
  bodyStrong: { fontFamily: Fonts.semibold, fontSize: 14, lineHeight: 18 },
  /** Opsi jawaban, label statistik. */
  label: { fontFamily: Fonts.medium, fontSize: 12, lineHeight: 16 },
  /** `label` dengan bobot 400: label konteks, handle profil, judul seksi. */
  labelRegular: { fontFamily: Fonts.regular, fontSize: 12, lineHeight: 16 },
  /** Penjelasan FeedbackBanner, deskripsi LessonPopover. */
  caption: { fontFamily: Fonts.regular, fontSize: 10, lineHeight: 13 },
  /** Label tombol utama. */
  button: { fontFamily: Fonts.medium, fontSize: 18, lineHeight: 24 },
  /** Tombol pil kecil, huruf kapital. */
  buttonSm: { fontFamily: Fonts.semibold, fontSize: 11, lineHeight: 14, letterSpacing: 0.44 },
} satisfies Record<string, TextStyle>;

export type TypographyVariant = keyof typeof Typography;

export const Spacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  /** Gutter kiri-kanan layar. */
  5: 20,
  6: 24,
  8: 32,
} as const;

export const Radius = {
  sm: 4,
  md: 14,
  full: 9999,
} as const;

export const Shadows = {
  /** Bayangan tegas di bawah elemen yang bisa ditekan. */
  raised: '0 3px 2px rgba(0, 0, 0, 0.3)',
  nodeActive: `0 4px 0 ${Colors.primaryDepth}`,
  nodeLocked: `0 4px 0 ${Colors.lockedDepth}`,
} as const;

export const Sizes = {
  frameWidth: 360,
  buttonWidth: 260,
  buttonHeight: 44,
  optionHeight: 60,
  progressHeight: 16,
  levelNode: 60,
  navIcon: 40,
  navTile: 48,
} as const;
