import React from 'react'
import { Box, Paper, Link } from '@mui/material'

const LatestNewsItem = (props) => {

   return (
      <Paper elevation={0}>
         <figure><img src={props.imgSrc} alt={props.title} /></figure>
         <Box sx={{ padding: '2rem 0' }}>

            <p style={{ fontSize: 'var(--fs-topbar)' }}>
               <span style={{ fontWeight: 'bold' }}>{props.category}</span> -- <span>{props.date}</span>
            </p>
            <Link href='#!'><h3 style={{ padding: "1rem 0", color: 'black' }}>{props.title}</h3></Link>
            <p>{props.description}</p>

         </Box>
      </ Paper>
   );
};

export default LatestNewsItem;