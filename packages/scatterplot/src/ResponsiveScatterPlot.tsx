import { ResponsiveWrapper } from '@simspace/nivo-core'
import { ScatterPlot } from './ScatterPlot'
import { ScatterPlotDatum, ScatterPlotSvgProps } from './types'

export const ResponsiveScatterPlot = <RawDatum extends ScatterPlotDatum>(
    props: Omit<ScatterPlotSvgProps<RawDatum>, 'width' | 'height'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => <ScatterPlot<RawDatum> width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
