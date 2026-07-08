import WorkshopSettings from "./WorkshopSettings";

export interface CabinetInput {
  type: string;
  width: number;
  height?: number;
  depth?: number;
}

export interface CabinetResult {
  width: number;
  height: number;
  depth: number;
  boardThickness: number;
  backThickness: number;
  shelfDepth: number;
}

export function calculateCabinet(data: CabinetInput): CabinetResult {

  const depth =
    data.depth ??
    WorkshopSettings.baseCabinet.depth;

  const height =
    data.height ??
    WorkshopSettings.baseCabinet.height;

  return {
    width: data.width,
    height,
    depth,
    boardThickness: WorkshopSettings.board.thickness,
    backThickness: WorkshopSettings.board.backThickness,
    shelfDepth: WorkshopSettings.baseCabinet.shelfDepth,
  };
}
