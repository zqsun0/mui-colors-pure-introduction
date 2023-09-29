import Vue, { Component } from 'vue';

const ScssPage: Component = {
  layout: 'CustomLayout',
  render() {
    return (
      <div>
        <h1>ScssPage</h1>
        {/* The content of the JS page goes here */}
      </div>
    )
  },
}

export default ScssPage as Vue.ComponentOptions<Vue>
