import { Permission} from "node-appwrite"

import {db,voteCollection} from "../name"
import {databases} from "./config"

export default async function createQuestionCollectio (){
  //create collection 
  await databases.createCollection(db,voteCollection,voteCollection,[
    Permission.create("users"),
    Permission.read("any"),
    Permission.read("users"),
    Permission.update("users"),
    Permission.delete("users")
  ])

  console.log("ANSWERS COLLECTION CREATED")

  //creating attributes 

  await Promise.all([
    databases.createStringAttribute(db,voteCollection,"votedById",50,true),
    databases.createEnumAttribute(db,voteCollection,"type",["question","answer"],true),
    databases.createEnumAttribute(db,voteCollection,"voteStatus",["upvoted","downvoted"],true),
    databases.createStringAttribute(db,voteCollection,"typeId",50,true,undefined,true),
  ]);
  console.log("ANSWERS ATTRIBUTES CREATED");

 
}