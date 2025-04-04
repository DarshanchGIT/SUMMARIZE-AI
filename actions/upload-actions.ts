"use server";

import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export async function DeleteFileFromUploadThing(pdf: string) {
  try {
    const response = await utapi.deleteFiles(pdf);
    console.log(response);
  } catch (error) {
    console.error("Error deleting from uploadThing", error);
  }
}
