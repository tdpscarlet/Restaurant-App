import React from 'react';

import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Sed est magna, rutrum ac ultricies et, pharetra id ipsum.</p>
        </div>
        <p className="p__opensans">Vivamus hendrerit elit vitae eros lobortis, sit amet consectetur velit sodales. Nulla vel efficitur mi. Curabitur id molestie lacus, id vulputate nisl.</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
