import { memo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@simspace/nivo-core'
import { TableTooltip, Chip } from '@simspace/nivo-tooltip'

const ChordRibbonTooltip = memo(({ ribbon }) => {
    const theme = useTheme()

    return (
        <TableTooltip
            theme={theme}
            rows={[
                [
                    <Chip key="chip" color={ribbon.source.color} />,
                    <strong key="id">{ribbon.source.label}</strong>,
                    ribbon.source.formattedValue,
                ],
                [
                    <Chip key="chip" color={ribbon.target.color} />,
                    <strong key="id">{ribbon.target.label}</strong>,
                    ribbon.target.formattedValue,
                ],
            ]}
        />
    )
})

ChordRibbonTooltip.displayName = 'ChordRibbonTooltip'
ChordRibbonTooltip.propTypes = {
    ribbon: PropTypes.object.isRequired,
}

export default ChordRibbonTooltip
