from flask import Flask 
from flask import render_template 

# creates a Flask application 
app = Flask(__name__) 


@app.route("/") 
def hello(): 
	message = "Hello, World"
	return render_template('index.html', message=message) 


@app.route("/aboutus") 
def serve_video(): 
	message = "All about us!"
	return render_template('aboutus.html', message=message) 


@app.route("/try-now") 
def serve_audio(): 
	message = "MindSpark Demo"
	return render_template('trynow.html', message=message) 


@app.route("/contactus") 
def serve_image(): 
	message = "Contact Us"
	return render_template('contactus.html', message=message) 


# run the application 
if __name__ == "__main__": 
	app.run(debug=True) 
