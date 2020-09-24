// Generated by Khrysalis TypeScript converter
// File: views/CustomView.actual.kt
// Package: com.lightningkite.khrysalis.views

import {CustomViewDelegate} from "./CustomViewDelegate.shared";
import {DisplayMetrics} from "./DisplayMetrics.actual";
import {DisposableLambda, xViewRemovedGet} from "../rx/DisposeCondition.actual";
import {tryCastClass} from "../Kotlin";

const customViewDelegateSymbol = Symbol("customViewDelegateSymbol");
const customViewConfiguredSymbol = Symbol("customViewConfiguredSymbol");

declare global {
    interface HTMLCanvasElement {
        [customViewDelegateSymbol]: CustomViewDelegate | undefined
        [customViewConfiguredSymbol]: boolean | undefined
    }
}

export function customViewSetDelegate(view: HTMLCanvasElement, delegate: CustomViewDelegate) {
    view[customViewDelegateSymbol]?.dispose();
    delegate.customView = view;

    let lastEndHandled = -1;
    view.style.touchAction = "none";
    view.onpointerdown = (e) => {
        lastEndHandled = -1;
        const b = view.getBoundingClientRect();
        const result = delegate.onTouchDown(e.pointerId, e.pageX - b.x, e.pageY - b.y, view.width, view.height);
        if(result) e.preventDefault();
    }
    view.onpointermove = (e) => {
        if(e.buttons > 0){
            const b = view.getBoundingClientRect();
            const result = delegate.onTouchMove(e.pointerId, e.pageX - b.x, e.pageY - b.y, view.width, view.height);
            if(result) e.preventDefault();
        }
    }
    view.onpointercancel = (e) => {
        if(e.pointerId == lastEndHandled) { return }
        lastEndHandled = e.pointerId;
        const b = view.getBoundingClientRect();
        const result = delegate.onTouchCancelled(e.pointerId, e.pageX - b.x, e.pageY - b.y, view.width, view.height);
        if(result) e.preventDefault();
    }
    view.onpointerleave = (e) => {
        if(e.pointerId == lastEndHandled) { return }
        lastEndHandled = e.pointerId;
        const b = view.getBoundingClientRect();
        const result = delegate.onTouchCancelled(e.pointerId, e.pageX - b.x, e.pageY - b.y, view.width, view.height);
        if(result) e.preventDefault();
    }
    view.onpointerup = (e) => {
        if(e.pointerId == lastEndHandled) { return }
        lastEndHandled = e.pointerId;
        const b = view.getBoundingClientRect();
        const result = delegate.onTouchUp(e.pointerId, e.pageX - b.x, e.pageY - b.y, view.width, view.height);
        if(result) e.preventDefault();
    }
    view.onwheel = (e) => {
        const result = delegate.onWheel(e.deltaY);
        if(result) e.preventDefault();
    }

    if(view.getContext){
        const ctx = view.getContext("2d");
        view.width = view.offsetWidth;
        view.height = view.offsetHeight;
        if(ctx && view.width > 2 && view.height > 2){
            delegate.draw(ctx, view.width, view.height, DisplayMetrics.INSTANCE);
        }
    } else {
        const gen = delegate.generateAccessibilityView();
        if(gen){
            view.parentElement?.appendChild(gen);
        }
    }
    view[customViewDelegateSymbol] = delegate;

    if(!view[customViewConfiguredSymbol]){
        view[customViewConfiguredSymbol] = true;
        xViewRemovedGet(view).call(new DisposableLambda(()=>{
            view[customViewDelegateSymbol]?.dispose();
            view[customViewDelegateSymbol] = undefined;
        }))

        const p = view.parentElement;
        if(p){
            const adjWidth = !view.style.width && !(p.style.flexDirection == "column" && view.style.alignSelf == "stretch");
            const adjHeight = !view.style.height && !(p.style.flexDirection == "row" && view.style.alignSelf == "stretch");
            const obs = new ResizeObserver(function callback(){
                if(adjWidth){
                    view.style.width = delegate.sizeThatFitsWidth(p.scrollWidth, p.scrollHeight).toString() + "px";
                }
                if(adjHeight) {
                    view.style.height = delegate.sizeThatFitsHeight(p.scrollWidth, p.scrollHeight).toString() + "px";
                }
                customViewInvalidate(view);
                if(!document.contains(view)) {
                    obs.disconnect();
                }
            });
            obs.observe(p);
        }
    }
}

export function customViewInvalidate(view: HTMLCanvasElement) {
    const delegate = view[customViewDelegateSymbol];
    if(!delegate) return;
    if(view.getContext){
        const ctx = view.getContext("2d");
        view.width = view.offsetWidth;
        view.height = view.offsetHeight;
        if(ctx && view.width > 2 && view.height > 2){
            ctx.clearRect(0, 0, view.width, view.height);
            delegate.draw(ctx, view.width, view.height, DisplayMetrics.INSTANCE);
        }
    }
}