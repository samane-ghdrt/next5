import MultiActionAreaCard from '@/component/Card';
import { getData } from '@/utils/getData';
import React from 'react'

export default async function page() {
const usersData = await getData("https://dummyjson.com/posts");
 
   return (
     
     <MultiActionAreaCard members={usersData?.posts || [] } rout={"posts"}> </MultiActionAreaCard>
   )
}
