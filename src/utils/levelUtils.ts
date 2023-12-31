import {
  PointsDificult,
  TimeDificult,
  Option,
  ColorsDificult,
} from '../interfaces'
import { COLORS, COLORSHARD, COLORSMEDIUM } from './colors'

export const colorsDifult: ColorsDificult = {
  normal: COLORS,
  medium: COLORSMEDIUM,
  hard: COLORSHARD,
}

export const pointsDificult: PointsDificult = { normal: 1, medium: 2, hard: 2 }

export const timeDificult: TimeDificult = {
  normal: 20,
  medium: 18,
  hard: 16,
}

export const options: Option[] = [
  { value: 'normal', label: 'Normal' },
  { value: 'medium', label: 'Medio' },
  { value: 'hard', label: 'Dificil' },
]
