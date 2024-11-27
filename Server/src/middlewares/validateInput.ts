import { Request } from "express";

export function verifyInputs(requiredFields: string[], data:Request ) {
   const missingFields = requiredFields.filter(field => !(field in data));

   if (missingFields.length > 0) {
      return false;
   }


};
