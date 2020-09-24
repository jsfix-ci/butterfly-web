// Generated by Butterfly TypeScript converter
// File: net/RxHttpAssist.actual.kt
// Package: com.lightningkite.butterfly.net
import {HttpReadResponseException, HttpResponseException} from './HttpResponseError.actual'
import {from, Observable, throwError} from 'rxjs'
import {catchError, map as rxMap, switchMap} from 'rxjs/operators'
import {parse} from "./jsonParsing";

//! Declares com.lightningkite.butterfly.net.unsuccessfulAsError
export function xSingleUnsuccessfulAsError(this_: Observable<Response>): Observable<Response> {
    return this_.pipe(rxMap((it) => {
        if (it.ok) {
            return it;
        } else {
            throw new HttpResponseException(it, undefined);
        }
    }));
}


//! Declares com.lightningkite.butterfly.net.discard
export function xSingleDiscard(this_: Observable<Response>): Observable<void> {
    return this_.pipe(
        switchMap((it) => {
            if (it.ok) {
                return xResponseDiscard(it);
            } else {
                throw new HttpResponseException(it, undefined);
            }
        })
    );
}

//! Declares com.lightningkite.butterfly.net.readJson
export function xSingleReadJson<T>(this_: Observable<Response>, T: Array<any>): Observable<T> {
    return this_.pipe(
        switchMap((it) => {
            if (it.ok) {
                return xResponseReadJson<T>(it, T);
            } else {
                throw new HttpResponseException(it, undefined);
            }
        })
    );
}

//! Declares com.lightningkite.butterfly.net.readJsonDebug
export function xSingleReadJsonDebug<T>(this_: Observable<Response>, T: Array<any>): Observable<T> {
    return this_.pipe(
        switchMap((it) => {
            if (it.ok) {
                return xResponseReadJsonDebug<T>(it, T);
            } else {
                throw new HttpResponseException(it, undefined);
            }
        })
    );
}

//! Declares com.lightningkite.butterfly.net.readText
export function xSingleReadText(this_: Observable<Response>): Observable<String> {
    return this_.pipe(
        switchMap((it) => {
            if (it.ok) {
                return xResponseReadText(it);
            } else {
                throw new HttpResponseException(it, undefined);
            }
        })
    );
}

//! Declares com.lightningkite.butterfly.net.readData
export function xSingleReadData(this_: Observable<Response>): Observable<Int8Array> {
    return this_.pipe(
        switchMap((it) => {
            if (it.ok) {
                return xResponseReadData(it);
            } else {
                throw new HttpResponseException(it, undefined);
            }
        })
    );
}

//! Declares com.lightningkite.butterfly.net.readJson
export function xResponseReadJson<T>(this_: Response, T: Array<any>): Observable<T> {
    return from(this_.json()).pipe(rxMap((it) => {
        return parse(it, T)
    }));
}

//! Declares com.lightningkite.butterfly.net.readJsonDebug
export function xResponseReadJsonDebug<T>(this_: Response, T: Array<any>): Observable<T> {
    return from(this_.json()).pipe(rxMap((it) => {
        return parse(it, T)
    }));
}

//! Declares com.lightningkite.butterfly.net.discard
export function xResponseDiscard(this_: Response): Observable<void> {
    return from(this_.text()).pipe(rxMap((x)=>{}));
}

//! Declares com.lightningkite.butterfly.net.readText
export function xResponseReadText(this_: Response): Observable<String> {
    return from(this_.text());
}

//! Declares com.lightningkite.butterfly.net.readData
export function xResponseReadData(this_: Response): Observable<Int8Array> {
    return from(this_.arrayBuffer()).pipe(
        rxMap((it) => new Int8Array(it))
    );
}


//! Declares com.lightningkite.butterfly.net.readHttpException
export function xSingleReadHttpException<Element>(this_: Observable<Element>): Observable<Element> {
    return this_.pipe(catchError((err) => {
        if (err instanceof HttpResponseException) {
            return from(err.response.text())
                .pipe(rxMap((text) => {
                    throw new HttpReadResponseException(err.response, text, err.cause);
                }))
        } else {
            return throwError(err)
        }
    }));
}

