"use strict";
require('source-map-support/register');
var React = require('react');
var react_bootstrap_1 = require('react-bootstrap');
var chai_1 = require('chai');
var enzyme_1 = require('enzyme');
var EditableField_1 = require('../src/EditableField');
var sinon_1 = require('sinon');
var sinon = require('sinon');
describe("<EditableField />", function () {
    it("Should fail", function () {
        chai_1.expect(true).to.be.true;
        chai_1.expect(true).to.be.true;
        chai_1.expect(true).to.be.false;
        chai_1.expect(null).to.not.be.undefined;
    });
    it('Calls componentDidMount on load', sinon.test(function () {
        var testMount = sinon_1.spy(EditableField_1.EditableField.prototype, 'componentDidMount');
        var wrapper = enzyme_1.mount(React.createElement(EditableField_1.EditableField, {initialValue: "test"}));
        chai_1.expect(EditableField_1.EditableField.prototype.componentDidMount.calledOnce).to.equal(true);
    }));
    it('Displays the initial value ', function () {
        var initialValue = "this is the value that the input is initialized with";
        var wrapper = enzyme_1.mount(React.createElement(EditableField_1.EditableField, {initialValue: initialValue}));
        chai_1.expect(wrapper.props().initialValue).to.equal(initialValue);
    });
    it('Calls the save handler when the user saves the input', sinon.test(function () {
        var initialValue = "this is the value that the input is initialized with";
        var saveHandler = function () { };
        var handlerSpy = sinon_1.spy(saveHandler);
        var wrapper = enzyme_1.mount(React.createElement(EditableField_1.EditableField, {initialValue: initialValue, saveHandler: saveHandler}));
        var stringToChangeTo = 'My new value';
        chai_1.expect(wrapper.state().value).to.equal(initialValue);
        var overlayTrigger = wrapper.find(react_bootstrap_1.Input);
        var userInputBox = wrapper.find("input");
        userInputBox.simulate('click');
        userInputBox.simulate('change', { target: { value: stringToChangeTo } });
        // expect(wrapper.state().value).to.equal(stringToChangeTo);
        // expect((wrapper.props() as any).initialValue).to.equal(initialValue);
        // const inputButtonIcon = wrapper.find("#saveCancelButtonPopover");
        // const saveButton =  wrapper.find("[bsStyle='primary']'");
        // // let allChildren = wrapper.children().debug();
        // console.log("DEBUG", {saveButton});
        // saveButton.simulate('click');
        // expect(handlerSpy.callCount).to.equal(1);
    }));
    it.skip('Does not call the save handler when the user presses the cancel button', function () {
        var initialValue = "this is the value that the input is initialized with";
        var wrapper = enzyme_1.mount(React.createElement(EditableField_1.EditableField, {initialValue: initialValue}));
        chai_1.expect(wrapper.props().initialValue).to.equal(initialValue);
        console.log("wrapper.find('input')", wrapper.find('input'));
    });
    it.skip('Does not call the save handler when the user presses the cancel button', function () {
        var initialValue = "this is the value that the input is initialized with";
        var wrapper = enzyme_1.mount(React.createElement(EditableField_1.EditableField, {initialValue: initialValue}));
        chai_1.expect(wrapper.props().initialValue).to.equal(initialValue);
        console.log("wrapper.find('input')", wrapper.find('input'));
    });
});
//# sourceMappingURL=EditableField.spec.js.map