import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index1 from './Pages/Index1';
import Index2 from './Pages/Index2';


import About from './Pages/About';
import Ourservices from './Pages/Ourservices';
import Faq from './Pages/Faq';
import Booking from './Pages/Booking';
import Error from './Pages/Error';
import Calendar from './Pages/Calendar';
import Team from './Pages/Team';

import Ourmenustyle1 from './Pages/Ourmenustyle1';
import Ourmenustyle2 from './Pages/Ourmenustyle2';
import Ourmenustyle3 from './Pages/Ourmenustyle3';
import Ourmenustyle4 from './Pages/Ourmenustyle4';


import Bloggrid2 from './Pages/Bloggrid2';
import Bloggridrightsidebar from './Pages/Bloggridrightsidebar';
import Bloggridleftsidebar from './Pages/Bloggridleftsidebar';
import Bloggride3 from './Pages/Bloggride3';

import Bloghalfimg from './Pages/Bloghalfimg';
import Halfimgsidebar from './Pages/Halfimgsidebar';
import Halfimgleftsidebar from './Pages/Halfimgleftsidebar';

import Bloglargeimg from './Pages/Bloglargeimg';
import Bloglargeimgsidebar from './Pages/Bloglargeimgsidebar';
import Bloglargeimgleftsidebar from './Pages/Bloglargeimgleftsidebar';

import Blogsingle from './Pages/Blogsingle';
import Blogsinglesidebar from './Pages/Blogsinglesidebar';
import Blogsingleleftsidebar from './Pages/Blogsingleleftsidebar';


import Shop from './Pages/Shop';
import Shopsidebar from './Pages/Shopsidebar';
import Profilesidebar from './Pages/Profilesidebar';
import ModelProfilesidebar from './Pages/ModelProfilesidebar';
import ActorIntroduction from './Pages/ActorIntroduction';
import ActorPhysicalDes from './Pages/ActorPhysicalDes';
import ActorClothingMeasur from './Pages/ActorClothingMeasur';
import ActorProfilePhoto from './Pages/ActorProfilePhoto';
import ActorPhotoGallery from './Pages/ActorPhotoGallery';
import WorkExperience from './Pages/WorkExperience';
import CardDesign from './Pages/CardDesign';
import Sport from './Pages/Sport';
import Coachingtraining from './Pages/Coachingtraining';
import Languages from './Pages/Languages';
import Currentopening from './Pages/Currentopening';
import NewsAndMedia from './Pages/NewsAndMedia';
import Messages from './Pages/Messages';
import Portfoliothemes from './Pages/Portfoliothemes';
import Shopproduct from './Pages/Shopproduct';
import Shopcart from './Pages/Shopcart';
import Shopwishlist from './Pages/Shopwishlist';
import Shopchekout from './Pages/Shopchekout';
import Shoplogin from './Pages/Shoplogin';
import Shopregister from './Pages/Shopregister';
import Clubregistration from './Pages/Clubregistration';
  

import Contact from './Pages/Contact';
import Contact2 from './Pages/Contact2';
import Profile from './Pages/Profilenew';

// Club form
import Bhogbooking from './Pages/Bhogbooking';
import Anjalibooking from './Pages/Anjalibooking';
import Anjalibooking1 from './Pages/Anjalibooking1';
import Livetelecast from './Pages/Livetelecast';

class Markup extends Component{
	
	render(){
		return(
			<BrowserRouter basename='/shop-login'>
				<Switch>
					<Route path='/' exact component={Shoplogin} />
					<Route path='/index-2' exact component={Index2} />
					
					<Route path='/about-1' exact component ={About} />
					<Route path='/our-services' exact component ={Ourservices} />
					<Route path='/faq' exact component ={Faq} />
					<Route path='/booking' exact component ={Booking} />
					<Route path='/error-404' exact component ={Error} />
					<Route path='/calendar' exact component ={Calendar} />
					<Route path='/team' exact component ={Team} />
					
					
					<Route path='/our-menu-1' exact component ={Ourmenustyle1} />
					<Route path='/our-menu-2' exact component ={Ourmenustyle2} />
					<Route path='/our-menu-3' exact component ={Ourmenustyle3} />
					<Route path='/our-menu-4' exact component ={Ourmenustyle4} />
					
					
					<Route path='/blog-grid-2' exact component ={Bloggrid2} />
					<Route path='/blog-grid-2-sidebar' exact component ={Bloggridrightsidebar} />
					<Route path='/blog-grid-2-sidebar-left' exact component ={Bloggridleftsidebar} />
					<Route path='/blog-grid-3' exact component ={Bloggride3} />
					
					<Route path='/blog-half-img' exact component ={Bloghalfimg} />
					<Route path='/blog-half-img-sidebar' exact component ={Halfimgsidebar} />
					<Route path='/blog-half-img-left-sidebar' exact component ={Halfimgleftsidebar} />
					
					<Route path='/blog-large-img' exact component ={Bloglargeimg} />
					<Route path='/blog-large-img-sidebar' exact component ={Bloglargeimgsidebar} />
					<Route path='/blog-large-img-left-sidebar' exact component ={Bloglargeimgleftsidebar} />
					
					<Route path='/blog-single' exact component ={Blogsingle} />
					<Route path='/blog-single-sidebar' exact component ={Blogsinglesidebar} />
					<Route path='/blog-single-left-sidebar' exact component ={Blogsingleleftsidebar} />
					
					<Route path='/shop' exact component ={Shop} />
					<Route path='/shop-sidebar' exact component ={Shopsidebar} />
					<Route path='/profile-sidebar' exact component ={Profilesidebar} />
					<Route path='/model-profile-sidebar' exact component ={ModelProfilesidebar} />
					<Route path='/actorintroduction' exact component ={ActorIntroduction} />
					<Route path='/actorphysicaldes' exact component ={ActorPhysicalDes} />
					<Route path='/actorclothingmeasur' exact component ={ActorClothingMeasur} />
					<Route path='/actorprofilephoto' exact component ={ActorProfilePhoto} />
					<Route path='/actorphotogallery' exact component ={ActorPhotoGallery} />
					<Route path='/workexperience' exact component ={WorkExperience} />
					<Route path='/carddesign' exact component ={CardDesign} />
				 	<Route path='/sport' exact component ={Sport} />
					<Route path='/training' exact component ={Coachingtraining} />
					<Route path='/languages' exact component ={Languages} />
					<Route path='/opening' exact component ={Currentopening} />
					<Route path='/news' exact component ={NewsAndMedia} />
					<Route path='/messages' exact component ={Messages} />
					<Route path='/portfoliothemes' exact component ={Portfoliothemes} />
					<Route path='/shop-product-details' exact component ={Shopproduct} />					
					<Route path='/shop-cart' exact component ={Shopcart} />					
					<Route path='/shop-wishlist' exact component ={Shopwishlist} />
					<Route path='/shop-checkout' exact component ={Shopchekout} />
					<Route path='/shop-login' exact component ={Shoplogin} />
					<Route path='/shop-register' exact component ={Shopregister} />
					<Route path='/shop-profile' exact component ={Index1} />
					<Route path='/clubregistration' exact component ={Clubregistration} />
					
					 
					<Route path='/contact-1' exact component ={Contact} />
					<Route path='/contact-2' exact component ={Contact2} />

					{/* Club Form */}
					<Route path='/bhogbooking' exact component ={Bhogbooking} />
					<Route path='/anjalibooking' exact component ={Anjalibooking} />
					<Route path='/anjalibooking1' exact component ={Anjalibooking1} />
					<Route path='/livetelecat' exact component ={Livetelecast} />
				
					
					
				</Switch>
			</ BrowserRouter>
		)
		
	}
}

export default Markup;