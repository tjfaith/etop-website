import React from 'react'
interface EmailTemplateProps {
  username: string;
}

const EmailTemplate = ({username}:EmailTemplateProps) => {
  return (
<h1>Welcome, {username}!</h1>  
  )
}

export default EmailTemplate