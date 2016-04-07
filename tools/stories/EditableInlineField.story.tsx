import * as React from 'react';
let {storiesOf, action} = require('@kadira/storybook')
import {EditableField, EditableInlineField} from '../../src'

storiesOf('<EditableField />', module)
    .add('with a text', () => (
        <EditableField initialValue={"TESTING THE INITIAL VALUE"} saveHandler={action("SOMETHING CALLED SAVE") }/>
    ))

storiesOf('<EditableInlineField />', module)
    .add('with a text', () => (
        <EditableInlineField initialValue={"TESTING THE INITIAL VALUE"} saveHandler={action("SOMETHING CALLED SAVE") }/>
    ))
