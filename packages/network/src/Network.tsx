import { Fragment, ReactNode, useCallback, createElement } from 'react'
import { Container, useDimensions, SvgWrapper, useTheme } from '@nivo/core'
import { useInheritedColor } from '@nivo/colors'
import { useTooltip } from '@nivo/tooltip'
import { svgDefaultProps } from './defaults'
import { useNetwork, useNodeColor, useLinkThickness } from './hooks'
import { NetworkNodes } from './NetworkNodes'
import { NetworkLinks } from './NetworkLinks'
import { NetworkInputNode, NetworkLayerId, NetworkSvgProps } from './types'

type InnerNetworkProps<N extends NetworkInputNode> = Omit<
    NetworkSvgProps<N>,
    'animate' | 'motionConfig' | 'renderWrapper' | 'theme'
>

const InnerNetwork = <N extends NetworkInputNode>(props: InnerNetworkProps<N>) => {
    const {
        width,
        height,
        margin: partialMargin,

        data: { nodes: rawNodes, links: rawLinks },

        linkDistance = svgDefaultProps.linkDistance,
        repulsivity = svgDefaultProps.repulsivity,
        distanceMin = svgDefaultProps.distanceMin,
        distanceMax = svgDefaultProps.distanceMax,
        iterations = svgDefaultProps.iterations,

        layers = svgDefaultProps.layers,

        nodeComponent = svgDefaultProps.nodeComponent,
        nodeColor = svgDefaultProps.nodeColor,
        nodeBorderWidth = svgDefaultProps.nodeBorderWidth,
        nodeBorderColor = svgDefaultProps.nodeBorderColor,

        linkThickness = svgDefaultProps.linkThickness,
        linkColor = svgDefaultProps.linkColor,

        isInteractive = svgDefaultProps.isInteractive,
        nodeTooltip = svgDefaultProps.nodeTooltip,
        onClick,

        role = svgDefaultProps.role,
    } = props

    const { margin, innerWidth, innerHeight, outerWidth, outerHeight } = useDimensions(
        width,
        height,
        partialMargin
    )

    const theme = useTheme()
    const getColor = useNodeColor<N>(nodeColor)
    const getBorderColor = useInheritedColor(nodeBorderColor, theme)
    const getLinkThickness = useLinkThickness(linkThickness)
    const getLinkColor = useInheritedColor(linkColor, theme)

    const [nodes, links] = useNetwork<N>({
        nodes: rawNodes,
        links: rawLinks,
        linkDistance,
        repulsivity,
        distanceMin,
        distanceMax,
        iterations,
        center: [innerWidth / 2, innerHeight / 2],
    })

    const { showTooltipFromEvent, hideTooltip } = useTooltip()

    const handleNodeHover = useCallback(
        (node, event) => {
            showTooltipFromEvent(createElement(nodeTooltip, { node }), event)
        },
        [showTooltipFromEvent, nodeTooltip]
    )

    const handleNodeLeave = useCallback(() => {
        hideTooltip()
    }, [hideTooltip])

    const layerById: Record<NetworkLayerId, ReactNode> = {
        links: null,
        nodes: null,
    }

    if (layers.includes('links') && false) {
        layerById.links = (
            <NetworkLinks
                key="links"
                links={links}
                linkThickness={getLinkThickness}
                linkColor={getLinkColor}
            />
        )
    }

    if (layers.includes('nodes')) {
        layerById.nodes = (
            <NetworkNodes<N>
                key="nodes"
                nodes={nodes}
                nodeComponent={nodeComponent}
                color={getColor}
                borderWidth={nodeBorderWidth}
                borderColor={getBorderColor}
                onClick={isInteractive ? onClick : undefined}
                onMouseEnter={isInteractive ? handleNodeHover : undefined}
                onMouseMove={isInteractive ? handleNodeHover : undefined}
                onMouseLeave={isInteractive ? handleNodeLeave : undefined}
            />
        )
    }

    return (
        <SvgWrapper width={outerWidth} height={outerHeight} margin={margin} role={role}>
            {layers.map((layer, i) => {
                if (typeof layer === 'function') {
                    return (
                        <Fragment key={i}>
                            {layer({
                                ...props,
                                innerWidth,
                                innerHeight,
                                nodes,
                                links,
                            })}
                        </Fragment>
                    )
                }

                return layerById[layer]
            })}
        </SvgWrapper>
    )
}

export const Network = <N extends NetworkInputNode = NetworkInputNode>({
    isInteractive = svgDefaultProps.isInteractive,
    animate = svgDefaultProps.animate,
    motionConfig = svgDefaultProps.motionConfig,
    theme,
    renderWrapper,
    ...otherProps
}: NetworkSvgProps<N>) => (
    <Container
        {...{
            animate,
            isInteractive,
            motionConfig,
            renderWrapper,
            theme,
        }}
    >
        <InnerNetwork<N> isInteractive={isInteractive} {...otherProps} />
    </Container>
)
