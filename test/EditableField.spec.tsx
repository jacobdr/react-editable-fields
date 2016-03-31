import 'source-map-support/register';
import { expect } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react'
import { EditableField } from '../src/EditableField';
import {spy} from 'sinon';

describe(`EditableField`, function() {
    it(`Should fail`, function() {
        expect(true).to.be.true;
        expect(true).to.be.true;
        expect(true).to.be.false;
        expect(null).to.not.be.undefined;
    });

    it('calls componentDidMount', () => {
        spy(EditableField.prototype, 'componentDidMount');
        const wrapper = mount(<EditableField />);
        expect((EditableField.prototype.componentDidMount as any).calledOnce).to.equal(true);
    });

    it('calls componentDidMount', () => {
        spy(EditableField.prototype, 'componentDidMount');
        const wrapper = mount(<EditableField />);
        expect((EditableField.prototype.componentDidMount as any).calledOnce).to.equal(true);
    });

})
