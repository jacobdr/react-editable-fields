import { configure } from '@kadira/storybook';
import '../styles/bootstrap.min.css'

const req = require.context('../tools', true, /story\.[jt]sx?$/)
function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
