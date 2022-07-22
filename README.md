# Brainflix

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A replica video sharing app built from React. Main page has a displayed hero video that is filtered out from other videos found on the right. When new video is clicked, it is displayed as the hero video, with previous video now found in the section to the right. All data is fetched using axios to a back-end server, such as videos, description and comments. Back-end API was made using Node.js and Express.js. New comments can be posted using the comment button. Page is responsive to mobile, tablet and desktop width sizes.

Second upload page can be accessed by the upload button page. On this page, a new video canbe posted using an axios POST request to the back-end API. Title and 
description can be added to the video, other information, such as comments, likes and views are hardcoded. Publishing a video will redirect to the Main Page with new video added to right section

## Installation Instructions

### `npm i`

Installs required package.json files and node modules

### `npm i scss`

Installs Sass

### `npm i axios`

Installs Axios

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Preview

### Main Page in desktop width size
![image](https://user-images.githubusercontent.com/105663385/180336730-dcd03502-cada-46d7-9383-54b0f06187fb.png)



### Upload page
![image](https://user-images.githubusercontent.com/105663385/180337770-b2913b5f-846b-494b-969c-067165ff8a7b.png)
