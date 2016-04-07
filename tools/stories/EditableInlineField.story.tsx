import * as React from 'react';
let {storiesOf, action} = require('@kadira/storybook')
import {EditableField} from '../../src/EditableField'


storiesOf('<EditableInlineField />', module)
  .add('with a text', () => (
      <EditableField initialValue={"TESTING THE INITIAL VALUE"} saveHandler={action("SOMETHING CALLED SAVE")}/>
  ))
