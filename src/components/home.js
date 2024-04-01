import React from 'react';
import { Helmet } from "react-helmet";  

export function Home() {

	
	return <div>
	<Helmet>  
        <html lang="en" />  
        <title>React Helmet Tutorial</title>  
        <meta name="description" content="Tutorial for React Helmet" />  
        <meta name="theme-color" content="#E6E6FA" />  
      </Helmet>  
  
      <header className="App-header">Title will be React Helmet   
Tutorial</header></div>
};