'use client';
import {useFormStatus} from 'react-dom'


const MealsForm = () => {
    const {pending} = useFormStatus();
  return (
    <button disabled={pending}>
    {pending ? 'Submitting meal...' : 'Share Meal'}
    </button>
  )
}

export default MealsForm
