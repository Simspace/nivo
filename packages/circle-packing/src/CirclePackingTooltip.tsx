import { BasicTooltip } from '@simspace/nivo-tooltip'
import { ComputedDatum } from './types'

export const CirclePackingTooltip = <RawDatum,>({
    id,
    formattedValue,
    color,
}: ComputedDatum<RawDatum>) => (
    <BasicTooltip id={id} value={formattedValue} enableChip={true} color={color} />
)
