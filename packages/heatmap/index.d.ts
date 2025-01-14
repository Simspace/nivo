import * as React from 'react'
import { Dimensions, Box, MotionProps, ColorProps, Theme } from '@simspace/nivo-core'
import { AxisProps } from '@simspace/nivo-axes'
import { InheritedColorConfig } from '@simspace/nivo-colors'
import { BasicTooltipProps } from '@simspace/nivo-tooltip'

declare module '@simspace/nivo-heatmap' {
    export interface HeatMapDatum {
        [key: string]: string | number
    }

    export type HeatMapDatumWithColor = HeatMapDatum & {
        color: string
    }

    export type IndexByFunc = (datum: HeatMapDatum) => string | number

    export type LabelFormatter = (datum: HeatMapDatum, key: string) => string | number

    export type ValueFormatter = (value: number) => string | number

    export interface HeatMapData {
        data: HeatMapDatum[]
        indexBy?: string | IndexByFunc
        keys?: string[]
        minValue?: number | 'auto'
        maxValue?: number | 'auto'
    }

    export type HeatMapCommonProps = ColorProps<HeatMapDatum> &
        Partial<{
            forceSquare: boolean
            sizeVariation: number
            margin: Box
            padding: number

            cellShape: 'rect' | 'circle' | React.StatelessComponent<any>
            cellOpacity: number
            cellBorderWidth: number
            cellBorderColor: InheritedColorConfig<HeatMapDatumWithColor>

            axisTop: AxisProps | null
            axisRight: AxisProps | null
            axisBottom: AxisProps | null
            axisLeft: AxisProps | null

            enableGridX: boolean
            enableGridY: boolean

            enableLabels: boolean
            label: LabelFormatter
            labelTextColor: InheritedColorConfig<HeatMapDatumWithColor>

            isInteractive: boolean
            hoverTarget: 'cell' | 'row' | 'column' | 'rowColumn'
            cellHoverOpacity: number
            cellHoverOthersOpacity: number
            tooltipFormat: string | ValueFormatter
            tooltip: React.StatelessComponent<BasicTooltipProps & NodeData>

            theme: Theme
        }>

    export interface NodeData {
        key: string
        value: number
        x: number
        xKey: string | number
        y: number
        yKey: string | number
        width: number
        height: number
        opacity: number
    }

    export type HeatMapSvgProps = HeatMapData &
        HeatMapCommonProps &
        MotionProps &
        Partial<{
            onClick: (datum: NodeData, event: React.MouseEvent<SVGGElement>) => void
        }>

    export class HeatMap extends React.Component<HeatMapSvgProps & Dimensions> {}
    export class ResponsiveHeatMap extends React.Component<HeatMapSvgProps> {}

    export type HeatMapCanvasProps = HeatMapData &
        HeatMapCommonProps &
        Partial<{
            onClick: (datum: NodeData, event: React.MouseEvent<HTMLCanvasElement>) => void
            pixelRatio: number
            role: string
        }>

    export class HeatMapCanvas extends React.Component<HeatMapCanvasProps & Dimensions> {}
    export class ResponsiveHeatMapCanvas extends React.Component<HeatMapCanvasProps> {}
}
