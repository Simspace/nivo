import { PropertyAccessor } from '@simspace/nivo-core'
import { InheritedColorConfig } from '@simspace/nivo-colors'
import { ArcLinkLabelComponent } from './ArcLinkLabelsLayer'
import { DatumWithArcAndColor } from '../types'

export interface ArcLinkLabelsProps<Datum extends DatumWithArcAndColor> {
    arcLinkLabel: PropertyAccessor<Datum, string>
    arcLinkLabelsSkipAngle: number
    arcLinkLabelsTextOffset: number
    arcLinkLabelsTextColor: InheritedColorConfig<Datum>
    arcLinkLabelsOffset: number
    arcLinkLabelsDiagonalLength: number
    arcLinkLabelsStraightLength: number
    arcLinkLabelsThickness: number
    arcLinkLabelsColor: InheritedColorConfig<Datum>
    component: ArcLinkLabelComponent<Datum>
}
