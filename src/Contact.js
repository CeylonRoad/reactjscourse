import React from 'react'

const Contact = (myprop) => {
  const customers = myprop.customer
  return (
    <div>
      {customers.map((customerList) => {
        return (
          <div>
            <h1>{customerList.name}</h1>
            <h1>{customerList.age}</h1>
            <h1>{customerList.gender}</h1>
            <hr/>
          </div>
        )
      })}
    </div>
  )
}

export default Contact


