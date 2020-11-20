from flask import Flask, jsonify
from animals import animals
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.route("/", methods=['GET'])    
def animalsHandler():    
    return jsonify({"animals":animals})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
