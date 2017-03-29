# coding:utf-8
import re
import pymongo

from bson.son import SON
connection = pymongo.MongoClient("localhost", 27017)
db = connection.ltsdata
collection = db.data


with open("clientname.txt","a+") as f:
    for i in collection.distinct("订舱人名称"):
        f.write(i.encode("utf-8")+'\n')
        