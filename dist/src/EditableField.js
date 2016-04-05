"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require('source-map-support/register');
var _ = require('underscore');
var ReactDOM = require('react-dom');
var React = require('react');
var Utils_1 = require('./Utils');
var react_bootstrap_1 = require('react-bootstrap');
var EditableField = (function (_super) {
    __extends(EditableField, _super);
    function EditableField(props) {
        var _this = this;
        _super.call(this, props);
        this.handleChangeToInput = function (event) {
            switch (typeof event.target.value) {
                case 'string':
                    _this.setState({
                        value: event.target.value.trim(),
                        textEnteredSinceFocus: true,
                        textEnteredNotSaved: true,
                    });
                default:
                    _this.setState({
                        value: event.target.value,
                        textEnteredSinceFocus: true,
                        textEnteredNotSaved: true,
                    });
            }
        };
        this.handleInputBlur = function (event) {
            _this.setState({
                textEnteredSinceFocus: false,
                showUserInputBox: !_this.state.showUserInputBox,
                value: _this.state.value.trim && _this.state.value.trim() || _this.state.value,
            });
        };
        this.save = function (event) {
            _this.setState({
                textEnteredNotSaved: false,
            });
            if (!_this.props.requireSameTypeOnSave) {
                _this.setState({ value: _this.state.value });
                _this.props.saveHandler(_this.state.value);
            }
            else if (typeof _this.props.initialValue === typeof (_this.state.value)) {
                _this.setState({ value: _this.state.value });
                _this.props.saveHandler(_this.state.value);
            }
            else {
                _this.setState({ value: _this.props.initialValue });
            }
        };
        this.cancel = function (event) {
            event.preventDefault();
            event.stopPropagation();
            console.log("The instance cancel method was called");
            console.log('Cancel button called', event);
            _this.setState({
                value: _this.props.initialValue,
                textEnteredNotSaved: false,
            });
        };
        this.showUserInputBox = function () {
            console.log("showUserInputBox called");
            _this.setState({ showUserInputBox: true });
        };
        this.shouldShowDataChangeWarning = function () {
            if (_this.state.textEnteredNotSaved && (_this.state.value !== _this.props.initialValue)) {
                return true;
            }
            else
                false;
        };
        this.state = {
            value: null,
            textEnteredSinceFocus: false,
            textEnteredNotSaved: false,
            showUserInputBox: false,
        };
        switch (typeof this.props.initialValue) {
            case 'string':
                this.state = _.extend(this.state, {
                    value: this.props.initialValue,
                });
            default:
                this.state = _.extend(this.state, {
                    value: Utils_1.getProperty('initialValue.toString', this.props) && this.props.initialValue.toString() || '',
                });
        }
    }
    EditableField.prototype.componentDidMount = function () { };
    EditableField.prototype.submit = function (event) {
        event.preventDefault();
        this.save(event);
    };
    EditableField.prototype.render = function () {
        var _this = this;
        var linkToInputFieldEntry = (React.createElement("div", null, React.createElement("a", {style: { borderBottom: "1px dotted #000" }, ref: 'target'}, " ", this.state.value || '(No data entered yet)', " "), React.createElement(react_bootstrap_1.Overlay, {placement: 'bottom', show: this.shouldShowDataChangeWarning(), container: this.refs.target, target: function () { return ReactDOM.findDOMNode(_this.refs.target); }}, React.createElement(react_bootstrap_1.Tooltip, {id: 'dataNotSavedWarning', style: { display: 'table' }, className: "small"}, "Warning: You did not save or cancel your field update"))));
        var textBoxWarning = (React.createElement("div", {style: { color: 'red', marginTop: "-5px" }, className: "small"}, "Update has not been saved yet"));
        var PopupSaveButtons = (React.createElement(react_bootstrap_1.Popover, {id: "saveCancelButtonPopover"}, React.createElement(react_bootstrap_1.ButtonToolbar, {className: 'editable-buttons'}, React.createElement(react_bootstrap_1.Button, {bsStyle: 'primary', className: 'btn-sm', onClick: this.save}, React.createElement("i", {className: 'glyphicon glyphicon-ok'})), React.createElement(react_bootstrap_1.Button, {bsStyle: 'default', className: 'btn-sm', onClick: this.cancel}, React.createElement("i", {className: 'glyphicon glyphicon-remove'})))));
        var userInputTextBox = (React.createElement(react_bootstrap_1.Input, {type: 'text', placeholder: 'Empty', value: this.state.value, className: 'input-sm', onChange: this.handleChangeToInput, onBlur: this.handleInputBlur}));
        return (React.createElement("div", null, React.createElement(react_bootstrap_1.Row, null, React.createElement(react_bootstrap_1.Col, {xs: 4}, React.createElement(react_bootstrap_1.OverlayTrigger, {trigger: "focus", placement: "right", overlay: PopupSaveButtons}, React.createElement("div", {id: "test-id", onClick: this.showUserInputBox}, (function () {
            switch (_this.state.showUserInputBox) {
                case false: return linkToInputFieldEntry;
                case true: return userInputTextBox;
            }
        })(), (function () {
            switch (_this.shouldShowDataChangeWarning() && _this.state.showUserInputBox) {
                case true: return textBoxWarning;
                default: return null;
            }
        })()))))));
    };
    EditableField.displayName = 'EditableField';
    EditableField.propTypes = {
        initialValue: React.PropTypes.any.isRequired,
        saveHandler: React.PropTypes.func,
        requireSameTypeOnSave: React.PropTypes.bool,
    };
    return EditableField;
}(React.Component));
exports.EditableField = EditableField;
//# sourceMappingURL=EditableField.js.map