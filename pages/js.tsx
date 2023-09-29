import Vue, { Component } from 'vue';

const JSPage: Component = {
  layout: 'CustomLayout',
  render() {
    return (
      <div>
        <h1>JS Page</h1>
        {/* The content of the JS page goes here */}
      </div>
    )
  },
}

export default JSPage as Vue.ComponentOptions<Vue>
