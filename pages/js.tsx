import Vue, { Component } from 'vue'
import ColorList from '~/components/ColorList'
import redList from '~/ts/red'
import pinkList from '~/ts/pink'
import purpleList from '~/ts/purple'
import deepPurpleList from '~/ts/deepPurple'
import indigoList from '~/ts/indigo'
import blueList from '~/ts/blue'
import lightBlueList from '~/ts/lightBlue'
import cyanList from '~/ts/cyan'
import tealList from '~/ts/teal'
import greenList from '~/ts/green'
import lightGreenList from '~/ts/lightGreen'
import limeList from '~/ts/lime'
import yellowList from '~/ts/yellow'
import amberList from '~/ts/amber'
import orangeList from '~/ts/orange'
import deepOrangeList from '~/ts/deepOrange'
import brownList from '~/ts/brown'
import greyList from '~/ts/grey'
import blueGreyList from '~/ts/blueGrey'

const JSPage: Component = {
  layout: 'CustomLayout',
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={redList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={pinkList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={purpleList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={deepPurpleList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={indigoList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={blueList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={lightBlueList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={cyanList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={tealList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={greenList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={lightGreenList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={limeList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={yellowList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={amberList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={orangeList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={deepOrangeList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={brownList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={greyList} />
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <ColorList from="js" colors={blueGreyList} />
          </div>
        </div>
      </div>
    )
  },
}

export default JSPage as Vue.ComponentOptions<Vue>
