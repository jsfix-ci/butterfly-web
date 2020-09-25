// Generated by Butterfly TypeScript converter
// File: observables/binding/SwapView.binding.actual.kt
// Package: com.lightningkite.butterfly.observables.binding
import {xObservablePropertySubscribeBy} from '../ObservableProperty.ext.shared'
import {xViewRemovedGet, xDisposableUntil} from '../../rx/DisposeCondition.actual'
import {ViewGenerator} from '../../views/ViewGenerator.shared'
import {ObservableStack} from '../ObservableStack.shared'
import {swapViewSwap} from "../../views/SwapView";

//! Declares com.lightningkite.butterfly.observables.binding.bindStack>com.lightningkite.butterfly.views.SwapView
export function xSwapViewBindStack<T extends ViewGenerator>(this_: HTMLDivElement, dependency: Window, obs: ObservableStack<T>): void {
    let previousStackSize = obs.value.length;
    xDisposableUntil(xObservablePropertySubscribeBy(obs, undefined, undefined, (stack) => {
        const newStackSize = stack.length;
        let animation = "butterfly-animate-fade"
        if (newStackSize > previousStackSize) {
            animation = "butterfly-animate-push"
        } else if (newStackSize < previousStackSize) {
            animation = "butterfly-animate-pop"
        }
        previousStackSize = newStackSize;
        const newVG = stack[stack.length - 1] ?? null;
        const newView = newVG?.generate(window) ?? null;
        swapViewSwap(this_, newView, animation);
    }), xViewRemovedGet(this_));
}

