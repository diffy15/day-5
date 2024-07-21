import React from 'react';
import './App.css';

const profiles = [
    {
        image: '/images/pic1.jpg',
        name: 'Diffy Sheikha J',
        dob: '15/09/2003',
        contact: '9900887766',
        institution: 'Coimbatore Institute of Technology',
        address: 'Avinashi Rd, Civil Aerodrome Post, Coimbatore'
    },
    {
        image: '/images/pic2.jpg',
        name: 'John',
        dob: '01/01/2002',
        contact: '9900887767',
        institution: 'Coimbatore Institute of Technology',
        address: 'Avinashi Rd, Civil Aerodrome Post, Coimbatore'
    },
    {
        image: '/images/pic3.jpg',
        name: 'Catherine',
        dob: '02/02/2003',
        contact: '9900887768',
        institution: 'Coimbatore Institute of Technology',
        address: 'Avinashi Rd, Civil Aerodrome Post, Coimbatore'
    },
    {
        image: '/images/pic4.jpg',
        name: 'Leah',
        dob: '03/03/2004',
        contact: '9900887769',
        institution: 'Coimbatore Institute of Technology',
        address: 'Avinashi Rd, Civil Aerodrome Post, Coimbatore'
    },
    {
        image: '/images/pic5.jpg',
        name: 'Jack',
        dob: '04/04/2003',
        contact: '9900887770',
        institution: 'Coimbatore Institute of Technology',
        address: 'Avinashi Rd, Civil Aerodrome Post, Coimbatore'
    },
    {
        image: '/images/pic6.jpg',
        name: 'Marylyn',
        dob: '05/05/2004',
        contact: '9900887771',
        institution: 'Coimbatore Institute of Technology',
        address: 'Avinashi Rd, Civil Aerodrome Post, Coimbatore'
    },
    {
        image: '/images/pic7.jpg',
        name: 'Tyson',
        dob: '06/06/2003',
        contact: '9900887772',
        institution: 'Coimbatore Institute of Technology',
        address: 'Avinashi Rd, Civil Aerodrome Post, Coimbatore'
    },
    {
        image: '/images/pic8.jpg',
        name: 'Lily',
        dob: '07/07/2004',
        contact: '9900887773',
        institution: 'Coimbatore Institute of Technology',
        address: 'Avinashi Rd, Civil Aerodrome Post, Coimbatore'
    },
    {
        image: '/images/pic9.jpg',
        name: 'Rose',
        dob: '08/08/2003',
        contact: '9900887774',
        institution: 'Coimbatore Institute of Technology',
        address: 'Avinashi Rd, Civil Aerodrome Post, Coimbatore'
    },
    {
        image: '/images/pic10.jpg',
        name: 'Lucas',
        dob: '09/09/2003',
        contact: '9900887775',
        institution: 'Coimbatore Institute of Technology',
        address: 'Avinashi Rd, Civil Aerodrome Post, Coimbatore'
    }
];

const ProfileCard = ({ profile }) => (
    <div className="profile-container">
        <img src={profile.image} alt="Avatar" />
        <div className="profile-details">
            <h1>{profile.institution}</h1>
            <p>{profile.address}</p>
            <h3>Name: {profile.name}</h3>
            <h3>DOB: {profile.dob}</h3>
            <h3>Contact: {profile.contact}</h3>
        </div>
    </div>
);

const App = () => (
    <div>
        <h1>Student Profile</h1>
        <div id="profiles-container">
            {profiles.map((profile, index) => (
                <ProfileCard key={index} profile={profile} />
            ))}
        </div>
    </div>
);

export default App;
