import { ResponsiveWrapper } from '@simspace/nivo-core'
import Chord from './Chord'

const ResponsiveChord = props => (
    <ResponsiveWrapper>
        {({ width, height }) => <Chord width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)

export default ResponsiveChord
