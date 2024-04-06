export enum PlayerPosition {
    CentralFar,
    CentralNear,
    HitterFar,
    HitterNear,
    Opposite,
    Setter,
}

export const PlayerColorMap: Record<PlayerPosition, string> = {
    // for tailwind: fill-red fill-royal fill-yellow
    [PlayerPosition.CentralFar]: "royal",
    [PlayerPosition.CentralNear]: "royal",
    [PlayerPosition.HitterFar]: "red",
    [PlayerPosition.HitterNear]: "red",
    [PlayerPosition.Opposite]: "yellow",
    [PlayerPosition.Setter]: "yellow",
};

export const PlayerShortLabelMap: Record<PlayerPosition, string> = {
    [PlayerPosition.CentralFar]: "M2",
    [PlayerPosition.CentralNear]: "M1",
    [PlayerPosition.HitterFar]: "H2",
    [PlayerPosition.HitterNear]: "H1",
    [PlayerPosition.Opposite]: "Op",
    [PlayerPosition.Setter]: "S",
};
