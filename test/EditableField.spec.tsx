import 'source-map-support/register';
// import * as g from './setupBrowser'
import * as React from 'react'
import { expect } from 'chai';
import { mount } from 'enzyme';
import { EditableField } from '../src/EditableField';
import {spy} from 'sinon';
import * as sinon from 'sinon'

describe(`EditableField`, function() {
    it(`Should fail`, function() {
        expect(true).to.be.true;
        expect(true).to.be.true;
        expect(true).to.be.false;
        expect(null).to.not.be.undefined;
    });

    it('Calls componentDidMount on load', sinon.test(() => {
        // let testMount = spy(EditableField.prototype, 'componentDidMount');
        // const wrapper = mount(<EditableField initialValue={"test"}/>);
        // expect((EditableField.prototype.componentDidMount as any).calledOnce).to.equal(true);
    }));

    it('Displays the initial value ', () => {
        let initialValue = "this is the value that the input is initialized with";
        const wrapper = mount(<EditableField initialValue={initialValue}/>);
        expect(wrapper.props()).to.equal(initialValue);
        console.log("wrapper.find('input')", wrapper.find('input'));
        // expect()
    });

})
