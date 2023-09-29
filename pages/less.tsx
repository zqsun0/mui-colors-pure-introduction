import Vue, { Component } from 'vue';

const LessPage: Component = {
  layout: 'CustomLayout',
  render() {
    return (
      <div>
        <h1>LessPage</h1>
        {/* The content of the JS page goes here */}
      </div>
    )
  },
}

export default LessPage as Vue.ComponentOptions<Vue>
