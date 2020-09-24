// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: observables/binding/View.binding.actual.kt
// Package: com.lightningkite.khrysalis.observables.binding
import { xDisposableUntil, xViewRemovedGet } from '../../rx/DisposeCondition.actual'
import { ObservableProperty } from '../ObservableProperty.shared'
import { xObservablePropertySubscribeBy } from '../ObservableProperty.ext.shared'
import { setViewVisibility } from '../../views/View.ext.actual'
import { SubscriptionLike } from 'rxjs'

//! Declares com.lightningkite.khrysalis.observables.binding.bindVisible>android.view.View
export function xViewBindVisible(this_: HTMLElement, observable: ObservableProperty<boolean>): void {
    xDisposableUntil<SubscriptionLike>(xObservablePropertySubscribeBy<boolean>(observable, undefined, undefined, (value: boolean): void => {
                setViewVisibility(this_, value ? "visible" : "invisible");
    }), xViewRemovedGet(this_));
}


//! Declares com.lightningkite.khrysalis.observables.binding.bindExists>android.view.View
export function xViewBindExists(this_: HTMLElement, observable: ObservableProperty<boolean>): void {
    xDisposableUntil<SubscriptionLike>(xObservablePropertySubscribeBy<boolean>(observable, undefined, undefined, (value: boolean): void => {
                setViewVisibility(this_, value ? "visible" : "gone");
    }), xViewRemovedGet(this_));
}

