from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return "Welcome to EduConnect!"

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    metadata = request.form['metadata']
    return jsonify({"message": "File uploaded successfully!"}), 200

if __name__ == '__main__':
    app.run(debug=True)