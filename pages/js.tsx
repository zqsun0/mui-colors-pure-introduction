import Vue, { Component } from 'vue'
import RedList from '~/components/RedList'

const JSPage: Component = {
  layout: 'CustomLayout',
  render() {
    return (
      <div>
        <h1>JS Page</h1>
        <RedList from="js" />
      </div>
    )
  },
}

export default JSPage as Vue.ComponentOptions<Vue>
