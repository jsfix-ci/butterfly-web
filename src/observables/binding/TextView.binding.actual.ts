// Generated by Khrysalis TypeScript converter
// File: observables/binding/TextView.binding.actual.kt
// Package: com.lightningkite.khrysalis.observables.binding
import {xObservablePropertySubscribeBy} from '../ObservableProperty.ext.shared'
import {xViewRemovedGet, xDisposableUntil} from '../../rx/DisposeCondition.actual'
import {ObservableProperty} from '../ObservableProperty.shared'
import {setViewVisibility} from "../../views/View.ext.actual";
import {setViewText} from "../../views/ViewWithText.ext.actual";

//! Declares com.lightningkite.khrysalis.observables.binding.bindString>android.widget.TextView
export function xTextViewBindString(this_: HTMLElement, observable: ObservableProperty<string>): void {
    xDisposableUntil(xObservablePropertySubscribeBy(observable, undefined, undefined, (value) => {
        setViewText(this_, value);
    }), xViewRemovedGet(this_));
}

//! Declares com.lightningkite.khrysalis.observables.binding.bindStringRes>android.widget.TextView
export function xTextViewBindStringRes(this_: HTMLElement, observable: ObservableProperty<(string | null)>): void {
    xDisposableUntil(xObservablePropertySubscribeBy(observable, undefined, undefined, (value) => {
        setViewVisibility(this_, value === null ? "gone" : "visible");
        if (value !== null) {
            setViewText(this_, value);
        }
    }), xViewRemovedGet(this_));
}


//! Declares com.lightningkite.khrysalis.observables.binding.bindText>android.widget.TextView
export function xTextViewBindText<T>(this_: HTMLElement, observable: ObservableProperty<T>, transform: (a: T) => string): void {
    xDisposableUntil(xObservablePropertySubscribeBy(observable, undefined, undefined, (value) => {
        setViewText(this_, transform(value));
    }), xViewRemovedGet(this_));
}

