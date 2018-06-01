import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import images from "components/images";

import TopBarLeftBtn from "../TopBarLeftBtn";
import TopBarMiddleContent from "../TopBarMiddleContent";
import TopBarRightBtn from "../TopBarRightBtn";
import { TopMenuBarWrapper } from "./style";

export default function TopMenuBar(props) {
  return (
    <TopMenuBarWrapper>
      <TopBarLeftBtn />
      {<TopBarMiddleContent />}
      {<TopBarRightBtn />}
    </TopMenuBarWrapper>
  );
}
