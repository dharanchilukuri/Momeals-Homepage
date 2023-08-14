// BlogPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';
import { Col, Row, Button } from 'react-bootstrap';
import {Typography } from '@mui/material'
import { FavoriteBorder, Favorite, Redo, ArrowBack, ArrowForward } from '@material-ui/icons';
import imga from '../Images/unsplash_90710FOygrg.png';
import img1 from '../Images/blogimg1.png';
import img2 from '../Images/blogimg2.png';
import img3 from '../Images/blogimg3.png';
import img4 from '../Images/blogimg4.png';
import img5 from '../Images/blogimg5.png';
import img6 from '../Images/blogimg6.png';

const BlogPage = () => {
  // 2nd row - State for handling likes
  const [firstusstate, firstsetUsState] = useState([
    {
      likes: 0,
      isLiked: false,
    }
  ]);

  // Function to handle like button click in the 2nd row
  const firsthandleLike = (id) => {
    firstsetUsState((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            likes: item.isLiked ? item.likes - 1 : item.likes + 1,
            isLiked: !item.isLiked,
          };
        }
        return item;
      })
    );
  };

  // 3rd row - State for blog data
  const [usstate, setUsState] = useState([
    {
      id: 1,
      image: img1,
      title: 'Zero-Waste Hacks : Practical Tips and Tricks to Reduce Waste',
      date: '23 May 2023',
      likes: 0,
      isLiked: false,
      author: 'karan'
    },
    {
      id: 2,
      image: img2,
      title: '5 ways to utilize leftover food at home instead of throwing it.',
      date: '23 May 2023',
      likes: 0,
      isLiked: false,
      author: 'karan'
    },
    {
      id: 3,
      image: img3,
      title: 'How MAUC tape is effective in tracing malnutrition?',
      date: '23 May 2023',
      likes: 0,
      isLiked: false,
      author: 'karan'
    },
    {
      id: 4,
      image: img4,
      title: 'How MAUC tape is effective in tracing malnutrition?',
      date: '23 May 2023',
      likes: 0,
      isLiked: false,
      author: 'karan'
    },
    {
      id: 5,
      image: img5,
      title: 'How MAUC tape is effective in tracing malnutrition?',
      date: '23 May 2023',
      likes: 0,
      isLiked: false,
      author: 'karan'
    },
    {
      id: 6,
      image: img6,
      title: 'How MAUC tape is effective in tracing malnutrition?',
      date: '23 May 2023',
      likes: 0,
      isLiked: false,
      author: 'karan'
    }
  ]);

  // Function to handle like button click in the 3rd row
  const handleLike = (id) => {
    setUsState((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            likes: item.isLiked ? item.likes - 1 : item.likes + 1,
            isLiked: !item.isLiked,
          };
        }
        return item;
      })
    );
  };

  // State for page numbers
  const [btns, setBtns] = useState([
    {
      btn: 1
    },
    {
      btn: 2
    },
    {
      btn: 3
    },
    {
      btn: 4
    }
  ]);

  // Function to handle page number click
  const handlePageClick = (page) => {
    // Handle page click logic
    console.log(`Clicked on page ${page}`);
  };

  return (
    <div className='blog-page pt-5'>
      {/* Blog page heading */}
      <div className="blog-page-heading">
        <h2 className="heading-blog text-center mx-3">LATEST BLOGS AND STORIES</h2>

        {/* 1st row */}
        <Row className='mt-4 mb-3'>
          {/* Buttons */}
          <div className="blog-btnrow d-flex flex-wrap justify-content-center align-items-center gap-3">
            <Button className='blog-btns' style={{ border: "1px solid black", color: "black", width: "100px", borderRadius: "30px" }}>ALL</Button>
            <Button className='blog-btns' style={{ border: "1px solid black", color: "black", width: "100px", borderRadius: "30px" }}>TIPS</Button>
            <Button className='blog-btns' style={{ border: "1px solid black", color: "black", width: "100px", borderRadius: "30px" }}>SOCIAL</Button>
            <Button className='blog-btns' style={{ border: "1px solid black", color: "black", width: "100px", borderRadius: "30px" }}>STORY</Button>
            <Button className='blog-btns' style={{ border: "1px solid black", color: "black", width: "100px", borderRadius: "30px" }}>HELP</Button>
          </div>
        </Row>
      </div>

      {/* 2nd row - Featured blog */}
      <Row className='justify-content-evenly mt-5 mx-3'>
        <Col lg={5} md={6}>
          <div className="desc">
            <div className='description'>
              <p className="desc-head">How we can use leftovers next days in cooking new things?</p>
              <p className='desc-date-name'><span className="desc-date">23 May 2023,</span>  <span className='desc-name'>By Shahinpreet</span></p>
              <p className="desc-text">Worried about food wastage, here’s top 10 effective ways to use your leftover next day and this not only save your money but also enhance your cooking skills....</p>
              <div className="desc-options">
                <Button className='readblog' style={{ borderRadius: "20px", border: "1px solid black", color: "black", backgroundColor: "#DDECFF" }}>READ MORE</Button>

                {firstusstate.map((item) => (
                  (
                    <>
                      {item.isLiked ? (
                        <Favorite style={{ color: 'red' }} onClick={() => firsthandleLike(item.id)} />
                      ) : (
                        <FavoriteBorder onClick={() => firsthandleLike(item.id)} />
                      )}
                      <span className="like-count">{item.likes}</span>
                    </>
                  )
                ))}
                <Redo />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={5} md={5} className='mt-4'>
          <img src={imga} width="100%" alt="Featured Blog" />
        </Col>
      </Row>
      <div className='blog-solid-line mt-5'></div>

      {/* 3rd row - List of blogs */}
      <Row className='d-flex justify-content-evenly mx-3' lg={2}>
        {usstate.map((item) => (
          <Col lg={5} md={5} className="mt-5" key={item.id}>
            <div>
              <img src={item.image} alt={`img${item.id}`} width="100%" />
              <Typography style={{ textAlign: 'left', fontFamily: 'comfortaa', fontWeight: 'bold', marginTop: '15px' }}>
                {item.title}
              </Typography>
              <Typography style={{ textAlign: 'left' }}>
                <span style={{ fontFamily: 'comfortaa', fontWeight: '600' }}>{item.date},</span>{' '}
                <span style={{ fontFamily: 'comfortaa', fontWeight: '500' }}>By {item.author}</span>
              </Typography>
              <div className="desc-options mt-3">
              <Link to="/blogpost1">
                <Button
                  className='readblog'
                  style={{ borderRadius: '20px', border: '1px solid black', color: 'black', backgroundColor: '#DDECFF' }}
                >
                  READ MORE
                </Button></Link>
                {item.isLiked ? (
                  <Favorite style={{ color: 'red' }} onClick={() => handleLike(item.id)} />
                ) : (
                  <FavoriteBorder onClick={() => handleLike(item.id)} />
                )}
                <span className="like-count">{item.likes}</span>
                <Redo />
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Page numbers */}
      <div className="page-num d-flex gap-2 mt-5 mb-3 mx-3 ">
        <Button className="btn-num"><ArrowBack /></Button>
        {btns.map((item) => (
          <Button key={item.id} className="btn-num" onClick={() => handlePageClick(item.id)}>
            {item.btn}
          </Button>
        ))}
        <Button className="btn-num"><ArrowForward /></Button>
      </div>
    </div>
  );
};

export default BlogPage;
