#coding:utf-8

import pymongo
from bson.son import SON
connection = pymongo.MongoClient("localhost", 27017)
db = connection.ltsdata
collection = db.data

pipeline = [{"$group": {"_id" :{"client" : "$订舱人名称", "voyage":"$航线"} , "count": {"$sum": "$TEU"}}},{"$sort": SON([("count", -1), ("_id.voyage", -1)])}]


print str(list(collection.aggregate(pipeline)))