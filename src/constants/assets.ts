/**
 * SVG assets from the Ngulik! design system, with the aspect ratio of each viewBox
 * so images can be sized from a single dimension.
 */

export type Art = { source: number; ratio: number };

const art = (source: number, ratio: number): Art => ({ source, ratio });

export const Mascots = {
  /** Badan penuh, melambai: peta belajar, LevelBanner. */
  wave: art(require('@/assets/ngulik/maskot/mascot-wave.svg'), 202 / 242),
  /** Bertanya: di atas soal dan Callout pertanyaan. */
  think: art(require('@/assets/ngulik/maskot/mascot-think.svg'), 196 / 204),
  /** Menjelaskan konsep pemrograman. */
  laptop: art(require('@/assets/ngulik/maskot/mascot-laptop.svg'), 172 / 214),
  /** Senang setelah contoh selesai. */
  happy: art(require('@/assets/ngulik/maskot/mascot-happy.svg'), 198 / 204),
  /** Layar materi selesai. */
  celebrate: art(require('@/assets/ngulik/maskot/mascot-celebrate.svg'), 228 / 212),
  correct: art(require('@/assets/ngulik/maskot/mascot-correct.svg'), 206 / 204),
  wrong: art(require('@/assets/ngulik/maskot/mascot-wrong.svg'), 172 / 204),
  /** Avatar profil. */
  head: art(require('@/assets/ngulik/maskot/mascot-head.svg'), 164 / 144),
};

export const Icons = {
  ordered: art(require('@/assets/ngulik/ikon/icon-ordered.svg'), 4 / 3),
  clear: art(require('@/assets/ngulik/ikon/icon-clear.svg'), 4 / 3),
  goal: art(require('@/assets/ngulik/ikon/icon-goal.svg'), 4 / 3),
  finite: art(require('@/assets/ngulik/ikon/icon-finite.svg'), 4 / 3),
  target: art(require('@/assets/ngulik/ikon/icon-target.svg'), 1),
  steps: art(require('@/assets/ngulik/ikon/icon-steps.svg'), 1),
  result: art(require('@/assets/ngulik/ikon/icon-result.svg'), 1),
  streak: art(require('@/assets/ngulik/ikon/icon-streak.svg'), 1),
  xp: art(require('@/assets/ngulik/ikon/icon-xp.svg'), 1),
  rank: art(require('@/assets/ngulik/ikon/icon-rank.svg'), 1),
};

export const NavIcons = {
  home: art(require('@/assets/ngulik/navigasi/nav-home.svg'), 1),
  map: art(require('@/assets/ngulik/navigasi/nav-map.svg'), 1),
  rank: art(require('@/assets/ngulik/navigasi/nav-rank.svg'), 1),
  profile: art(require('@/assets/ngulik/navigasi/nav-profile.svg'), 1),
};

export const Illustrations = {
  miInstan: art(require('@/assets/ngulik/ilustrasi/illust-mi-instan.svg'), 1100 / 400),
  cokelat: art(require('@/assets/ngulik/ilustrasi/illust-cokelat.svg'), 1100 / 400),
};
