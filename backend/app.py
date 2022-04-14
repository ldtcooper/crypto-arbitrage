from flask import Flask, request, send_from_directory, make_response
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import asc
import json

def read_config():
    f = open('./config.json', "r")
    config = json.loads(f.read())
    f.close()
    return config

config = read_config()

app = Flask(__name__, static_folder='./build', static_url_path='/')
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{config['user']}:{config['password']}@{config['host']}/{config['database']}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Exchanges(db.Model):
    id = db.Column(db.String(100),primary_key=True)
    name = db.Column(db.String(100),nullable=False,default=id)

    def __init__(self,id,name):
        self.id = id
        self.name = name

class Currencies(db.Model):
    id = db.Column(db.String(100),primary_key=True)
    name = db.Column(db.String(100),nullable=False,default=id)

    def __init__(self,id,name):
        self.id = id
        self.name = name

class Rates(db.Model):
    rid = db.Column(db.Integer,primary_key=True)
    cid = db.Column(db.String(100),db.ForeignKey('currencies.id'))
    eid = db.Column(db.String(100),db.ForeignKey('exchanges.id'))
    rate = db.Column(db.Numeric,nullable=False)
    date = db.Column(db.DateTime,nullable=False)

    def __repr__(self): #define class objects as string
        return f"Rate: {self.cid, self.eid, self.rate, self.date}"
    
    def __init__(self,eid,cid,rate,date):
        self.eid = eid
        self.cid = cid
        self.rate = rate
        self.date = date

def format_output(output):
    return {
        'eid': output.eid,
        'cid': output.cid,
        'rate': output.rate,
        'date': output.date
    }

def format_arbitrage(output):
    return {
        'rate': output.rate,
        'exchange': output.name
    }

def build_history_dict(row):
    return {
        'rate': row.rate,
        'date': str(row.date),
        'currency': row.cid,
        'exchange': row.name
    }

def format_history(output):
    return [build_history_dict(r) for r in output]

@app.route('/', methods=['GET'])
def sendFrontend():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/', methods = ['POST'])
def updateDatabase():
    #scrape data and add to database
    rate = request.json['rate']
    date = request.json['date']
    eid = request.json['eid']
    cid = request.json['cid']
    ename = request.json['ename']
    cname = request.json['cname']
    rate_event = Rates(eid,cid,rate,date)
    ex_event = Exchanges(eid,ename)
    curr_event = Currencies(cid,cname)
    db.session.add(ex_event)
    db.session.add(curr_event)
    db.session.add(rate_event)
    db.session.commit()
    return format_output(rate_event)

@app.route('/arbitrage', methods = ['GET']) 
def getArbitrage():
    #get data
    eid = request.args['eid'].split(',') #is a list (prob request.args, change based on input)
    cid = request.args['cid']
    
    #get most recent
    res = []
    for e in eid:
        res.append(
            Rates.query
                .join(Exchanges)
                .add_columns(Rates.rate, Exchanges.name, Rates.cid)
                .filter(Rates.eid == Exchanges.id)
                .filter(Rates.eid == e, Rates.cid == cid)
                .order_by(Rates.date.desc())
                .limit(1).all()
        )
    res_list = []
    for ele in res:
        res_list.append(format_arbitrage(ele[0]))
    return {'rates': res_list}

@app.route('/history', methods = ['GET']) 
def getHistoricalData():
    #get data
    eid = request.args['eid'].split(',') #is a list
    cid = request.args['cid'] 
    start = request.args['startDate']
    end = request.args['endDate']

    #get all txns between date 1 and 2
    res = []
    for e in eid:
        res.append(Rates.query
            .join(Exchanges)
            .add_columns(Rates.rate, Exchanges.name, Rates.cid, Rates.date)
            .filter(Rates.eid == Exchanges.id)
            .filter(Rates.eid == e, Rates.cid == cid)
            .filter(Rates.date>=start, Rates.date<=end)
            .all()
        )

    res_list = []
    for ele in res:
        res_list.append(format_history(ele))
    return {'history': res_list}

@app.route('/dates', methods = ['GET'])
def getDates():
    dates_unique = Rates.query.with_entities(Rates.date).order_by(asc(Rates.date)).distinct().all()
    return { 'dates': [el.date.strftime("%m/%d/%Y, %H:%M:%S") for el in dates_unique]}

# # CORS handling for frontend debugging, don't enable this otherwise
# @app.after_request
# def after_request_func(response):
#     origin = request.headers.get('Origin')
#     if request.method == 'OPTIONS':
#         response = make_response()
#         response.headers.add('Access-Control-Allow-Credentials', 'true')
#         response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
#         response.headers.add('Access-Control-Allow-Headers', 'x-csrf-token')
#         response.headers.add('Access-Control-Allow-Methods',
#                             'GET, POST, OPTIONS, PUT, PATCH, DELETE')
#         if origin:
#             response.headers.add('Access-Control-Allow-Origin', origin)
#     else:
#         response.headers.add('Access-Control-Allow-Credentials', 'true')
#         if origin:
#             response.headers.add('Access-Control-Allow-Origin', origin)

#     return response

if __name__ == '__main__':
    app.run()