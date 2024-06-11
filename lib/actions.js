'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./Meals";
import { revalidatePath } from "next/cache";

export const shareFood=async(formData)=>{
    const meal = {
      creator:formData.get('name'),
      creator_email:formData.get('email'),
      title:formData.get('title'),
      summary:formData.get('summary'),
      instructions:formData.get('instructions'),
      image:formData.get('image')
    }

    console.log(meal)

    await saveMeal(meal)

    revalidatePath('/meals','layout');

    redirect('/meals')

  }