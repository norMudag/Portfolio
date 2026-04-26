
'use client'
import Link from 'next/link'
import React from 'react'
import { Facebook,Github,Linkedin } from 'lucide-react'

 const Links = [
    {href:"https://github.com/norMudag", Icon: <Github/>},
    {href:"https://www.facebook.com/mDagz0/", Icon: <Facebook/>},
    {href:"https://www.linkedin.com/in/mohammad-nor-mudag-89520b371/", Icon: <Linkedin/>}
]
interface LinkProps {
  containerStyle:string,
  IconStyle:string,
}

 const Social = ({containerStyle,IconStyle}:LinkProps ) => {
 
  return (
    <div className={containerStyle}>
      {Links.map((item,index)=>{
        return(
          
          <Link href={item.href} key={index} className={IconStyle} >{item.Icon}</Link>
        )
      })}
    </div>
  )
}
export default Social
