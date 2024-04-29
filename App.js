import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/stack';
import Home from './src/screens/home';


const App = () => {
    const articles = [
        {
          id: 1,
          title: "Breaking News: Lorem Ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "https://images.unsplash.com/photo-1557683316-973673baf926",
          publishedAt: "2022-01-01T09:00:00Z",
          author: "John Doe",
        },
        {
          id: 2,
          title: "New Study Reveals Interesting Findings",
          description:
            "Praesent euismod, nunc id aliquet ultricies, nunc nisl tristique justo.",
          image: "https://images.unsplash.com/photo-1557683316-973673baf926",
          publishedAt: "2022-01-02T14:30:00Z",
          author: "Jane Smith",
        },
        {
          id: 3,
          title: "New Study Reveals Interesting Findings",
          description:
            "Praesent euismod, nunc id aliquet ultricies, nunc nisl tristique justo.",
          image: "https://images.unsplash.com/photo-1557683316-973673baf926",
          publishedAt: "2022-01-02T14:30:00Z",
          author: "Jane Smith",
        },
        {
          id: 4,
          title: "New Study Reveals Interesting Findings",
          description:
            "Praesent euismod, nunc id aliquet ultricies, nunc nisl tristique justo.",
          image: "https://images.unsplash.com/photo-1557683316-973673baf926",
          publishedAt: "2022-01-02T14:30:00Z",
          author: "Jane Smith",
        },
      ];      

    return (
        <NavigationContainer>
            <Routes />
            <Home articles={articles} />
        </NavigationContainer>
    );
};

export default App;