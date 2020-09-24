"use strict";
// Generated by Butterfly TypeScript converter
// File: views/draw/LinearGradient.actual.kt
// Package: com.lightningkite.butterfly.views.draw
Object.defineProperty(exports, "__esModule", { value: true });
function newRadialGradient(centerX, centerY, radius, colors, positions, tile) {
    return (ctx) => {
        let g = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        for (let i = 0; i < colors.length; i++) {
            g.addColorStop(positions[i], colors[i]);
        }
        return g;
    };
}
exports.newRadialGradient = newRadialGradient;
//# sourceMappingURL=RadialGradient.actual.js.map