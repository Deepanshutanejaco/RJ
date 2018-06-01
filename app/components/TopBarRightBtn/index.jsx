import React from 'react';
import { TopBarRightBtnWrapper, TopRightBtn } from './style';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
 function TopBarRightBtn(props){
  return (
        <TopBarRightBtnWrapper >
          <TopRightBtn>
      </TopRightBtn>
    </TopBarRightBtnWrapper>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

  
export default connect(mapStateToProps, mapDispatchToProps)(TopBarRightBtn);

