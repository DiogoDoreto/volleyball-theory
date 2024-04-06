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

export enum Rotation {
    R1 = "R1",
    R2 = "R2",
    R3 = "R3",
    R4 = "R4",
    R5 = "R5",
    R6 = "R6",
}

export const AllRotations = [
    Rotation.R1,
    Rotation.R2,
    Rotation.R3,
    Rotation.R4,
    Rotation.R5,
    Rotation.R6,
];

export enum Stance {
    Neutral = "Neutral",
    Defense = "Defense",
    Attack = "Attack",
}

export const AllStances = [Stance.Neutral, Stance.Defense, Stance.Attack];
