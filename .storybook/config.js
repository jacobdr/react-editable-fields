import { configure } from '@kadira/storybook';

// function loadStories() {
//   require('../tools/stories/button');
//   // require as many stories as you need.
// }
const req = require.context('../tools', true, /\.story\.\.js$/)
function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
