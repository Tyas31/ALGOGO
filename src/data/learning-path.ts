import type { LevelCatalogEntry } from './level-catalog';

export type TrailNode = {
  id: number;
  levelId: number;
  title: string;
  subtitle: string;
  xp: number;
  offsetX: number;
  mascotLeftKey?: 'wave' | 'happy';
  mascotRightKey?: 'laptop' | 'think';
};

export type TrailSection = {
  id: string;
  dividerTitle?: string;
  nodes: TrailNode[];
};

// A visible node always represents exactly one documented level and one question set.
export function buildLearningPath(levels: readonly LevelCatalogEntry[]): TrailSection[] {
  const sections: TrailSection[] = [];
  const offsets = [0, -48, -64, -24, 36, 64, 36, 0];
  for (const [index, level] of levels.entries()) {
    let section = sections.find((item) => item.id === `unit-${level.unitNumber}`);
    if (!section) {
      section = { id: `unit-${level.unitNumber}`, dividerTitle: level.unit, nodes: [] };
      sections.push(section);
    }
    section.nodes.push({
      id: level.id,
      levelId: level.id,
      title: `Level ${level.id}: ${level.title}`,
      subtitle: level.subtitle,
      xp: level.xp,
      offsetX: offsets[index % offsets.length],
      ...(index % 3 === 0 ? { mascotRightKey: 'laptop' as const } : index % 3 === 1 ? { mascotLeftKey: 'wave' as const } : {}),
    });
  }
  return sections;
}
