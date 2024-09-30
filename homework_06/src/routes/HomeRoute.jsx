// routes/HomeRoute.jsx
import React from 'react';
import HomeComponent from '../components/HomeComponent/HomeComponent.jsx';
import CountryFormComponent from '../components/CountryFormComponent/CountryFormComponent.jsx';

export default function HomeRoute() {
  return (
    <div>
      <HomeComponent />
      <CountryFormComponent />
    </div>
  );
}
