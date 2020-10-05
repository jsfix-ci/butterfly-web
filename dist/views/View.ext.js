"use strict";
// Generated by Butterfly TypeScript converter
// File: views/View.ext.kt
// Package: com.lightningkite.butterfly.views
Object.defineProperty(exports, "__esModule", { value: true });
//! Declares com.lightningkite.butterfly.views.onClick>android.view.View
const iterable_operator_1 = require("iterable-operator");
function xViewOnClick(this_, disabledMilliseconds = 500, action) {
    let lastActivated = Date.now();
    this_.onclick = (_ev) => {
        _ev.stopPropagation();
        const it = _ev.target;
        if (Date.now() - lastActivated > disabledMilliseconds) {
            action();
            lastActivated = Date.now();
        }
    };
}
exports.xViewOnClick = xViewOnClick;
//! Declares com.lightningkite.butterfly.views.onLongClick>android.view.View
function xOnLongClick(this_, action) {
    this_.oncontextmenu = (_ev) => {
        _ev.stopPropagation();
        const it = _ev.target;
        action();
    };
}
exports.xOnLongClick = xOnLongClick;
function getViewVisibility(this_) {
    if (this_.hidden)
        return "gone";
    if (this_.style.visibility === "hidden")
        return "invisible";
    return "visible";
}
exports.getViewVisibility = getViewVisibility;
function setViewVisibility(this_, value) {
    switch (value) {
        case "gone":
            this_.hidden = true;
            this_.style.visibility = "visible";
            break;
        case "visible":
            this_.hidden = false;
            this_.style.visibility = "visible";
            break;
        case "invisible":
            this_.hidden = false;
            this_.style.visibility = "hidden";
            break;
    }
    const p = this_.parentElement;
    if (p && (p.classList.contains("butterfly-box") || p.classList.contains("khrc"))) {
        setViewVisibility(p, value);
    }
}
exports.setViewVisibility = setViewVisibility;
function findView(view, predicate) {
    for (let i = 0; i < view.children.length; i++) {
        const child = view.children.item(i);
        if (child instanceof HTMLElement && predicate(child)) {
            return child;
        }
    }
    return null;
}
exports.findView = findView;
function setViewBackgroundClass(view, cssClass) {
    let existing = [];
    for (const i of iterable_operator_1.range(0, view.classList.length - 1)) {
        const item = view.classList.item(i);
        if (item && item.startsWith("drawable-")) {
            existing.push(item);
        }
    }
    view.classList.remove(...existing);
    view.classList.add(cssClass);
}
exports.setViewBackgroundClass = setViewBackgroundClass;
//# sourceMappingURL=View.ext.js.map