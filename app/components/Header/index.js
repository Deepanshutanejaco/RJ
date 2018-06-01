import React from 'react';
import { FormattedMessage } from 'react-intl';

import TopMenuBar from 'components/TopMenuBar';
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="header">
      <TopMenuBar />
      </div>
    );
  }
}

export default Header;
