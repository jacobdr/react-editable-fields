"use strict";
var React = require('react');
var _a = require('@kadira/storybook'), storiesOf = _a.storiesOf, action = _a.action;
var src_1 = require('../../src');
storiesOf('<EditableField />', module)
    .add('with a text', function () { return (React.createElement(src_1.EditableField, {initialValue: "TESTING THE INITIAL VALUE", saveHandler: action("SOMETHING CALLED SAVE")})); });
storiesOf('<EditableInlineField />', module)
    .add('with a text', function () { return (React.createElement(src_1.EditableInlineField, {initialValue: "TESTING THE INITIAL VALUE", saveHandler: action("SOMETHING CALLED SAVE")})); });
//# sourceMappingURL=EditableInlineField.story.js.map