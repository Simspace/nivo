import { ResponsiveWrapper, Dimensions } from '@simspace/nivo-core'
import { BulletSvgProps } from './types'
import { Bullet } from './Bullet'

export const ResponsiveBullet = (props: Omit<BulletSvgProps, 'height' | 'width'>) => (
    <ResponsiveWrapper>
        {({ width, height }: Dimensions) => <Bullet width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
