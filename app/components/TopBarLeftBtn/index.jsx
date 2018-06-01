import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TopBarLeftBtnWrapper, TopLeftMenuBtn } from './style';



class TopBarLeftBtn extends React.Component{

  render(){
    return (
      <TopBarLeftBtnWrapper>
          <TopLeftMenuBtn onClick={_=>{
          }}>
              
          </TopLeftMenuBtn>
        </TopBarLeftBtnWrapper>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopBarLeftBtn);
