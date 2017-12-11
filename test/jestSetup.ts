// Make Enzyme functions available in all test files without importing
import { configure } from 'enzyme';
// shallow, render, mount
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Skip createElement warnings but fail tests on any other warning
console.error = (message) => {
    if (!/(React.createElement: type should not be null)/.test(message)) {
        throw new Error(message);
    }
};
