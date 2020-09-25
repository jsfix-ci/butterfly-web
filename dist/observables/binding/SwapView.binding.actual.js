"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Butterfly TypeScript converter
// File: observables/binding/SwapView.binding.actual.kt
// Package: com.lightningkite.butterfly.observables.binding
const ObservableProperty_ext_shared_1 = require("../ObservableProperty.ext.shared");
const DisposeCondition_actual_1 = require("../../rx/DisposeCondition.actual");
const SwapView_1 = require("../../views/SwapView");
//! Declares com.lightningkite.butterfly.observables.binding.bindStack>com.lightningkite.butterfly.views.SwapView
function xSwapViewBindStack(this_, dependency, obs) {
    let previousStackSize = obs.value.length;
    DisposeCondition_actual_1.xDisposableUntil(ObservableProperty_ext_shared_1.xObservablePropertySubscribeBy(obs, undefined, undefined, (stack) => {
        var _a, _b;
        const newStackSize = stack.length;
        let animation = "butterfly-animate-fade";
        if (newStackSize > previousStackSize) {
            animation = "butterfly-animate-push";
        }
        else if (newStackSize < previousStackSize) {
            animation = "butterfly-animate-pop";
        }
        previousStackSize = newStackSize;
        const newVG = (_a = stack[stack.length - 1]) !== null && _a !== void 0 ? _a : null;
        const newView = (_b = newVG === null || newVG === void 0 ? void 0 : newVG.generate(window)) !== null && _b !== void 0 ? _b : null;
        SwapView_1.swapViewSwap(this_, newView, animation);
    }), DisposeCondition_actual_1.xViewRemovedGet(this_));
}
exports.xSwapViewBindStack = xSwapViewBindStack;
//# sourceMappingURL=SwapView.binding.actual.js.map