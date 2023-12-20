from flask import Flask, render_template
import mysql.connector

app = Flask(__name__)

# Move the database connection setup to a function
def get_db_connection():
    return mysql.connector.connect(
        user='root',
        password='12345678',
        host='0.tcp.ap.ngrok.io',
        database='Tested',
        port='13666'
    )

# Use a context manager to ensure proper closing of the cursor and connection
def execute_query(query):
    with get_db_connection() as cnx:
        with cnx.cursor() as cursor:
            cursor.execute(query)
            result = cursor.fetchall()
            return result

@app.route("/")
def index():
    query = "SELECT * FROM Tested.Student;"
    result = execute_query(query)
    mysql_result = str(result)
    print(f"------------------------- {mysql_result}")
    return render_template("index.html", sql = mysql_result)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/service")
def service():
    return render_template("service.html")


if __name__ == "__main__":
    app.run(debug=True)
    
# how to run
# ngrok.exe http 5000
# and run this file