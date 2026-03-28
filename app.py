from flask import Flask, render_template, request

app = Flask(__name__)

# Home page route
@app.route("/", methods=["GET", "POST"])
def index():
    message = ""
    if request.method == "POST":
        # Get form input
        name = request.form.get("name")
        message = f"Hello, {name}!"
    return render_template("index.html", message=message)

if __name__ == "__main__":
    app.run(debug=True)