# Sentiment Analysis Web App

This project is a sentiment analysis web application that utilizes natural language processing techniques to analyze the sentiment of text inputs. The backend of the application is built with Flask, a lightweight web framework in Python, while the frontend is developed using React, a popular JavaScript library for building user interfaces.

## Features

- Perform sentiment analysis on user-provided text inputs.
- Classify the sentiment as positive or negative.
- Display the sentiment analysis results in real-time.

## Technologies Used

- Flask: Python web framework for building the backend server.
- React: JavaScript library for creating the frontend user interface.
- 

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/sentiment-analysis-web-app.git
```

2. Navigate to the backend directory:

```bash
cd sentiment-analysis-web-app/flask-server
```

3. Install the required Python packages:

```bash
pip install -r requirements.txt
```

4. Start the Flask backend server:

```bash
python server.py
```

5. Open a new terminal window and navigate to the frontend directory:

```bash
cd ../client
```

6. Install the required Node.js packages:

```bash
npm install
```

7. Start the React development server:

```bash
npm start
```

8. Access the web application at `http://localhost:3000` in your browser.

## Usage

1. Enter the text you want to analyze in the input field.
2. Click the "Analyze" button to perform sentiment analysis.
3. The sentiment analysis results will be displayed in real-time.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Acknowledgments

- The sentiment analysis model used in this project is based on the work of [researchers](link-to-research-paper) in the field.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
