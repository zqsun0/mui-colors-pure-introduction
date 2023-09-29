import Vue, { Component } from 'vue';

const CssPage: Component = {
  layout: 'CustomLayout',
  render() {
    return (
      <div>
        <h1>Css Page</h1>
        {/* The content of the JS page goes here */}
      </div>
    )
  },
}

export default CssPage as Vue.ComponentOptions<Vue>
