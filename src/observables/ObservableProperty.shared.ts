// Generated by Butterfly TypeScript converter - this file will be overwritten.
// File: observables/ObservableProperty.shared.kt
// Package: com.lightningkite.butterfly.observables
import { Observable } from 'rxjs'

//! Declares com.lightningkite.butterfly.observables.ObservableProperty
export abstract class ObservableProperty<T> {
    protected constructor() {
    }
    
    public abstract readonly value: T;
    
    public abstract readonly onChange: Observable<T>;
    
}


