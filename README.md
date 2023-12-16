# Imagen2 API Demonstration

A clean user-interface that lets users enter their prompt, which sends a request to Imagen 2 API (Google's Most Advanced Text To Image Model), fetches the image based on the prompt and displays it on the page.

## Explore Vertex AI

- Go to Google's vertex AI and register a free account.
- Vist vertex AI dashboard in google console and click on model garden on the left
- In the filters, select vision and click on Imagen for Image Generation and Editing
- Scroll down to find the API information

## How to use it

- Clone the Repo, cd to the project folder and run the command ```bash npm install ```
- Set the env variables on the .env file
    - create an .env file on the project's root folder.
    - Go to google cloud console and create a project (if not already created) and copy the project id and paste it on VITE_GOOGLE_PROJECT_ID in the .env file
    - Install gcloud CLI
    - run the command - ```bash gcloud auth login``` to authorize your account
    - run the command - ```bash gcloud auth print-access-token ``` to get the access token and paste it on VITE_GCLOUD_AUTH_TOKEN in the .env file
- Run the application - ```bash npm run dev ```

Any queries? Feel free to reach out to me at naveenrk.official@gmail.com