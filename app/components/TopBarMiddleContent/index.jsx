import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TopBarMiddleContentWrapper, Logo, RightContentWrapper } from './style';
import TopMenuButton from '../TopMenuButton';
//  <TopMenuButton title="Help" icon={images.helpIcon} onClick={(evt) => console.log(evt.target)} />
      
function TopBarMiddleContent(props) {
  return (
    <TopBarMiddleContentWrapper>
      <Logo></Logo>
      <RightContentWrapper>
        <TopMenuButton title="Home"  onClick={props.updateMapToIndia} />
        <TopMenuButton title="Screen"  onClick={props.toggleVisualizationWidget} />
        <TopMenuButton title="Camera"  onClick={props.downloadImageFile} />
        <TopMenuButton title="WorkSpace"  onClick={props.toggleWidgetVisibility} />
        <TopMenuButton title="Info"  onClick={()=> onInfoClick(props)} />
      </RightContentWrapper>
    </TopBarMiddleContentWrapper>
  );
}
/*
this function is used to enable/disable tooltip.
*/
function onInfoClick(props){
}

TopBarMiddleContent.propTypes = {
  
};

const mapStateToProps = (state) => ({
  info: state.getIn(['georbis', 'enableInfo']),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarMiddleContent);
