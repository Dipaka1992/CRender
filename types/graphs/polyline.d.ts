import { PolylineShape } from '../types/graphs/shape'
import Graph from '../core/graph.class'
import { GraphConfig, Point } from '../types/core/graph'
import { Optional } from '../types/common'
declare class Polyline extends Graph<PolylineShape> {
  name: string
  constructor(config: GraphConfig<Optional<PolylineShape>>)
  draw(): void
  hoverCheck(point: Point): boolean
  setGraphCenter(): void
  move({ movementX, movementY }: MouseEvent): void
}
export default Polyline