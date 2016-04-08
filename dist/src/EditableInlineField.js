"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require('source-map-support/register');
var React = require('react');
var react_bootstrap_1 = require('react-bootstrap');
var EditableInlineField = (function (_super) {
    __extends(EditableInlineField, _super);
    function EditableInlineField(props) {
        var _this = this;
        _super.call(this, props);
        this.userClickOutsideInput = function (event) {
            _this.setState({
                textInputCurrentlyFocused: false,
                inputCurrentlyVisible: false
            });
        };
        this.handleChangeToInput = function (event) {
            switch (typeof event.target.value) {
                case 'string':
                    _this.setState({
                        userTextInput: event.target.value.trim(),
                        textEnteredSinceFocus: true,
                        textEnteredNotSaved: true,
                    });
                default:
                    _this.setState({
                        userTextInput: event.target.value,
                        textEnteredSinceFocus: true,
                        textEnteredNotSaved: true,
                    });
            }
        };
        this.cancel = function (event) {
            _this.userClickOutsideInput(event);
            _this.setState({
                userTextInput: _this.props.initialValue,
                textEnteredNotSaved: false,
            });
        };
        this.saveUserInput = function (event) {
            _this.setState({
                textInputCurrentlyFocused: false,
                inputCurrentlyVisible: false,
                textEnteredSinceFocus: false,
                textEnteredNotSaved: false,
            });
            _this.props.saveHandler(_this.state.userTextInput);
        };
        this.state = {
            userTextInput: this.props.initialValue,
            textEnteredSinceFocus: false,
            textEnteredNotSaved: false,
            textInputCurrentlyFocused: false,
            inputCurrentlyVisible: false,
        };
    }
    EditableInlineField.prototype.componentDidMount = function () { };
    EditableInlineField.prototype.submit = function (event) { };
    EditableInlineField.prototype.render = function () {
        var _this = this;
        var confirmationButtonGroup = (React.createElement(react_bootstrap_1.ButtonGroup, null, React.createElement(react_bootstrap_1.Button, {bsStyle: 'primary', className: 'btn-sm', onClick: this.saveUserInput}, React.createElement("i", {block: true, className: 'glyphicon glyphicon-ok'})), React.createElement(react_bootstrap_1.Button, {bsStyle: 'default', className: 'btn-sm', onClick: this.cancel}, React.createElement("i", {block: true, className: 'glyphicon glyphicon-remove'}))));
        var unsavedDataWarning = (React.createElement("span", {id: "helpBlock2"}, React.createElement("span", {className: "has-warning"}, React.createElement("span", {className: "help-block"}, "Unsaved changes since last edit"))));
        var inputFormAndButtonWrapper = (React.createElement(react_bootstrap_1.ButtonToolbar, null, React.createElement(react_bootstrap_1.ButtonGroup, null, React.createElement("input", {autoFocus: true, className: "input-block-level", type: "text", value: this.state.userTextInput, placeholder: "Empty", onChange: this.handleChangeToInput, "aria-describedby": "helpBlock2"})), confirmationButtonGroup));
        var pencilEditButton = (React.createElement(react_bootstrap_1.ButtonGroup, null, React.createElement(react_bootstrap_1.Button, {bsStyle: 'default', className: 'btn', onClick: function () { _this.setState({ inputCurrentlyVisible: true }); }}, React.createElement("i", {block: true, className: 'glyphicon glyphicon-pencil'}))));
        var linkToInputFieldEntry = (React.createElement("div", null, this.props.initialValue, React.createElement("a", {onClick: function () { _this.setState({ inputCurrentlyVisible: true }); }}, React.createElement("i", {style: { paddingLeft: "1em" }, block: true, className: 'glyphicon glyphicon-pencil'}))));
        return (React.createElement("div", null, (function () {
            switch (_this.state.inputCurrentlyVisible) {
                case false: return linkToInputFieldEntry;
                case true: return inputFormAndButtonWrapper;
                default: return null;
            }
        })(), (function () { if (_this.state.textEnteredNotSaved)
            return unsavedDataWarning; })()));
    };
    EditableInlineField.displayName = 'EditableInlineField';
    EditableInlineField.propTypes = {
        initialValue: React.PropTypes.string.isRequired,
        saveHandler: React.PropTypes.func
    };
    return EditableInlineField;
}(React.Component));
exports.EditableInlineField = EditableInlineField;
//# sourceMappingURL=EditableInlineField.js.map