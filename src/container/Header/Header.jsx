import React from 'react';

import { images } from '../../constants'
import {SubHeading} from '../../components'
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Vestibulum dapibus libero non mi ullamcorper, at pretium lacus ultrices. Aenean tincidunt sit amet mi quis elementum. Ut interdum dolor sit amet blandit viverra. Praesent condimentum risus nisl, eget ullamcorper odio lacinia in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
