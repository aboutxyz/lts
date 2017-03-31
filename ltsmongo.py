# coding:utf-8
import re
import pymongo
from bson.son import SON
connection = pymongo.MongoClient("localhost", 27017)
db = connection.ltsdata
collection = db.data

pipeline = [{"$match":{"航线":"CKA"}},{"$group": {"_id" :{"client" : "$订舱人名称"} , "count": {"$sum": "$TEU"}}},{"$sort": SON([("count", -1), ("_id.voyage", -1)])}]


for i in list(collection.aggregate(pipeline)):
    print i["_id"]["client"], i["count"]


        
# db.data.aggregate([ { $group: {"_id": { "client" : "$订舱人名称", "voyage":"$航线"} , "number":{$sum:"$TEU"}} } ,{$sort:{"_id.voyage":1, number:-1}}]); 

#db.data.aggregate([ {$match:{"航线":"CKA"}},{ $group: {"_id": { "client" : "$订舱人名称"} , "number":{$sum:"$TEU"}} } ,{$sort:{"_id.voyage":1, number:-1}}]);


