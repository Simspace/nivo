import { BasicTooltip } from '@simspace/nivo-tooltip'
import { TooltipProps } from './types'

export const LayerTooltip = ({ layer }: TooltipProps) => (
    <BasicTooltip id={layer.label} enableChip={true} color={layer.color} />
)
