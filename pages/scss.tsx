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

const ScssPage: Component = {
  layout: 'CustomLayout',
  render() {
    return (
      <div>
        <div>
          <div class="row">
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={redList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={pinkList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={purpleList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={deepPurpleList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={indigoList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={blueList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={lightBlueList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={cyanList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={tealList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={greenList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={lightGreenList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={limeList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={yellowList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={amberList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={orangeList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={deepOrangeList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={brownList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={greyList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList from="sass" colors={blueGreyList} />
            </div>
          </div>
        </div>
      </div>
    )
  },
}

export default ScssPage as Vue.ComponentOptions<Vue>
