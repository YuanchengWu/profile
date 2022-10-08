import * as icons from '../../svgs'

export type Skill = {
  name: keyof typeof icons
  level: SkillLevel
  /**
   * If provided, value of `label` will be rendered instead of `name`
   */
  label?: string
}

export enum SkillLevel {
  Low = 1,
  Medium,
  High,
}

export const progLangList: Skill[] = [
  { name: 'TypeScript', level: SkillLevel.High },
  { name: 'CSS', level: SkillLevel.High },
  { name: 'HTML', level: SkillLevel.High },
  { name: 'Java', level: SkillLevel.Medium },
  { name: 'Python', level: SkillLevel.Low },
]

export const libFmwList: Skill[] = [
  { name: 'React', level: SkillLevel.High },
  { name: 'Redux', level: SkillLevel.High },
  { name: 'ReactSpring', level: SkillLevel.High, label: 'React-Spring' },
  { name: 'Storybook', level: SkillLevel.High },
]
