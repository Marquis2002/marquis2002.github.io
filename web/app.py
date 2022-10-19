from flask import Flask, url_for, render_template, request, session
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)

@app.route('/')
def index():
    return render_template('first-page.html')


app.run(threaded = True)