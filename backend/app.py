from flask import Flask,request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://cryptouser:password@localhost/cryptoinfo'
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


@app.route('/', methods = ['POST']) #updating the database
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
    eid = request.json['eid'] #is a list (prob request.args, change based on input)
    cid = request.json['cid']

    #get most recent
    res = []
    for e in eid:
        res.append(Rates.query.filter_by(eid=e,cid=cid).order_by(Rates.date.desc()).limit(1).all())
    res_list = []
    for ele in res:
        res_list.append(format_output(ele))
    return {'rates': res_list}

@app.route('/history', methods = ['GET']) 
def getHistoricalData():
    #get data
    eid = request.json['eid'] #is a list
    cid = request.json['cid'] 
    start = request.json['date_1']
    end = request.json['date_2']

    #get all txns between date 1 and 2
    res = []
    for e in eid:
        res.append(Rates.query.filter_by(eid=e,cid=cid).\
            filter(Rates.date<=start, Rates.date>=end).all())
    res_list = []
    for ele in res:
        res_list.append(format_output(ele))
    return {'rates': res_list}

if __name__ == '__main__':
    app.run()