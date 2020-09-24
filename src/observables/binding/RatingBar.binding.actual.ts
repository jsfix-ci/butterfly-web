// Generated by Butterfly TypeScript converter
// File: observables/binding/RatingBar.binding.actual.kt
// Package: com.lightningkite.butterfly.observables.binding
import { xObservablePropertySubscribeBy } from '../ObservableProperty.ext.shared'
import { xViewRemovedGet, xDisposableUntil } from '../../rx/DisposeCondition.actual'
import { ObservableProperty } from '../ObservableProperty.shared'
import { MutableObservableProperty } from '../MutableObservableProperty.shared'

//! Declares com.lightningkite.butterfly.observables.binding.bind>android.widget.RatingBar
export function xRatingBarBindMutable(this_: HTMLDivElement, stars: number, observable: MutableObservableProperty<number>): void {
    xRatingBarBind(this_, stars, observable);
    const input = document.createElement("input");
    input.type = "range"
    input.min = "1";
    input.max = stars.toString();
    input.style.display = "none";
    this_.appendChild(input);

    let suppress = false;
    xDisposableUntil(xObservablePropertySubscribeBy(observable, undefined, undefined, (value) => {
        if (!suppress) {
            suppress = true;
            input.valueAsNumber = (value);
            suppress = false;
        }
    }), xViewRemovedGet(input));
    input.oninput = (e) => {
        if(!suppress){
            suppress = true;
            observable.value = input.valueAsNumber;
            suppress = false;
        }
    }

    this_.tabIndex = 0;
    this_.addEventListener("keydown", (ev) => {
        switch(ev.code){
            case "ArrowRight":
                ev.preventDefault();
                if(observable.value < stars){
                    observable.value++;
                }
                break;
            case "ArrowLeft":
                ev.preventDefault();
                if(observable.value > 1){
                    observable.value--;
                }
                break;
        }
    })

    for(let i = 0; i < stars; i++){
        const e = this_.children.item(i) as HTMLElement;
        e.onclick = (ev) => {
            ev.stopPropagation();
            observable.value = i + 1;
        }
    }
}

//! Declares com.lightningkite.butterfly.observables.binding.bind>android.widget.RatingBar
export function xRatingBarBind(this_: HTMLDivElement, stars: number, observable: ObservableProperty<number>): void {
    for(let i = 0; i < stars; i++){
        const e = document.createElement("div");
        e.classList.add("butterfly-rating-bar-star");
        this_.appendChild(e);
    }
    xDisposableUntil(xObservablePropertySubscribeBy(observable, undefined, undefined, (rating)=>{
        for(let i = 0; i < stars; i++){
            const e = this_.children.item(i) as Element;
            if(Math.round(i + 1) <= Math.round(rating)){
                e.classList.add("butterfly-rating-bar-star-on");
            } else {
                e.classList.remove("butterfly-rating-bar-star-on");
            }
        }
    }), xViewRemovedGet(this_));
}



//! Declares com.lightningkite.butterfly.observables.binding.bindFloat>android.widget.RatingBar
export function xRatingBarBindFloatMutable(this_: HTMLDivElement, stars: number, observable: MutableObservableProperty<number>): void {
    xRatingBarBindMutable(this_, stars, observable);
}


//! Declares com.lightningkite.butterfly.observables.binding.bindFloat>android.widget.RatingBar
export function xRatingBarBindFloat(this_: HTMLDivElement, stars: number, observable: ObservableProperty<number>): void {
    xRatingBarBind(this_, stars, observable);
}

