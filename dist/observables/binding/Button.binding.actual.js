"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Butterfly TypeScript converter
// File: observables/binding/Button.binding.actual.kt
// Package: com.lightningkite.butterfly.observables.binding
const DisposeCondition_actual_1 = require("../../rx/DisposeCondition.actual");
const ObservableProperty_ext_shared_1 = require("../ObservableProperty.ext.shared");
//! Declares com.lightningkite.butterfly.observables.binding.bindActive>android.widget.Button
function xButtonBindActive(this_, observable, activeColorResource = null, inactiveColorResource = null) {
    DisposeCondition_actual_1.xDisposableUntil(ObservableProperty_ext_shared_1.xObservablePropertySubscribeBy(observable, undefined, undefined, (x) => {
        this_.disabled = !x;
    }), DisposeCondition_actual_1.xViewRemovedGet(this_));
}
exports.xButtonBindActive = xButtonBindActive;
//# sourceMappingURL=Button.binding.actual.js.map