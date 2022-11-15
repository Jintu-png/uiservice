import React from 'react';
import BusinessInfo from '../components/panels/businessinfo/businessinfo';
import TopNavbar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer, BoxContainer } from '../components/containers/containers';
import { getUserType } from '../utils/CommonUtils';

const BusinessPage = (props) => {
    return(
      <AppContainer>
      <TopNavbar />
      <SplitPaneContainer
          left={<SideNavBar userType={getUserType()}/>}
          right={
              <BoxContainer>
                  <BusinessInfo  action={props?.id} />
              </BoxContainer>    
          }
      />
  </AppContainer>
  )
}

export default BusinessPage;