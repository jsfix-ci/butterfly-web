"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Butterfly TypeScript converter
// File: observables/binding/DateButton.binding.kt
// Package: com.lightningkite.butterfly.observables.binding
const ObservableProperty_ext_1 = require("../ObservableProperty.ext");
const Date_1 = require("../../time/Date");
const DisposeCondition_ext_1 = require("../../rx/DisposeCondition.ext");
const TimeAlone_1 = require("../../time/TimeAlone");
const DateAlone_1 = require("../../time/DateAlone");
//! Declares com.lightningkite.butterfly.observables.binding.bind>com.lightningkite.butterfly.views.widget.DateButton
function xDateButtonBind(this_, date) {
    let suppress = false;
    DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(date, undefined, undefined, (it) => {
        if (suppress)
            return;
        suppress = true;
        const ta = Date_1.xDateDateAloneGet(it);
        this_.value = DateAlone_1.xDateAloneIso8601(ta);
        suppress = false;
    }), DisposeCondition_ext_1.xViewRemovedGet(this_));
    this_.onchange = (e) => {
        if (suppress)
            return;
        suppress = true;
        try {
            const d = DateAlone_1.DateAlone.Companion.INSTANCE.iso(this_.value);
            const current = date.value;
            Date_1.xDateSet(current, d);
            date.value = current;
        }
        catch (e) {
            console.warn("Failed to parse " + this_.value);
            console.warn(e);
        }
        suppress = false;
    };
}
exports.xDateButtonBind = xDateButtonBind;
//! Declares com.lightningkite.butterfly.observables.binding.bind>com.lightningkite.butterfly.views.widget.TimeButton
function xTimeButtonBind(this_, date, minuteInterval = 1) {
    let suppress = false;
    DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(date, undefined, undefined, (it) => {
        if (suppress)
            return;
        suppress = true;
        const ta = Date_1.xDateTimeAloneGet(it);
        this_.value = TimeAlone_1.xTimeAloneIso8601(ta);
        suppress = false;
    }), DisposeCondition_ext_1.xViewRemovedGet(this_));
    this_.onchange = (e) => {
        if (suppress)
            return;
        suppress = true;
        try {
            const d = TimeAlone_1.TimeAlone.Companion.INSTANCE.iso(this_.value);
            const current = date.value;
            Date_1.xDateSet(current, d);
            date.value = current;
        }
        catch (e) {
            console.warn("Failed to parse " + this_.value);
            console.warn(e);
        }
        suppress = false;
    };
}
exports.xTimeButtonBind = xTimeButtonBind;
//! Declares com.lightningkite.butterfly.observables.binding.bindDateAlone>com.lightningkite.butterfly.views.widget.DateButton
function xDateButtonBindDateAlone(this_, date) {
    let suppress = false;
    DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(date, undefined, undefined, (it) => {
        if (suppress)
            return;
        suppress = true;
        this_.value = DateAlone_1.xDateAloneIso8601(it);
        suppress = false;
    }), DisposeCondition_ext_1.xViewRemovedGet(this_));
    this_.onchange = (e) => {
        if (suppress)
            return;
        suppress = true;
        const d = DateAlone_1.DateAlone.Companion.INSTANCE.iso(this_.value);
        if (d) {
            date.value = d;
        }
        else {
            console.warn("Failed to parse " + this_.value);
            console.warn(e);
        }
        suppress = false;
    };
}
exports.xDateButtonBindDateAlone = xDateButtonBindDateAlone;
//! Declares com.lightningkite.butterfly.observables.binding.bindTimeAlone>com.lightningkite.butterfly.views.widget.TimeButton
function xTimeButtonBindTimeAlone(this_, date, minuteInterval = 1) {
    let suppress = false;
    DisposeCondition_ext_1.xDisposableUntil(ObservableProperty_ext_1.xObservablePropertySubscribeBy(date, undefined, undefined, (it) => {
        if (suppress)
            return;
        suppress = true;
        this_.value = TimeAlone_1.xTimeAloneIso8601(it);
        suppress = false;
    }), DisposeCondition_ext_1.xViewRemovedGet(this_));
    this_.onchange = (e) => {
        if (suppress)
            return;
        suppress = true;
        const d = TimeAlone_1.TimeAlone.Companion.INSTANCE.iso(this_.value);
        if (d) {
            date.value = d;
        }
        else {
            console.warn("Failed to parse " + this_.value);
            console.warn(e);
        }
        suppress = false;
    };
}
exports.xTimeButtonBindTimeAlone = xTimeButtonBindTimeAlone;
//# sourceMappingURL=DateButton.binding.js.map