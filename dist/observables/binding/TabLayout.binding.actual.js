"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Khrysalis TypeScript converter
// File: observables/binding/TabLayout.binding.actual.kt
// Package: com.lightningkite.khrysalis.observables.binding
const ObservableProperty_ext_shared_1 = require("../ObservableProperty.ext.shared");
const DisposeCondition_actual_1 = require("../../rx/DisposeCondition.actual");
const uuid_1 = require("uuid");
const Language_1 = require("../../kotlin/Language");
//! Declares com.lightningkite.khrysalis.observables.binding.bind>com.google.android.material.tabs.TabLayout
function xTabLayoutBind(this_, tabs, selected, allowReselect = false, toString) {
    this_.innerHTML = "";
    const myName = uuid_1.v4();
    const selectedIndicator = document.createElement("div");
    selectedIndicator.classList.add("khrysalis-tab-indicator");
    this_.appendChild(selectedIndicator);
    const tabList = document.createElement("div");
    tabList.classList.add("khrysalis-tab-list");
    this_.appendChild(tabList);
    let index = 0;
    for (const tab of tabs) {
        const myIndex = index;
        const tabElement = document.createElement("label");
        tabElement.innerText = toString(tab);
        tabElement.classList.add("khrysalis-tab");
        tabElement.htmlFor = myName + myIndex.toString();
        tabList.appendChild(tabElement);
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.id = myName + myIndex.toString();
        radio.name = myName;
        radio.onchange = (ev) => {
            const item = tabs[myIndex];
            if (allowReselect || selected.value !== item) {
                selected.value = item;
            }
        };
        tabList.appendChild(radio);
        index++;
    }
    DisposeCondition_actual_1.xDisposableUntil(ObservableProperty_ext_shared_1.xObservablePropertySubscribeBy(selected, undefined, undefined, (item) => {
        const index = tabs.findIndex((x) => Language_1.safeEq(item, x));
        tabList.children.item(index * 2 + 1).checked = true;
        const tab = tabList.children.item(index * 2);
        selectedIndicator.style.left = tab.offsetLeft.toString() + "px";
        selectedIndicator.style.width = tab.offsetWidth.toString() + "px";
    }), DisposeCondition_actual_1.xViewRemovedGet(this_));
}
exports.xTabLayoutBind = xTabLayoutBind;
//! Declares com.lightningkite.khrysalis.observables.binding.bind>com.google.android.material.tabs.TabLayout
function xTabLayoutBindIndex(this_, tabs, selected, allowReselect = false) {
    this_.innerHTML = "";
    const myName = uuid_1.v4();
    const selectedIndicator = document.createElement("div");
    selectedIndicator.classList.add("khrysalis-tab-indicator");
    this_.appendChild(selectedIndicator);
    const tabList = document.createElement("div");
    tabList.classList.add("khrysalis-tab-list");
    this_.appendChild(tabList);
    let index = 0;
    for (const tab of tabs) {
        const myIndex = index;
        const tabElement = document.createElement("label");
        tabElement.innerText = tab;
        tabElement.classList.add("khrysalis-tab");
        tabElement.htmlFor = myName + myIndex.toString();
        tabList.appendChild(tabElement);
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.id = myName + myIndex.toString();
        radio.name = myName;
        radio.onchange = (ev) => {
            if (allowReselect || selected.value !== myIndex) {
                selected.value = myIndex;
            }
        };
        tabList.appendChild(radio);
        index++;
    }
    DisposeCondition_actual_1.xDisposableUntil(ObservableProperty_ext_shared_1.xObservablePropertySubscribeBy(selected, undefined, undefined, (index) => {
        tabList.children.item(index * 2 + 1).checked = true;
        const tab = tabList.children.item(index * 2);
        selectedIndicator.style.left = tab.offsetLeft.toString() + "px";
        selectedIndicator.style.width = tab.offsetWidth.toString() + "px";
    }), DisposeCondition_actual_1.xViewRemovedGet(this_));
}
exports.xTabLayoutBindIndex = xTabLayoutBindIndex;
//# sourceMappingURL=TabLayout.binding.actual.js.map