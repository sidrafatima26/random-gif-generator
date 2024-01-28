# Random Gif Generator - React App

## Overview
The Random Gif Generator is a simple React application that fetches random GIFs from an API. Users can enjoy a spontaneous and entertaining experience by clicking the "Generate Random Gif" button. Additionally, the app allows users to input keywords, generating GIFs related to the provided keyword.

## Features
Random Gif Generation: Click the "Generate Random Gif" button to instantly display a random GIF for a delightful experience.

- Keyword Search: Input any keyword of your choice to fetch a GIF specifically related to that keyword.

- Custom Hook: Leveraging the power of React, the app includes a custom hook for efficient state management and data fetching.

- Styling with Tailwind CSS: The UI is styled using Tailwind CSS, providing a clean and modern design.

## Getting Started
Clone the Repository:

`git clone https://github.com/your-username/random-gif-generator.git`
Navigate to Project Directory:

`cd random-gif-generator`
Install Dependencies:

`npm install`
Run the App:

`npm start`
Open in Browser:
Open your browser and navigate to http://localhost:3000 to explore the Random Gif Generator.

## Custom Hook
The app includes a custom hook, useGif, which encapsulates the logic for fetching random GIFs. This hook enhances code modularity and maintainability.

## JavaScript

// Example Usage in Component

const { gif, generateRandomGif, searchGif } = useGif();

## Technologies Used
- React
- Tailwind CSS
- Giphy API (or any other API of your choice)
  
## Contribution
Feel free to contribute to the project by opening issues or submitting pull requests. Your feedback and ideas are always welcome!

