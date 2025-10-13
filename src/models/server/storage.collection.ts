import { Permission } from "node-appwrite";
import { questionAttachmentBucket } from "../name";
import { storage } from "./config";




export default async function getOrCreateStorage(){
  try {
    await storage.getBucket(questionAttachmentBucket);
    console.log("STORAGE CONNECTED");
  } catch (error) {
    try {
      await storage.createBucket(questionAttachmentBucket,questionAttachmentBucket,[
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users")
      ],
      false,
      undefined,
      undefined,
      ["jpg","png","gif","jpeg","webp","heic"]

      );
      console.log("STORAGE CREATED");
      console.log("STORAGE CONNECTED");
      
    } catch (error) {
      console.log("ERROR IN CREATING STORAGE : ",error );
    }
  }
}