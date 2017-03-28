# coding:utf-8
import re
import pymongo
from flask import Flask, render_template, url_for
app = Flask(__name__)


from bson.son import SON
connection = pymongo.MongoClient("localhost", 27017)
db = connection.ltsdata
collection = db.data

pipeline = [{"$group": {"_id" :{"client" : "$订舱人名称", "voyage":"$航线"} , "count": {"$sum": "$TEU"}}},{"$sort": SON([("count", -1), ("_id.voyage", -1)])}]


@app.route('/')
def index():
    # return str(list(collection.aggregate(pipeline))[0]['_id'])
    return render_template('index.html')

if __name__ == '__main__':
    app.run()


        
# db.data.aggregate([ { $group: {"_id": { "client" : "$订舱人名称", "voyage":"$航线"} , "number":{$sum:"$TEU"}} } ,{$sort:{"_id.voyage":1, number:-1}}]); 


