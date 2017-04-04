# coding:utf-8
import re
import collections
import pymongo
from bson.son import SON
connection = pymongo.MongoClient("localhost", 27017)
db = connection.ltsdata
collection = db.data

pipelineCKA = [{"$match":{"航线":"CKA"}},{"$group": {"_id" :{"client" : "$订舱人名称"} , "count": {"$sum": "$TEU"}}},{"$sort": SON([("count", -1), ("_id.voyage", -1)])}]

pipelineCPS = [{"$match":{"航线":"CPS"}},{"$group": {"_id" :{"client" : "$订舱人名称"} , "count": {"$sum": "$TEU"}}},{"$sort": SON([("count", -1), ("_id.voyage", -1)])}]

for i in collection.distinct("订舱人名称"):
    print i
    
datalistCKA = []
datadictCKA = collections.OrderedDict()
for j in list(collection.aggregate(pipelineCKA)):
    datadictCKA[j["_id"]["client"]] = j["count"]

for i in collection.distinct("订舱人名称"):
    if i in datadictCKA.keys():
        datalistCKA.append(datadictCKA[i])
    else:
        datalistCKA.append(0)
        
print datalistCKA

datalistCPS = []
datadictCPS = collections.OrderedDict()
for j in list(collection.aggregate(pipelineCPS)):
    datadictCPS[j["_id"]["client"]] = j["count"]

for i in collection.distinct("订舱人名称"):
    if i in datadictCPS.keys():
        datalistCPS.append(datadictCPS[i])
    else:
        datalistCPS.append(0)
        
print datalistCPS


        
# db.data.aggregate([ { $group: {"_id": { "client" : "$订舱人名称", "voyage":"$航线"} , "number":{$sum:"$TEU"}} } ,{$sort:{"_id.voyage":1, number:-1}}]); 

#db.data.aggregate([ {$match:{"航线":"CKA"}},{ $group: {"_id": { "client" : "$订舱人名称"} , "number":{$sum:"$TEU"}} } ,{$sort:{"_id.voyage":1, number:-1}}]);


