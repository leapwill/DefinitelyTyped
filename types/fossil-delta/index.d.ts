// Type definitions for fossil-delta 1.0.0
// Project: https://github.com/dchest/fossil-delta-js
// Definitions by: Endel Dreyer <https://github.com/endel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

type ByteArray = Array<number> | Uint8Array | Buffer;

export function create(origin: ByteArray, target: ByteArray): Array<number>;
export function apply(origin: ByteArray, delta: Array<number>, ops?: { verifyChecksum: boolean }): Array<number>;
export function outputSize(delta: Array<number>): number;
