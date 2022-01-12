import React, {Fragment} from 'react';
import Hero from './Hero';
import Carousel from './Carousel';
import Description from './Description';
import ServiceBanner from './ServiceBanner';
import Testimonial from './Testimonial';

function Home() {
  return (
<Fragment>
	<Hero />
	<Carousel />
	<Description />
	<ServiceBanner />
	<Testimonial />
</Fragment>
  );
}

export default Home;
