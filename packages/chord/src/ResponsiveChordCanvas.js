import { ResponsiveWrapper } from '@simspace/nivo-core'
import ChordCanvas from './ChordCanvas'

const ResponsiveChordCanvas = props => (
    <ResponsiveWrapper>
        {({ width, height }) => <ChordCanvas width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)

export default ResponsiveChordCanvas
