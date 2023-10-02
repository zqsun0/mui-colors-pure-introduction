import Vue, { Component } from 'vue';
import ColorList from '~/components/ColorList';
import redList from '~/ts/red';
import pinkList from '~/ts/pink';
import purpleList from '~/ts/purple';
import deepPurpleList from '~/ts/deepPurple';
import indigoList from '~/ts/indigo';
import blueList from '~/ts/blue';
import lightBlueList from '~/ts/lightBlue';
import cyanList from '~/ts/cyan';
import tealList from '~/ts/teal';
import greenList from '~/ts/green';
import lightGreenList from '~/ts/lightGreen';
import limeList from '~/ts/lime';
import yellowList from '~/ts/yellow';
import amberList from '~/ts/amber';
import orangeList from '~/ts/orange';
import deepOrangeList from '~/ts/deepOrange';
import brownList from '~/ts/brown';
import greyList from '~/ts/grey';
import blueGreyList from '~/ts/blueGrey';

const LessPage: Component = {
  layout: 'CustomLayout',
  render() {
    return (
      <div>
        <div>
          <div class="row">
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={redList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={pinkList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={purpleList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={deepPurpleList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={indigoList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={blueList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={lightBlueList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={cyanList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={tealList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={greenList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={lightGreenList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={limeList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={yellowList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={amberList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={orangeList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={deepOrangeList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={brownList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={greyList} />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <ColorList  from="less" colors={blueGreyList} />
            </div>
          </div>
        </div>
      </div>
    )
  },
}

export default LessPage as Vue.ComponentOptions<Vue>
