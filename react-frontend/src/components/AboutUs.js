import React from 'react';
import './AboutUs.css';

const teamMembers = [
    {
        name: 'Skitsas\nIoannis',
        role: 'Senior Manager',
        imageUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXgSnyd7vR8nAsPCDGx2_YPfCKCPUbvLWOfws_h1tIFlg=s480-p-k-rw-no',
        id: 1,
    },
    {
        name: 'Tsigkounis\nKonstantinos',
        role: 'Senior Associate',
        imageUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXuvhFcxJLg1JtMZdWP6cJ2Cp6FUpaLt8OJOuwY2iKoKnM=s480-p-k-rw-no',
        id: 2,
    },
    {
        name: 'Marakos\nKonstantinos',
        role: 'Senior Associate',
        imageUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjVEsRLYZZYG1yitZq0mtz7HJIlIyX8ItyWHwb4ftLqI7Q=s480-p-k-rw-no',
        id: 3,
    },
    {
        name: 'Kirmizis\nThanasis',
        role: 'Associate',
        imageUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJjjdEw-rdkejz6wjuniSOe-WlHXKJD0S-z-BzpCtcvFw=s480-p-k-rw-no',
        id: 4,
    },
];

const AboutUs = () => {
    return (
        // <div className="about-us-content">
        //todo : when @media (min-width: 768px) and zoom level 80-90% the navBar shift still happens
        <div className="container pt-5 about-us-content">
        {/*<div className="container my-5 about-us-content">*/}
            <h2 className="mb-4">About Us</h2>
            <p className="mb-1">
                Welcome to the vibrant world of the Enterprise Digital team at PwC Greece! We are a diverse group of
                skilled developers and software engineers, each bringing unique experiences and passions to the table.
                At our core, we share an unwavering enthusiasm for coding and a commitment to crafting top-notch
                software.
            </p>
            <p className="mb-1">
                Patra holds a special place in our hearts, and we are deeply invested in nurturing a thriving community
                of software engineers among the students there. Our dream is to see the student community flourish,
                empowered by the knowledge and skills gained from this academy.
            </p>
            <p className="mb-1">
                We invite you to embark on this enriching journey with us. Dive into the world of coding, explore the
                endless possibilities, and let your creativity soar. This academy is not just a learning platform; it's
                a space where dreams take shape, ideas come to life, and friendships are forged.
            </p>
            <p className="mb-5">
                Happy coding! 🚀✨
            </p>

            <h2 className="mb-4">Meet Our Team</h2>
            <div className="row">
                {teamMembers.map(member => (
                    <div className="col-lg-3 col-md-6 mb-4" key={member.id}>
                        <div className="text-center">
                            <img src={member.imageUrl} alt={member.name} className="rounded-circle mb-3"
                                 style={{width: '150px'}}/>
                            <h4 style={{whiteSpace: "pre-wrap"}}>{member.name}</h4>
                            <p className="text-muted">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUs;
