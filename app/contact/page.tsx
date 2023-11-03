import React from 'react'
import Map from './Map'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact | Skillsync',
  description: 'Home | Skillsync',
}
function page() {
  return (
    <div>
        <Map/>

    </div>

  )
}

export default page