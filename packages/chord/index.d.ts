/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { Component } from 'react'
import { Box, MotionProps, Dimensions, Theme } from '@simspace/nivo-core'
import { OrdinalColorScaleConfig, InheritedColorConfig } from '@simspace/nivo-colors'
import { LegendProps } from '@simspace/nivo-legends'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

declare module '@simspace/nivo-chord' {
    export interface ArcData {
        id: string
        index: number
        label: string
        value: number
        formattedValue: number | string
        startAngle: number
        endAngle: number
        color: string
    }

    export interface RibbonSubject extends ArcData {
        subindex: number
    }

    export interface RibbonData {
        id: string
        source: RibbonSubject
        target: RibbonSubject
    }

    export type ChordArcMouseHandler = (arc: ArcData, event: React.MouseEvent<any>) => void

    export type ChordRibbonMouseHandler = (ribbon: RibbonData, event: React.MouseEvent<any>) => void

    type LabelAccessor = (datum: Omit<ArcData, 'label'>) => string
    type ValueFormatter = (datum: Omit<ArcData, 'formattedValue' | 'label'>) => string | number

    interface CommonChordProps {
        keys: string[]
        matrix: number[][]
        label?: string | LabelAccessor
        valueFormat?: string | ValueFormatter

        margin?: Box

        padAngle?: number
        innerRadiusRatio?: number
        innerRadiusOffset?: number

        layers: any[]

        colors?: OrdinalColorScaleConfig
        theme?: Theme

        arcOpacity?: number
        arcHoverOpacity?: number
        arcHoverOthersOpacity?: number
        arcBorderWidth?: number
        arcBorderColor?: InheritedColorConfig<ArcData>
        onArcMouseEnter?: ChordArcMouseHandler
        onArcMouseMove?: ChordArcMouseHandler
        onArcMouseLeave?: ChordArcMouseHandler
        onArcClick?: ChordArcMouseHandler
        arcTooltip?: any

        ribbonOpacity?: number
        ribbonHoverOpacity?: number
        ribbonHoverOthersOpacity?: number
        ribbonBorderWidth?: number
        ribbonBorderColor?: InheritedColorConfig<RibbonData>

        enableLabel?: boolean
        labelOffset?: number
        labelRotation?: number
        labelTextColor?: InheritedColorConfig<ArcData>

        isInteractive?: boolean

        legends?: LegendProps[]
    }

    export type ChordProps = CommonChordProps &
        MotionProps & {
            onRibbonMouseEnter?: ChordRibbonMouseHandler
            onRibbonMouseMove?: ChordRibbonMouseHandler
            onRibbonMouseLeave?: ChordRibbonMouseHandler
            onRibbonClick?: ChordRibbonMouseHandler
            ribbonTooltip?: any
            role?: string
        }

    export class Chord extends Component<ChordProps & Dimensions> {}
    export class ResponsiveChord extends Component<ChordProps> {}

    export type ChordCanvasProps = CommonChordProps & {
        pixelRatio?: number
    }

    export class ChordCanvas extends Component<ChordCanvasProps & Dimensions> {}
    export class ResponsiveChordCanvas extends Component<ChordCanvasProps> {}
}
