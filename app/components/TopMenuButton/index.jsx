import React from 'react';
import PropTypes from 'prop-types';
import { TopMenuButtonWrapper } from './style';

const TopMenuButton = (props) => (
  <TopMenuButtonWrapper onClick={props.onClick}>
    <img src={props.icon} title={props.title} />
  </TopMenuButtonWrapper>
  );

TopMenuButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default TopMenuButton;
