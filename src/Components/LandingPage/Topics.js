import React from 'react'
import './topics.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Careerdetails from './Careerdetails';

function Topics() {
  return (
    <div className='Topics'>
     <div className='topics_container'>
        <p className='main'>Explore topics you are interested in</p>
     <p className='second'>CONTENT TOPICS</p>
     <div className='buttons'>
        <button className='var_topics'>see All Topics</button>
     <button className='var_topics'>Workplace</button>
     <button className='var_topics'>Job Search</button>
     <button className='var_topics'>Careers</button>
     <button className='var_topics'>Interviewing</button>
     <button className='var_topics'>Salary and Compensation</button>
     <button className='var_topics'>Internships</button>
     <button className='var_topics'>Employee Benefits</button>
     </div>

     <div className='career_advice'>
        <div className='det'>
            <p>CAREER ADVICE ON LINKEDIN</p>
            <p className='see_all'>see all  <ArrowBackIosNewIcon/><ArrowForwardIosIcon/></p>
        </div>
        <div className='cards'>
        <Careerdetails 
            image  = "https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/Screenshot%202022-10-31%20at%2003.46.01.png" 
            title = " What to know about applicant tracking systems ?" 
            logo = "https://media-exp1.licdn.com/dms/image/C4D0BAQFjhVwMUdKKxg/company-logo_400_400/0/1650461289197?e=2147483647&v=beta&t=C7zSq8eTk_dAWv-BIreJSthbi-YfRdpY7TDAhg3ITsk"
            subtitle = "Get hired by linkedIn news."
            details = "Application tracking systems (ATS) are databases that tracks ...."
        />
        <Careerdetails 
            image  = "https://media.licdn.com/dms/image/C4D12AQGwlTuwBKX9zg/article-cover_image-shrink_180_320/0/1649358325106?e=2147483647&v=beta&t=SAro9Xqz9BPaxx620PzzAQgQtPvBLplCxzkohhD3d3s" 
            title = " What is the average salary for US workers" 
            logo = "https://media-exp1.licdn.com/dms/image/C4D0BAQHVd4gx9WgaTw/company-logo_400_400/0/1650462277550?e=2147483647&v=beta&t=WvJLu4K8h9qaN2tutcLoe_Jo-uWnIZ59M_KDkW_64PI"
            subtitle = "Get Ahead by linkedIn news."
            details = "Salaries vary based on many factors . Depeding on ....."
        />
        <Careerdetails 
            image  = "https://media-exp1.licdn.com/dms/image/D5612AQECWFw_xUjF_w/article-cover_image-shrink_180_320/0/1654895123997?e=2147483647&v=beta&t=AeaQR7ZLwNmy7EiNvWnEbbHN4-uunQnm3aWqqiCC2yA" 
            title = " How do recruiters get paid"  
            logo = "https://media-exp1.licdn.com/dms/image/C4D0BAQFjhVwMUdKKxg/company-logo_400_400/0/1650461289197?e=2147483647&v=beta&t=C7zSq8eTk_dAWv-BIreJSthbi-YfRdpY7TDAhg3ITsk"
            subtitle = "Get Ahead by linkedIn news."
            details = "Have you ever made a newyear resolution, only to give up....."
        />
       <Careerdetails 
            image  = "https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/Screenshot%202022-10-31%20at%2003.45.31.png" 
            title = " How to create a habit for your life." 
            logo = "https://media-exp1.licdn.com/dms/image/C4D0BAQFjhVwMUdKKxg/company-logo_400_400/0/1650461289197?e=2147483647&v=beta&t=C7zSq8eTk_dAWv-BIreJSthbi-YfRdpY7TDAhg3ITsk"
            subtitle = "Get Ahead by linkedIn news."
            details = "Onlike other fields there are a variety of topics that ...."
        />

<Careerdetails 
            image  = "https://media.licdn.com/dms/image/D5612AQGOeILi4c7wjQ/article-cover_image-shrink_180_320/0/1658181029617?e=2147483647&v=beta&t=9kpsfU4Mn7ai9R0SEYajahYxzXtOQVaDCGA3rhPFjFM" 
            title = " How to bring hybrid tems together" 
            logo = "https://media-exp1.licdn.com/dms/image/C4D0BAQFjhVwMUdKKxg/company-logo_400_400/0/1650461289197?e=2147483647&v=beta&t=C7zSq8eTk_dAWv-BIreJSthbi-YfRdpY7TDAhg3ITsk"
            subtitle = "Get Ahead by linkedIn news."
            details = "Everyone's social skills were affected by the pandemic"
        />
        <Careerdetails 
            image  = "https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/Screenshot%202022-10-31%20at%2003.45.31.png" 
            title = " How to create a habit for your life." 
            logo = "https://media-exp1.licdn.com/dms/image/C4D0BAQFjhVwMUdKKxg/company-logo_400_400/0/1650461289197?e=2147483647&v=beta&t=C7zSq8eTk_dAWv-BIreJSthbi-YfRdpY7TDAhg3ITsk"
            subtitle = "Get Ahead by linkedIn news."
            details = "Have you ever made a newyear resolution, only to give up....."
        />
        <Careerdetails 
            image  = "https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/Screenshot%202022-10-31%20at%2003.45.31.png" 
            title = " How to create a habit for your life." 
            logo = "https://media-exp1.licdn.com/dms/image/C4D0BAQFjhVwMUdKKxg/company-logo_400_400/0/1650461289197?e=2147483647&v=beta&t=C7zSq8eTk_dAWv-BIreJSthbi-YfRdpY7TDAhg3ITsk"
            subtitle = "Get Ahead by linkedIn news."
            details = "Have you ever made a newyear resolution, only to give up....."
        />
       
        <Careerdetails 
            image  = "https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/Screenshot%202022-10-31%20at%2003.45.31.png" 
            title = " How to create a habit for your life." 
            logo = "https://media-exp1.licdn.com/dms/image/C4D0BAQFjhVwMUdKKxg/company-logo_400_400/0/1650461289197?e=2147483647&v=beta&t=C7zSq8eTk_dAWv-BIreJSthbi-YfRdpY7TDAhg3ITsk"
            subtitle = "Get Ahead by linkedIn news."
            details = "Have you ever made a newyear resolution, only to give up....."
        />
        <Careerdetails 
            image  = "https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/Screenshot%202022-10-31%20at%2003.45.31.png" 
            title = " How to create a habit for your life." 
            logo = "https://media-exp1.licdn.com/dms/image/C4D0BAQFjhVwMUdKKxg/company-logo_400_400/0/1650461289197?e=2147483647&v=beta&t=C7zSq8eTk_dAWv-BIreJSthbi-YfRdpY7TDAhg3ITsk"
            subtitle = "Get Ahead by linkedIn news."
            details = "Have you ever made a newyear resolution, only to give up....."
        />
        <Careerdetails 
            image  = "https://raw.githubusercontent.com/Desmondgoldsmith/LinkedIn-clone/main/public/Screenshot%202022-10-31%20at%2003.45.31.png" 
            title = " How to create a habit for your life." 
            logo = "https://media-exp1.licdn.com/dms/image/C4D0BAQFjhVwMUdKKxg/company-logo_400_400/0/1650461289197?e=2147483647&v=beta&t=C7zSq8eTk_dAWv-BIreJSthbi-YfRdpY7TDAhg3ITsk"
            subtitle = "Get Ahead by linkedIn news."
            details = "Have you ever made a newyear resolution, only to give up....."
        /> 
        </div>
     </div>
     </div>
     </div>
  )
}

export default Topics