# Import flask and datetime module for showing date and time
import pandas as pd
import numpy as np
from sklearn.svm import LinearSVC
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.pipeline import Pipeline
import joblib
import string
from flask import Flask, request, jsonify, render_template
import nltk
# Initializing flask app
app = Flask(__name__)

model = joblib.load('SentimentAnalysis_Model_Pipeline.pkl')

# Route for seeing a data
# Define predict function
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():

    new_review = request.data.decode('utf-8')
    print(new_review)
    predictions = model.predict([new_review])
    print(predictions)
    if predictions == 0:
        return {'predictionText': 'Negative'}
    else:
        return {'predictionText': 'Positive'}



if __name__ == "__main__":
    app.run(debug=True)

