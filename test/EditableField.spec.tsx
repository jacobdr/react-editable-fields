// import 'source-map-support/register';
// import * as React from 'react';
// import * as ReactTestUtils from 'react-addons-test-utils';
// import * as ReactDOM from 'react-dom';
// import { OverlayTrigger, Input } from 'react-bootstrap';
// import { expect } from 'chai';
// import { mount } from 'enzyme';
// import { EditableField } from '../src/EditableField';
// import { spy } from 'sinon';
// import * as sinon from 'sinon';
//
//
// describe(`<EditableField />`, function() {
//     it(`Should fail`, function() {
//         expect(true).to.be.true;
//         expect(true).to.be.true;
//         expect(true).to.be.false;
//         expect(null).to.not.be.undefined;
//     });
//
//     it('Calls componentDidMount on load', sinon.test(() => {
//         let testMount = spy(EditableField.prototype, 'componentDidMount');
//         const wrapper = mount(<EditableField initialValue={"test"}/>);
//         expect((EditableField.prototype.componentDidMount as any).calledOnce).to.equal(true);
//     }));
//
//     it('Displays the initial value ', () => {
//         let initialValue = "this is the value that the input is initialized with";
//         const wrapper = mount( <EditableField initialValue={initialValue} /> );
//         expect((wrapper.props() as any).initialValue).to.equal(initialValue);
//     });
//
//     it('Calls the save handler when the user saves the input', sinon.test(() => {
//         let initialValue = "this is the value that the input is initialized with";
//         let saveHandler = ()=>{};
//         let handlerSpy = spy(saveHandler);
//         const wrapper = mount(<EditableField initialValue={initialValue} saveHandler={saveHandler} />);
//         let stringToChangeTo = 'My new value';
//         expect(wrapper.state().value).to.equal(initialValue);
//         const overlayTrigger = wrapper.find(Input);
//         const userInputBox = wrapper.find("input");
//         userInputBox.simulate('click');
//         userInputBox.simulate('change', {target: {value: stringToChangeTo}});
//         // expect(wrapper.state().value).to.equal(stringToChangeTo);
//         // expect((wrapper.props() as any).initialValue).to.equal(initialValue);
//         // const inputButtonIcon = wrapper.find("#saveCancelButtonPopover");
//         // const saveButton =  wrapper.find("[bsStyle='primary']'");
//         // // let allChildren = wrapper.children().debug();
//         // console.log("DEBUG", {saveButton});
//         // saveButton.simulate('click');
//         // expect(handlerSpy.callCount).to.equal(1);
//     }));
//
//     it.skip('Does not call the save handler when the user presses the cancel button', () => {
//         let initialValue = "this is the value that the input is initialized with";
//         const wrapper = mount( <EditableField initialValue={initialValue} /> );
//         expect((wrapper.props() as any).initialValue).to.equal(initialValue);
//         console.log("wrapper.find('input')", wrapper.find('input'));
//     });
//
//     it.skip('Does not call the save handler when the user presses the cancel button', () => {
//         let initialValue = "this is the value that the input is initialized with";
//         const wrapper = mount( <EditableField initialValue={initialValue} /> );
//         expect((wrapper.props() as any).initialValue).to.equal(initialValue);
//         console.log("wrapper.find('input')", wrapper.find('input'));
//     });
//
// })
