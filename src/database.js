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
};

export const getDocks = () => {
  return database.docks.map((dock) => ({ ...dock }));
};

export const getHaulers = () => {
  return database.haulers.map((hauler) => ({ ...hauler }));
};
