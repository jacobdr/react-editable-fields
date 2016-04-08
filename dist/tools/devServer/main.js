"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_dom_1 = require('react-dom');
var src_1 = require('../../src');
var DebugComponent = (function (_super) {
    __extends(DebugComponent, _super);
    function DebugComponent(props) {
        _super.call(this, props);
    }
    DebugComponent.prototype.componentWillReceiveProps = function (nextProps) {
        console.log("Debug component componentWillReceiveProps", { nextProps: nextProps });
    };
    DebugComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {onClick: function () { console.log("CLICKED", { this: _this }); }}, React.createElement("h3", null, " Debug Content: "), "The current text value: ", JSON.stringify(this.props && this.props.editableFieldInput && this.props.editableFieldInput.state)));
    };
    return DebugComponent;
}(React.Component));
var Container = (function (_super) {
    __extends(Container, _super);
    function Container(props) {
        var _this = this;
        _super.call(this, props);
        this.testGlobalReference = "testGlobalReference";
        this.updateOtherContainer = function (incomingRef) {
            console.log("updateOtherContainer called", { incomingRef: incomingRef });
            _this.setState({ testGlobalReference: incomingRef });
        };
        this.state = {
            testGlobalReference: null,
        };
    }
    Container.prototype.render = function () {
        var _this = this;
        var firstExample = (React.createElement("div", null, React.createElement("h1", null, " First Example"), React.createElement(src_1.EditableInlineField, {initialValue: 'initial value for the first example', saveHandler: null})));
        var secondExample = (React.createElement("div", null, React.createElement("h1", null, " Second Example"), React.createElement(src_1.EditableField, {initialValue: "this is the preliminary variable", saveHandler: function (e) { return console.log("Saved handler called: ", e); }}), React.createElement(DebugComponent, {editableFieldInput: this.state.testGlobalReference}), React.createElement("h4", {onClick: function (event) {
            console.log("Clicked h4", { "this.testGlobalReference": _this.testGlobalReference });
        }}, " Click test")));
        var thirdExample = (React.createElement("div", null, React.createElement("h1", null, " Third Example"), React.createElement(src_1.EditableField, {initialValue: new Date(), saveHandler: function (e) { return console.log("Saved handler called: ", e); }}), React.createElement(DebugComponent, {editableFieldInput: this.state.testGlobalReference}), React.createElement("h4", {onClick: function (event) {
            console.log("Clicked h4", { "this.testGlobalReference": _this.testGlobalReference });
        }}, " Click test")));
        var fourthExample = (React.createElement("div", null, React.createElement("h1", null, " Fourth Example -- Has to be another date "), React.createElement(src_1.EditableField, {initialValue: new Date(), requireSameTypeOnSave: true, saveHandler: function (e) { return console.log("Saved handler called: ", e); }}), React.createElement(DebugComponent, {editableFieldInput: this.state.testGlobalReference}), React.createElement("h4", {onClick: function (event) {
            console.log("Clicked h4", { "this.testGlobalReference": _this.testGlobalReference });
        }}, " Click test")));
        return (React.createElement("div", null, firstExample, secondExample, thirdExample, fourthExample));
    };
    return Container;
}(React.Component));
react_dom_1.render(React.createElement(Container, null), document.getElementById('root'));
//# sourceMappingURL=main.js.map