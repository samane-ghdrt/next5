import React, { Suspense } from 'react'
import { getData} from "@/utils/getData"
import ListI from '@/component/List';
import { Box } from '@mui/material';
export default async function Home() {
 const usersData = await getData("https://dummyjson.com/users");
  const postsData = await getData("https://dummyjson.com/posts");
  const recipesData = await getData("https://dummyjson.com/recipes");
  console.log(postsData.posts);
  
  return (
<div > 
  <Box sx={{ border: 1 ,m:2}}>
  <Suspense fallback={<p>loding....</p>}>
<ListI items={usersData?.users || []}/>
</Suspense>
</Box>
<Box sx={{ border: 1 ,m:2}}>

<Suspense fallback={<p>loding....</p>}>
<ListI items={postsData?.posts || []}/>
</Suspense>
</Box>
<Box sx={{ border: 1 ,m:2}}>
<Suspense fallback={<p>loding....</p>}>
<ListI items={recipesData?.recipes || []}/>
</Suspense>
</Box>
</div>
  )
}
