import MultiActionAreaCard from '@/component/Card';
import { getData } from '@/utils/getData';
import React from 'react'

export default async function page() {
 const usersData = await getData("https://dummyjson.com/recipes");
 
   return (
     
     <MultiActionAreaCard members={usersData?.recipes || []} rout={"recipes"}> </MultiActionAreaCard>
   )
}
