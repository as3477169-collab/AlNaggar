import { workshopSettings } from "./workshopSettings";

export interface CabinetInput {
  width: number;
  height: number;
  depth: number;
}

export interface Part {
  name: string;
  width: number;
  height: number;
  quantity: number;
}

export function calculateBaseCabinet(input: CabinetInput): Part[] {
  const t = workshopSettings.boardThickness;

  return [
    {
      name: "جنب",
      width: input.depth,
      height: input.height - (t * 2),
      quantity: 2,
    },
    {
      name: "قاعدة",
      width: input.width - (t * 2),
      height: input.depth,
      quantity: 1,
    },
    {
      name: "قرصة",
      width: input.width - (t * 2),
      height: 100,
      quantity: 2,
    },
  ];
}
