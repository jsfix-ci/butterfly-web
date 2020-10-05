// Generated by Butterfly TypeScript converter
// File: views/View.ext.kt
// Package: com.lightningkite.butterfly.views

//! Declares com.lightningkite.butterfly.views.onClick>android.view.View
import {range} from "iterable-operator";

export function xViewOnClick(this_: HTMLElement, disabledMilliseconds: number = 500, action: () => void): void {
    let lastActivated = Date.now();

    this_.onclick = (_ev) => {
        _ev.stopPropagation();
        const it = _ev.target as HTMLElement;
        if (Date.now() - lastActivated > disabledMilliseconds) {
            action();
            lastActivated = Date.now();
        }
    };
}

//! Declares com.lightningkite.butterfly.views.onLongClick>android.view.View
export function xOnLongClick(this_: HTMLElement, action: () => void): void {
    this_.oncontextmenu = (_ev) => {
        _ev.stopPropagation();
        const it = _ev.target as HTMLElement;
        action();
    };
}

export function getViewVisibility(this_: HTMLElement): string {
    if (this_.hidden) return "gone";
    if (this_.style.visibility === "hidden") return "invisible";
    return "visible";
}

export function setViewVisibility(this_: HTMLElement, value: string) {
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
    if(p && (p.classList.contains("butterfly-box") || p.classList.contains("khrc"))) {
        setViewVisibility(p, value);
    }
}

export function findView(view: HTMLElement, predicate: (e: HTMLElement) => boolean): HTMLElement | null {
    for (let i = 0; i < view.children.length; i++) {
        const child = view.children.item(i);
        if (child instanceof HTMLElement && predicate(child)) {
            return child;
        }
    }
    return null;
}

export function setViewBackgroundClass(view: HTMLElement, cssClass: string) {
    let existing: Array<string> = [];
    for(const i of range(0, view.classList.length-1)) {
        const item = view.classList.item(i);
        if(item && item.startsWith("drawable-")){
            existing.push(item);
        }
    }
    view.classList.remove(...existing);
    view.classList.add(cssClass);
}