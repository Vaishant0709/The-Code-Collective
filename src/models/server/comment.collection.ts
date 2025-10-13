import {IndexType, Permission} from "node-appwrite"

import {db,commentCollection} from "../name"
import {databases} from "./config"

export default async function createQuestionCollectio (){
  //create collection 
  await databases.createCollection(db,commentCollection,commentCollection,[
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users")
  ])

  console.log("COMMENTS COLLECTION CREATED")

  //creating attributes 

  await Promise.all([
    databases.createStringAttribute(db,commentCollection,"content",10000,true),
    databases.createEnumAttribute(db,commentCollection,"type",["answer","question"],true),
    databases.createStringAttribute(db,commentCollection,"authorId",50,true),
    databases.createStringAttribute(db,commentCollection,"typeId",50,true,undefined,true),
  ]);
  console.log("COMMENTS ATTRIBUTES CREATED");

 
}