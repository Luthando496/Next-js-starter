import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs'


const db = new sql('meals.db');


const getMeals =()=>{
    return db.prepare('SELECT * FROM meals').all();
}

const getSingleMeals =(slug)=>{
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

const saveMeal= async (meal)=>{
    meal.slug = slugify(meal.title,{lower:true});
    meal.instructions = xss(meal.instructions);
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`
    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const buffer = await  meal.image.arrayBuffer();


    stream.write(Buffer.from(buffer),(err)=> {
        if(err){
            throw new Error('Saving Image Failed bro!!')
        }
})

    meal.image = `/images/${fileName}`

    db.prepare(
        `
        INSERT INTO meals
          (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
          @title,
          @summary,
          @instructions,
          @creator,
          @creator_email,
          @image,
          @slug
        )
      `
      ).run(meal);

}


export {getMeals,getSingleMeals,saveMeal};

