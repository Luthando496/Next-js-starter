import Image from 'next/image'
import classes from './page.module.css'
import { getSingleMeals } from '@/lib/Meals'
import { notFound } from 'next/navigation'

export async function generateMetadata({params}){
  const meal = getSingleMeals(params.id)

  if(!meal){
    notFound();
  }

  return{
    title: meal.title,
    description: meal.summary,
  }

}



const SlugID = ({params}) => {
  const meal = getSingleMeals(params.id)

  if(!meal){
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g,'<br />')
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>

        <div className={classes.headerText}>
          <h1 className="">{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <div className={classes.summary}>{meal.summary}</div>
        </div>
      </header>

      <main className="main">
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions
        }}>

        </p>
      </main>
    </>
  )
}

export default SlugID