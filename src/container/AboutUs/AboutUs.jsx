import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Phasellus quis ipsum quis nunc placerat consectetur. Aliquam felis libero, porttitor sit amet dapibus at, venenatis in libero. Pellentesque eget porttitor orci, ac hendrerit eros. Etiam tincidunt metus luctus purus semper, at blandit quam tincidunt. Praesent augue magna, scelerisque eget rhoncus in, congue vitae sem.</p>
        <button className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Cras non eros ut est auctor condimentum. Aenean gravida felis lacus, tristique aliquet tellus interdum et. Nam nisi libero, accumsan vel dapibus et, aliquam at diam. Aenean suscipit, lorem ac sagittis rutrum, nibh massa accumsan augue, non maximus risus nunc ac justo. Sed ut egestas lorem. Etiam eget est at libero porttitor auctor at nec purus. Nulla facilisi.</p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
