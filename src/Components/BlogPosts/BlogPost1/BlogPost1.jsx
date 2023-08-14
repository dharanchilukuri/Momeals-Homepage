import React from "react";
import { Col, Container, Row, Button, Form as BsForm } from 'react-bootstrap';


import BlogContainer from '../BlogContainer';
import '../BlogContainer.css';

import img from '../../Images/blogpost1img.png';




const BlogPost1 = () => {
    const content = (
        <div className="bg content">
            <Row className=' mt-5 mx-1 mx-md-5'>
                <Col lg={8}>

                    <div>
                        <h1>Zero-Waste Hacks : Practical Tips and Tricks to Reduce Waste.</h1>
                        <img className="imgbp1" src={img} alt="zero-waste image under title" />
                        <p className="desc">Adopting a zero-waste lifestyle is a conscious choice towards sustainability in today's society, where environmental issues are becoming increasingly essential. We may drastically cut waste and lower our environmental effect by adopting minor changes in our daily routines. In this blog article, we will look at practical tips and tricks to help you live a zero-waste lifestyle, including shopping, meal planning, and decreasing packaging waste.</p>
                    </div>
                </Col>
                <Col className='mt-2' lg={4} >
                    <div className="aboutus1">
                        <h2>About Us</h2>


                        <p>
                            "Welcome to a community of like-minded humans, each born with a
                            unique purpose – to drive positive change and uplift humanity for a
                            better world. Together, we unite our passions, talents, and
                            aspirations, working towards the collective betterment of our global
                            society."
                        </p>
                        <header
                        >
                            Join The Newsletter
                        </header>
                        {/* Newsletter subscription form */}
                        <BsForm className="aboutform">
                            <BsForm.Control
                                type="email"
                                placeholder="Your Email here"
                            />
                            <button >Subscribe Now</button>

                            <div>
                                <p className="p2">Share With Others</p>

                                {/* Social media icons */}
                                <div className="socialIcon1">
                                    <a href="#" aria-label="Instagram" target="_blank">
                                        <i class="fa-brands fa-instagram fa-2xl"></i>  
                                        
                                                    </a>
                                    <a
                                        href="https://wa.me/91########"
                                        aria-label="whatsapp"
                                        target="_blank"
                                    >
                                        <i class="fa-brands fa-whatsapp fa-2xl"></i>
                                    </a>

                                    <a href="#" aria-label="facebook" rel="noopener" target="_blank">
                                        <i class="fa-brands fa-facebook fa-2xl"></i>

                                    </a>
                                </div>
                            </div>
                        </BsForm>
                    </div>
                </Col>
            </Row>
            <Row className=' mt-5 mx-1 mx-md-5 row2'>
                <Col lg={8}>
                    <h2>
                        Zero-Waste On The Go
                    </h2>
                    <li>Bring Your Own Reusable Items</li>
                    <p>To avoid using disposable alternatives, bring a reusable water bottle, coffee cup, and cutlery with you. These easy activities can drastically reduce the amount of garbage produced while travelling or dining out.</p>
                    <li>Pack Zero-Waste Snacks</li>
                    <p>Avoid individually wrapped snacks and opt for package-free alternatives. Pack your own zero-waste snacks in reusable containers or beeswax wraps to stay fueled while on the go.</p>
                    <li>Say No to Receipts</li>
                    <p>Receipts are often made from thermal paper and are not recyclable. Politely decline receipts when possible or choose digital options instead.</p>

                    <h2>
                        Reducing Packaging Waste: Simple Strategies                    </h2>
                    <li>Choose Package-Free Alternatives</li>
                    <p>Opt for products with minimal or no packaging. Choose loose fruits and vegetables instead of pre-packaged ones, and bring your own reusable bags and containers when shopping for groceries.</p>
                    <li>Say No to Single-Use Plastics</li>
                    <p>Avoid single-use plastics like plastic cutlery, straws, and takeout containers. Carry your own reusable utensils, bring a travel mug for beverages, and opt for dine-in or bring your own container when ordering takeout.</p>
                    <li>DIY Home and Personal Care Products</li>
                    <p>Make your own home and personal care products using simple ingredients. This way, you reduce the need for products that come in excessive packaging and often contain harmful chemicals.</p>

                    <h2>
                        Eco-Friendly Cleaning: Safe and Sustainable Solutions                    </h2>
                    <li>Opt for Natural Cleaning Tools</li>
                    <p>Choose sustainable alternatives to conventional cleaning tools. Microfiber cloths, reusable mop pads, and bamboo scrub brushes are great options that minimize waste and are effective for cleaning.</p>
                    <li>DIY Cleaning Products:</li>
                    <p>Make your own cleaning products with simple items like vinegar, baking soda, and essential oils. This eliminates the need to purchase items in single-use plastic bottles.</p>
                    <li>Dispose of Cleaning Waste Responsibly</li>
                    <p>Use correct disposal measures when disposing of cleaning waste, such as expired cleaning supplies or outdated sponges. Look for recycling programmes or hazardous waste disposal sites in your area.</p>
                    <h2>
                        Raising Awareness: Sharing the Zero-Waste Journey                    </h2>
                    <li>Lead by Example</li>
                    <p>By living a zero-waste lifestyle, you become a role model for others. Showcase your sustainable habits and explain the positive impact they have on the environment.</p>
                    <li>Engage in Conversations</li>
                    <p>Initiate conversations about the zero-waste movement with friends, family, and colleagues. Share your knowledge and experiences, and encourage open discussions on sustainability.</p>
                    <li>Support Local Environmental Initiatives</li>
                    <p>Get involved in local environmental initiatives and organizations. Participate in clean-up events, educational workshops, or volunteer your time to make a difference in your community.</p>
                </Col>

            </Row>
            <Row className='mt-5 row3'>
                <p className="desc">Adopting a zero-waste lifestyle is an effective method to protect the environment and build a more sustainable future. You can improve your daily life by applying the techniques and strategies presented in this article. Remember that even minor modifications can have a big impact. Accept the journey towards a zero-waste lifestyle and urge others to follow in your footsteps.</p>
                <div className="opinion">

                    <BsForm className="aboutform">
                        <BsForm.Control
                            type="text"
                            placeholder="Share your opinion"
                        />
                    <Button>Submit</Button>
                              </BsForm>

                </div>
            </Row>

        </div>
    )

    return (
        <div>
            <BlogContainer content={content} />
        </div>
    );
}

export default BlogPost1;


