
import './App.css';
import { Header } from './layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/Homepage/HomePage';

import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import FoodWastage from './Components/FoodWastage/FoodWastage';
import FoodHunger from './Components/FoodHunger/FoodHunger';
import Header1 from './layout/Header1';
import DonationPage from './Components/DonationPage/DonationPage';
import FoodDonation from './Components/Fooddonationpage/FoodDonation';
import Fooddonarpage from './Components/FoodDonarpage/Fooddonarpage';
import Fooddonationpageinfo from './Components/Fooddonationpageinfo/Fooddonationpageinfo';
import ThankU from './Components/ThankU/ThankU';
import FoodtypePage from './Components/Foodtypepage/FoodtypePage';
import Donationdetailsformpage from './Components/Donationdetailsformpage/Donationdetailsformpage';
import FoodworrierHome from './Components/Foodworrierpage/FoodworrierHome';
import BlogPage from './Components/Blogpage/BlogPage';
import BlogPost1 from './Components/BlogPosts/BlogPost1/BlogPost1';
import ContactUs from './Components/ContactUsPage/ContactUs';
import Main from './Components/Terms conditions/Main/Main';
import Thankupage1 from './Components/Thankupage1/Thankupage1';
import Meallo from './Components/Meallo/Meallo';
import BottomNavbar from './layout/Bottomnavbar';
import Ourstory from './Components/Ourstorypage/Ourstory';

function App() {
  return (
    <div className='Apppage'>
      
      <BrowserRouter>
      <div className='header1'>
      <Header1/>
      </div>
    
      <div className='header'>
      <Header/>
      </div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
         
          <Route path= '/Ourstory' element={<Ourstory/>}/>
        
          <Route path= '/FoodWastage' element={<FoodWastage/>}/>
          <Route path= '/FoodHunger' element={<FoodHunger/>}/>
          <Route path= '/DonationPage' element={<DonationPage/>}/>
          <Route path= '/fooddonationpage' element={<FoodDonation/>}/>
          <Route path= '/fooddonarpage' element={<Fooddonarpage/>}/>
          <Route path= '/fooddonationfopage' element={<Fooddonationpageinfo/>}/>
          <Route path= '/Thanku' element={<ThankU/>}/>
          <Route path= '/FoodtypePage' element={<FoodtypePage/>}/>
          <Route path= '/donationdetailsform' element={<Donationdetailsformpage/>}/>
          <Route path= '/foodworrierpage' element={<FoodworrierHome/>}/>
          <Route path= '/blogpage' element={<BlogPage/>}/>
          <Route path= '/blogpost1' element={<BlogPost1/>}/>
          <Route path= '/contactpage' element={<ContactUs/>}/>
          <Route path= '/terms and conditionspage' element={<Main/>}/>
          {/* this below thankyou page connectd to contactpage */}
          <Route path= '/thankyoupage1' element={<Thankupage1/>}/>
          <Route path= '/meallopage' element={<Meallo/>}/>
         
        </Routes>
        <div className='pb-3 pb-lg-0 pb-md-0'>
        <Footer/>
        </div>
        <div className='bottomnavbardiv'>
        <BottomNavbar/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
