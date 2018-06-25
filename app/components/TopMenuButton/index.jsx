import React from 'react';
import PropTypes from 'prop-types';
import { TopMenuButtonWrapper } from './style';

const TopMenuButton = (props) => (
  <TopMenuButtonWrapper onClick={props.onClick}>
    <text>{props.title}</text>
  </TopMenuButtonWrapper>
  );

TopMenuButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default TopMenuButton;
