React Rick and Morty challenge

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
The app will be ready to be deployed!

## Run with Docker

To run the app with docker execute the following commands into the project's folder:

### `docker build -t frontend:dev .`

This command will create an image to build the app

### Run the image

```
docker run -it --rm \
-v ${PWD}:/app \
-v /app/node_modules \
-p 3000:3000 \
-e CHOKIDAR_USEPOLLING=true \
frontend:dev
```

After run this command you must be able to open the app in [http://localhost:3000](http://localhost:3000)
