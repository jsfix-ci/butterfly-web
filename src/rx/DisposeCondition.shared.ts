// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: rx/DisposeCondition.shared.kt
// Package: com.lightningkite.khrysalis.rx
import { DisposableLambda } from './DisposeCondition.actual'
import { SubscriptionLike } from 'rxjs'

//! Declares com.lightningkite.khrysalis.rx.DisposeCondition
export class DisposeCondition {
    public readonly call:  ((a: SubscriptionLike) => void);
    public constructor(call:  ((a: SubscriptionLike) => void)) {
        this.call = call;
    }
}

//! Declares com.lightningkite.khrysalis.rx.and>com.lightningkite.khrysalis.rx.DisposeCondition
export function xDisposeConditionAnd(this_: DisposeCondition, other: DisposeCondition): DisposeCondition { 
    return andAllDisposeConditions([this_, other]); 
}

//! Declares com.lightningkite.khrysalis.rx.andAllDisposeConditions
export function andAllDisposeConditions(list: Array<DisposeCondition>): DisposeCondition { 
    return new DisposeCondition((it: SubscriptionLike): void => {
            let disposalsLeft = list.length;
            
            for (const item of list) {
                item.call(new DisposableLambda((): void => {
                            disposalsLeft = disposalsLeft - 1;
                            if (disposalsLeft === 0) { it.unsubscribe() }
                }));
            }
    }); 
}

//! Declares com.lightningkite.khrysalis.rx.or>com.lightningkite.khrysalis.rx.DisposeCondition
export function xDisposeConditionOr(this_: DisposeCondition, other: DisposeCondition): DisposeCondition { 
    return new DisposeCondition((it: SubscriptionLike): void => {
            this_.call(it); other.call(it);
    }); 
}

