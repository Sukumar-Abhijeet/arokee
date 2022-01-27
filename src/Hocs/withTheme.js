/**
 *  Created By @name Sukumar_Abhijeet
 */
 import React from 'react';
import App_Theme from '../Configs/theme';
 
 const withTheme = WrappedComponent => props => {
      return <WrappedComponent theme={App_Theme} {...props} />
  };
 
  export default withTheme;