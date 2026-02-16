from flask import Flask, app
app = Flask(__name__)

# ruta principal 
@app.route('/')
def hello_world():
    return 'HOLA MUNDO.....'
