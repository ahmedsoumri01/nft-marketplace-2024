import React from 'react'

type Props = {
    pageTitle : string
    pageDescription : string
}

export default function PageHeader({pageTitle,pageDescription}: Props) {
  return (
    <div>
        <h1 className="text-5xl font-bold text-white py-2">{pageTitle}</h1>
        <p className="mt-2 text-xl text-white  py-2">{pageDescription}</p>
    </div>
  )
}