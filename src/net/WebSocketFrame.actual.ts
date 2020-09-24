// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: net/WebSocketFrame.actual.kt
// Package: com.lightningkite.khrysalis.net
import { runOrNull } from '../kotlin/Language'

//! Declares com.lightningkite.khrysalis.net.WebSocketFrame
export class WebSocketFrame {
    public readonly binary: (Int8Array | null);
    public readonly text: (string | null);
    public constructor(binary: (Int8Array | null) = null, text: (string | null) = null) {
        this.binary = binary;
        this.text = text;
    }
    
    public toString(): string {
        return this.text ?? ((): (string | null) => {
                const it_20 = this.binary;
                if (it_20 !== null) { 
                    return `<Binary data length ${it_20.length}`;
                } else { return null }
        })() ?? "<Empty Frame>";
    }
}

