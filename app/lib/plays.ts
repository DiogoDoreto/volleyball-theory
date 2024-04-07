import { PlayerPosition, Rotation, Stance } from "./constants";

export interface PlayerOnCanvas {
    kind: "player";
    position: PlayerPosition;
    x: number;
    y: number;
}

export type ItemOnCanvas = PlayerOnCanvas;

function makeNeutralStance(
    n1: PlayerPosition,
    n2: PlayerPosition,
    n3: PlayerPosition,
    n4: PlayerPosition,
    n5: PlayerPosition,
    n6: PlayerPosition,
): PlayerOnCanvas[] {
    return [
        { kind: "player", position: n4, x: 150, y: 1050 },
        { kind: "player", position: n3, x: 450, y: 1050 },
        { kind: "player", position: n2, x: 750, y: 1050 },
        { kind: "player", position: n5, x: 150, y: 1450 },
        { kind: "player", position: n6, x: 450, y: 1450 },
        { kind: "player", position: n1, x: 750, y: 1450 },
    ];
}

export const plays: Record<Rotation, Record<Stance, ItemOnCanvas[]>> = {
    [Rotation.R1]: {
        [Stance.Neutral]: makeNeutralStance(
            PlayerPosition.Setter,
            PlayerPosition.HitterNear,
            PlayerPosition.CentralFar,
            PlayerPosition.Opposite,
            PlayerPosition.HitterFar,
            PlayerPosition.CentralNear,
        ),
        [Stance.Defense]: [],
        [Stance.Attack]: makeNeutralStance(
            PlayerPosition.Setter,
            PlayerPosition.Opposite,
            PlayerPosition.CentralFar,
            PlayerPosition.HitterNear,
            PlayerPosition.CentralNear,
            PlayerPosition.HitterFar,
        ),
    },
    [Rotation.R2]: {
        [Stance.Neutral]: makeNeutralStance(
            PlayerPosition.CentralNear,
            PlayerPosition.Setter,
            PlayerPosition.HitterNear,
            PlayerPosition.CentralFar,
            PlayerPosition.Opposite,
            PlayerPosition.HitterFar,
        ),
        [Stance.Defense]: [],
        [Stance.Attack]: makeNeutralStance(
            PlayerPosition.Opposite,
            PlayerPosition.Setter,
            PlayerPosition.CentralFar,
            PlayerPosition.HitterNear,
            PlayerPosition.CentralNear,
            PlayerPosition.HitterFar,
        ),
    },
    [Rotation.R3]: {
        [Stance.Neutral]: makeNeutralStance(
            PlayerPosition.HitterFar,
            PlayerPosition.CentralNear,
            PlayerPosition.Setter,
            PlayerPosition.HitterNear,
            PlayerPosition.CentralFar,
            PlayerPosition.Opposite,
        ),
        [Stance.Defense]: [],
        [Stance.Attack]: makeNeutralStance(
            PlayerPosition.Opposite,
            PlayerPosition.Setter,
            PlayerPosition.CentralNear,
            PlayerPosition.HitterNear,
            PlayerPosition.CentralFar,
            PlayerPosition.HitterFar,
        ),
    },
    [Rotation.R4]: {
        [Stance.Neutral]: makeNeutralStance(
            PlayerPosition.Opposite,
            PlayerPosition.HitterFar,
            PlayerPosition.CentralNear,
            PlayerPosition.Setter,
            PlayerPosition.HitterNear,
            PlayerPosition.CentralFar,
        ),
        [Stance.Defense]: [],
        [Stance.Attack]: makeNeutralStance(
            PlayerPosition.Opposite,
            PlayerPosition.Setter,
            PlayerPosition.CentralNear,
            PlayerPosition.HitterFar,
            PlayerPosition.CentralFar,
            PlayerPosition.HitterNear,
        ),
    },
    [Rotation.R5]: {
        [Stance.Neutral]: makeNeutralStance(
            PlayerPosition.CentralFar,
            PlayerPosition.Opposite,
            PlayerPosition.HitterFar,
            PlayerPosition.CentralNear,
            PlayerPosition.Setter,
            PlayerPosition.HitterNear,
        ),
        [Stance.Defense]: [],
        [Stance.Attack]: makeNeutralStance(
            PlayerPosition.Setter,
            PlayerPosition.Opposite,
            PlayerPosition.CentralNear,
            PlayerPosition.HitterFar,
            PlayerPosition.CentralFar,
            PlayerPosition.HitterNear,
        ),
    },
    [Rotation.R6]: {
        [Stance.Neutral]: makeNeutralStance(
            PlayerPosition.HitterNear,
            PlayerPosition.CentralFar,
            PlayerPosition.Opposite,
            PlayerPosition.HitterFar,
            PlayerPosition.CentralNear,
            PlayerPosition.Setter,
        ),
        [Stance.Defense]: [],
        [Stance.Attack]: makeNeutralStance(
            PlayerPosition.Setter,
            PlayerPosition.Opposite,
            PlayerPosition.CentralFar,
            PlayerPosition.HitterFar,
            PlayerPosition.CentralNear,
            PlayerPosition.HitterNear,
        ),
    },
};
