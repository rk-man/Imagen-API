# Imagen2 API Demonstration

![Wallpaper](./src/assets/image1.png)
![Logo](./src/assets/image2.png)
![Iron Man](./src/assets/image3.png)

A clean user-interface that lets users enter their prompt, which sends a request to Imagen 2 API (Google's Most Advanced Text To Image Model), fetches the image based on the prompt and displays it on the page.

## Explore Vertex AI

- Go to Google's vertex AI and register a free account.
- Vist vertex AI dashboard in google console and click on model garden on the left
- In the filters, select vision and click on Imagen for Image Generation and Editing
- Scroll down to find the API information

## How to run this app on your local env?

- Clone the Repo, cd to the project folder and run the command ```npm install```
- Set the env variables on the .env file
    - On your google cloud console dashboard, make sure you are on the project you have created
    - Toggle the menu bar on the left, click on APIs & Services, Search for <strong>Vertex AI</strong> and click on <strong>enable</strong>. This will allow your app to use all of Vertex AI's APIs, including Imagen2 API.
    - create an .env file on the project's root folder.
    - Go to google cloud console and create a project (if not already created) and copy the project id and paste it on VITE_GOOGLE_PROJECT_ID in the .env file
    - Install gcloud CLI
    - run the command - ```gcloud auth login``` to authorize your account
    - run the command - ```gcloud auth print-access-token``` to get the access token and paste it on VITE_GCLOUD_AUTH_TOKEN in the .env file
- Run the application - ```npm run dev```

## Possible Issues You Might Encounter

- the gcloud access token is valid only for 1 hour (60 minutes). So, you might want to run - ```gcloud auth print-access-token```  to regenerate it and update it on the .env file
- Certain prompts doesn't comply with google's laws and it might throw an error. You can check the browser console if an error occurred.

Any queries? Feel free to reach out to me at naveenrk.official@gmail.com or text me on [LinkedIn](https://linkedin.com/in/naveen-rk)


Thank you!!