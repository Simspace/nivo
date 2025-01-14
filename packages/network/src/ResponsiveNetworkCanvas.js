/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { ResponsiveWrapper } from '@simspace/nivo-core'
import NetworkCanvas from './NetworkCanvas'

const ResponsiveNetworkCanvas = props => (
    <ResponsiveWrapper>
        {({ width, height }) => <NetworkCanvas width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)

export default ResponsiveNetworkCanvas
