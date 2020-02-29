import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Vuetify from "vuetify/lib";

describe("HelloWorld.vue", () => {
  let localVue;
  let wrapper;
  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify, {});
    wrapper = mount(HelloWorld, {localVue})
  })

  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
