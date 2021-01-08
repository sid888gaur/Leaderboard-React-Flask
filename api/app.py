from flask import Flask, render_template, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Gaur1234'
app.config['MYSQL_DB'] = 'almabetter'

mysql = MySQL(app)


@app.route('/')
def home():
	return "Hello World"


@app.route('/api/enterMarks', methods=['GET','POST'])
def post_student_info():
	if request.method == 'POST':
		details = json.loads(request.data)

		print("------------------------")
		print(type(details['percent']))
		print("------------------------")

		rollno = int(details['rollno'])
		name = str(details['name'])
		pmarks= int(details['pmarks'])
		cmarks = int(details['cmarks'])
		mmarks = int(details['mmarks'])
		total = int(details['total'])
		percent = float(details['percent'])


		cur = mysql.connection.cursor()
		cur.execute(""" INSERT INTO MyUsers (rollno, name, pmarks, cmarks, mmarks, total, percent) VALUES (%d, %s, %d, %d, %d, %d, %f)""",
			(int(rollno), str(name), int(pmarks), int(cmarks), int(mmarks), int(total), float(percent)))
		mysql.connection.commit()
		cur.close()
		return {'SUCCESS':200}
	return 'Nothing to insert'


@app.route('/api/viewLeaderboard')
def show_leaderboard():
	try:
		cur = mysql.connection.cursor()
		cur.execute("SELECT * FROM MyUsers;")
		data = cur.fetchall()
		resp = jsonify(data)
		resp.status_code = 200
		print(jsonify(data))
		cur.close()
		return resp
	except Exception as e:
		print(e)
	finally:
		print("done")

if __name__ == '__main__':
	app.run()