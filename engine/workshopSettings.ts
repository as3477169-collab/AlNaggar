export const WorkshopSettings = {
  workshopName: "النجار",

  board: {
    width: 1220,
    height: 2440,
    thickness: 18,
    backThickness: 6,
  },

  groove: {
    depth: 9,
    unified: true,
  },

  baseCabinet: {
    depth: 580,
    height: 780,
    shelfDepth: 500,
    sidesInside: true,
    topBottomOutside: true,
  },

  wallCabinet: {
    depth: 350,
    sidesInside: true,
    topBottomOutside: true,
  },

  fridgeSpace: 650,

  drawer: {
    boxDepth: 420,
    boxHeight: 80,
    frontGap: 4,
    handleDeduction: 35,
    slide: "bottom",
  },

  vegetableDrawer: {
    drawers: 3,
    slide: "side",
    boxDepth: 420,
    boxHeight: 80,
  },

  ovenUnit: {
    ovenShelfDepth: 500,
    storageDepth: 580,
    storageShelves: 2,
  },

  colors: [
    "خشابي",
    "أبيض مط",
    "أبيض لامع",
    "أسود مط",
    "أسود لامع",
  ],
};

export default WorkshopSettings;
