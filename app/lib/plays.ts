import { PlayerPosition, Rotation, Stance } from "./constants";

const { CentralFar, CentralNear, HitterFar, HitterNear, Opposite, Setter } =
    PlayerPosition;

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
            Setter,
            HitterNear,
            CentralFar,
            Opposite,
            HitterFar,
            CentralNear,
        ),
        [Stance.Defense]: [
            { kind: "player", position: Opposite, x: 75, y: 1250 },
            { kind: "player", position: CentralFar, x: 170, y: 1150 },
            { kind: "player", position: HitterFar, x: 150, y: 1500 },
            { kind: "player", position: CentralNear, x: 450, y: 1600 },
            { kind: "player", position: HitterNear, x: 750, y: 1500 },
            { kind: "player", position: Setter, x: 830, y: 1600 },
        ],
        [Stance.Attack]: makeNeutralStance(
            Setter,
            HitterNear,
            CentralFar,
            Opposite,
            CentralNear,
            HitterFar,
        ),
    },
    [Rotation.R2]: {
        [Stance.Neutral]: makeNeutralStance(
            CentralNear,
            Setter,
            HitterNear,
            CentralFar,
            Opposite,
            HitterFar,
        ),
        [Stance.Defense]: [
            { kind: "player", position: CentralFar, x: 75, y: 1200 },
            { kind: "player", position: Setter, x: 750, y: 1050 },
            { kind: "player", position: HitterNear, x: 150, y: 1500 },
            { kind: "player", position: Opposite, x: 300, y: 1650 },
            { kind: "player", position: HitterFar, x: 450, y: 1600 },
            { kind: "player", position: CentralNear, x: 750, y: 1500 },
        ],
        [Stance.Attack]: makeNeutralStance(
            Opposite,
            Setter,
            CentralFar,
            HitterNear,
            CentralNear,
            HitterFar,
        ),
    },
    [Rotation.R3]: {
        [Stance.Neutral]: makeNeutralStance(
            HitterFar,
            CentralNear,
            Setter,
            HitterNear,
            CentralFar,
            Opposite,
        ),
        [Stance.Defense]: [
            { kind: "player", position: Setter, x: 600, y: 1050 },
            { kind: "player", position: CentralNear, x: 830, y: 1250 },
            { kind: "player", position: HitterNear, x: 150, y: 1500 },
            { kind: "player", position: CentralFar, x: 450, y: 1600 },
            { kind: "player", position: Opposite, x: 650, y: 1650 },
            { kind: "player", position: HitterFar, x: 750, y: 1500 },
        ],
        [Stance.Attack]: makeNeutralStance(
            Opposite,
            Setter,
            CentralNear,
            HitterNear,
            CentralFar,
            HitterFar,
        ),
    },
    [Rotation.R4]: {
        [Stance.Neutral]: makeNeutralStance(
            Opposite,
            HitterFar,
            CentralNear,
            Setter,
            HitterNear,
            CentralFar,
        ),
        [Stance.Defense]: [
            { kind: "player", position: Setter, x: 70, y: 1050 },
            { kind: "player", position: CentralNear, x: 95, y: 1180 },
            { kind: "player", position: HitterFar, x: 150, y: 1500 },
            { kind: "player", position: HitterNear, x: 450, y: 1600 },
            { kind: "player", position: CentralFar, x: 750, y: 1500 },
            { kind: "player", position: Opposite, x: 830, y: 1650 },
        ],
        [Stance.Attack]: makeNeutralStance(
            Opposite,
            Setter,
            CentralNear,
            HitterFar,
            CentralFar,
            HitterNear,
        ),
    },
    [Rotation.R5]: {
        [Stance.Neutral]: makeNeutralStance(
            CentralFar,
            Opposite,
            HitterFar,
            CentralNear,
            Setter,
            HitterNear,
        ),
        [Stance.Defense]: [
            { kind: "player", position: CentralNear, x: 70, y: 1080 },
            { kind: "player", position: Setter, x: 450, y: 1180 },
            { kind: "player", position: Opposite, x: 830, y: 1300 },
            { kind: "player", position: HitterFar, x: 150, y: 1500 },
            { kind: "player", position: HitterNear, x: 450, y: 1600 },
            { kind: "player", position: CentralFar, x: 750, y: 1500 },
        ],
        [Stance.Attack]: makeNeutralStance(
            Setter,
            Opposite,
            CentralNear,
            HitterFar,
            CentralFar,
            HitterNear,
        ),
    },
    [Rotation.R6]: {
        [Stance.Neutral]: makeNeutralStance(
            HitterNear,
            CentralFar,
            Opposite,
            HitterFar,
            CentralNear,
            Setter,
        ),
        [Stance.Defense]: [
            { kind: "player", position: Setter, x: 600, y: 1100 },
            { kind: "player", position: Opposite, x: 750, y: 1000 },
            { kind: "player", position: CentralFar, x: 830, y: 1250 },
            { kind: "player", position: HitterFar, x: 150, y: 1500 },
            { kind: "player", position: CentralNear, x: 450, y: 1600 },
            { kind: "player", position: HitterNear, x: 750, y: 1500 },
        ],
        [Stance.Attack]: makeNeutralStance(
            Setter,
            Opposite,
            CentralFar,
            HitterFar,
            CentralNear,
            HitterNear,
        ),
    },
};
