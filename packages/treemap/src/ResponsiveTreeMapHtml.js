/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { ResponsiveWrapper } from '@simspace/nivo-core'
import TreeMapHtml from './TreeMapHtml'

const ResponsiveTreeMapHtml = props => (
    <ResponsiveWrapper>
        {({ width, height }) => <TreeMapHtml width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)

export default ResponsiveTreeMapHtml
