import { mount } from "@vue/test-utils";
import Button from "./index.vue";
describe("Button", () => {
  test("render text", () => {
    const text = "Login";
    const wrapper = mount(Button, {
      props: {
        text,
      },
    });
    expect(wrapper.text()).toContain(text);
  });
});
