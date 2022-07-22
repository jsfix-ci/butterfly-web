import {
    MonoTypeOperatorFunction,
    NextObserver,
    ObservableInput,
    SubscriptionLike,
    defer,
    from,
    observable,
    Observable,
} from "rxjs";
import {filter, retryWhen} from "rxjs/operators";

export class SingleObserver<T> implements NextObserver<T> {

    public readonly action: (result: T | null, error: any | null) => void

    public constructor(action: (result: T | null, error: any | null) => void) {
        this.action = action
    }

    error(err: any): void {
        this.action(null, err);
    }

    next(value: T): void {
        this.action(value, null);
    }
}

export function doOnSubscribe<T>(action: (observer: SubscriptionLike) => void): MonoTypeOperatorFunction<T> {
    return (input: Observable<T>): Observable<T> => {
        return new Observable<T>(subscriber => {
            action(subscriber)
            return input.subscribe(subscriber);
        });
    }
}
export function doOnDispose<T>(action: (observer: SubscriptionLike) => void): MonoTypeOperatorFunction<T> {
    return (input: Observable<T>): Observable<T> => {
        return new Observable<T>(subscriber => {
            action(subscriber)
            const sub = input.subscribe(subscriber);
            return {
                unsubscribe() {
                    action(subscriber);
                    sub.unsubscribe();
                }
            };
        });
    }
}

export function rxRetryWhenAlt<T>(action: (observable: Observable<any>)=>ObservableInput<any>): MonoTypeOperatorFunction<T> {
    return retryWhen((x)=>from(action(x)))
}
