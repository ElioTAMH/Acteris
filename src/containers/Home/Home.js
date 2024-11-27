import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header/Header.js';

const Home = () => (
    <>
        <Header />
        <div className="home">
            <Helmet>
                <title>Accueil | Mon Application</title>
                <meta name="description" content="Description de la page" />
            </Helmet>
            <h2>Welcome to the Home Page</h2>
        </div>
    </>
);

export default Home;
