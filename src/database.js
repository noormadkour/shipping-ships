const database = {
  docks: [
    { id: 1, location: "Shanghai, China", volume: "43.5" },
    { id: 2, location: "Busan, South Korea", volume: "21.6" },
    { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
    { id: 4, location: "Antwerp, Belgium", volume: "12.04" },
  ],
  haulers: [
    {
      id: 1,
      haulerName: "Haulin' Shanghai Surprise",
      dock_location: "Shanghai, China",
    },
    {
      id: 2,
      haulerName: "Busan the Move",
      dock_location: "Busan, South Korea",
    },
    {
      id: 3,
      haulerName: "Rockin' Rotterdam",
      dock_location: "Rotterdam, The Netherlands",
    },
    {
      id: 4,
      haulerName: "Antwerp-tunity Knocks",
      dock_location: "Antwerp, Belgium",
    },
    { id: 5, haulerName: "Seas the Day", dock_location: "Antwerp, Belgium" },
    { id: 6, haulerName: "Knot on Call", dock_location: "Shanghai, China" },
    {
      id: 7,
      haulerName: "Anchorman",
      dock_location: "Rotterdam, The Netherlands",
    },
    {
      id: 8,
      haulerName: "The Salty Mermaid",
      dock_location: "Busan, South Korea",
    },
  ],
  ships: [
    { id: 1, shipName: "Ship Happens", hauler: "Haulin' Shanghai Surprise" },
    { id: 2, shipName: "Seas the Moment", hauler: "Haulin' Shanghai Surprise" },
    { id: 3, shipName: "Boatload of Fun", hauler: "Busan the Move" },
    { id: 4, shipName: "Sailabration", hauler: "Busan the Move" },
    { id: 5, shipName: "Nauti Buoy", hauler: "Rockin' Rotterdam" },
    { id: 6, shipName: "Unsinkable II", hauler: "Rockin' Rotterdam" },
    { id: 7, shipName: "Anchors Aweigh", hauler: "Antwerp-tunity Knocks" },
    { id: 8, shipName: "Knotical Nonsense", hauler: "Antwerp-tunity Knocks" },
    { id: 9, shipName: "The Salty Seahorse", hauler: "The Salty Mermaid" },
    { id: 10, shipName: "Buoyant Beauty", hauler: "The Salty Mermaid" },
    { id: 11, shipName: "Shipshape", hauler: "Knot on Call" },
    { id: 12, shipName: "Shipfaced", hauler: "Knot on Call" },
  ],
};

export const getDocks = () => {
  return database.docks.map((dock) => ({ ...dock }));
};

export const getHaulers = () => {
  return database.haulers.map((hauler) => ({ ...hauler }));
};

export const getShips = () => {
    return database.ships.map((ship) => ({ ...ship }));
  };
