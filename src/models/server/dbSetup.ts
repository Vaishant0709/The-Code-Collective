import {db} from "../name"
import createAnswerCollection from "./answer.collection"
import createCommentCollection from "./comment.collection"
import createQuestionCollectio from "./question.collection"
import createVoteCollection from "./vote.collection"
import { databases } from "./config"


export default async function getOrCreateDb(){
  try {
    await databases.get(db)
    console.log("DB CONNECTED")
  } catch (error) {
    try {
      await databases.create(db,db)
      console.log("DB CREATED")
      //create collections
      await Promise.all([
        createQuestionCollectio(),
        createAnswerCollection(),
        createCommentCollection(),
        createVoteCollection()
      ])
      console.log("ALL COLLECTIONS CREATED");
      console.log("DB CONNECTED")
    } catch (error) {
      console.log("ERROR IN DB CREATION : ",error)
    }
  }

  return databases
}