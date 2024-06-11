
import Link from 'next/link';
import classes from './page.module.css'
import MealsGrid from '@/components/meals/mealsGrid';
import {getMeals} from '@/lib/Meals';
import { Suspense } from 'react';

  

function Meals() {
  const meals = getMeals();
      return  <MealsGrid meals={meals} />
}

const MealsPage = () => {
  return (
    <>

      <header className={classes.header}>
        <h1 className="">
          Delicious meals created <span className={classes.highlight}>by you.</span>
        </h1>
        <p className="">Choose your favorite recipe and cook it yourself</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share your favorite recipe.</Link>
        </p>
      </header>

      <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>
      Fetching meals...
    </p>}>
      <Meals />
      </Suspense>
      </main>
    </>
  )
}

export default MealsPage;