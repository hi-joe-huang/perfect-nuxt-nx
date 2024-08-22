import { mount } from '@vue/test-utils';
import Foobar from './Foobar.vue';

describe('Foobar', () => {
  it('renders properly', () => {
    const wrapper = mount(Foobar, {});
    expect(wrapper.text()).toContain('Welcome to Foobar');
  });
});
