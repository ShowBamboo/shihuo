import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { InfoWrap } from "./styledDetail";

const mapState = state => ({
  data: state.reducers.data
});

function Info(props) {
  const [state, setstate] = useState({});

  useEffect(() => {
    setstate(props.data);
  }, [props.data]);

  return (
    <InfoWrap>
      <div className="h2">{state.title}</div>
      <div className="h3">
        <div className="t1">
          Air Force 1于1982年推出，由Nike公司的传奇设计师Bruce Kilgo...
        </div>
        <div className="t2">
          <a href="javascripts:;" className="more show_app_layer">
            详情
            <img
              src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/dt_5edb752.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="border-area"></div>
      <div className="koubei-pingce">
        <div className="kp-list">
          <img
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/kb-icon_e6558f2.png"
            alt=""
          />
          全网口碑<s>(12553)</s>
        </div>
        <a href="javascripts:;" className="kp-list">
          <span>
            <i></i>
            <img
              src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/pc-icon_54fdee1.png"
              alt=""
            />
          </span>
          识货测评<s>(514)</s>
        </a>
      </div>
      <div className="border-area"></div>
      <a href="javascripts:;" className="activity-area clearfix">
        <span className="t1">
          <i>折</i>识货独享 最低只需399.00元
        </span>
        <s>
          8个活动进行中
          <img
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/jt_1aeb7dc.png"
            alt=""
          />
        </s>
      </a>
      <div className="border-area" id="supplist_id_val" gid="134"></div>
      <div className="tag-chooes-area">
        <div className="tag-list" id="down_size">
          <img
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/s-icon-1_f16b4e3.png"
            alt=""
          />
          <span className="font">
            <span className="s-1">筛选尺码</span>
            <span className="s-2">选择您的尺码</span>
          </span>
        </div>
        <div className="tag-list" id="down_dy">
          <img
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/s-icon-2_43466af.png"
            alt=""
          />
          <span className="font">
            <span className="s-1">点击订阅</span>
            <span className="s-2">获取最低价</span>
          </span>
        </div>
      </div>
      <a href="javascripts:;" className="how-zp">
        <img
          className="i1"
          src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/how-icon_844c490.png"
          alt=""
        />
        识货如何做到正品保障？
        <s>
          查看详情
          <img
            className="i2"
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/jt_1aeb7dc.png"
            alt=""
          />
        </s>
      </a>
      <div className="border-area"></div>
    </InfoWrap>
  );
}

export default connect(mapState, null)(Info);
