import React, { Component } from "react";

import { AdvertWrap } from "./styledAdvert";

export class Advert extends Component {
  render() {
    return (
      <AdvertWrap>
        <div className="advert-radius">
          <a href="javascripts:;" className="advert">
            <img
              src="http://shihuo.hupucdn.com/appHome/201902/0323/6de7db22aecf585cf2544cafd24c2bf9.png"
              alt="每日荐"
            />
          </a>
        </div>
      </AdvertWrap>
    );
  }
}

export default Advert;
