import React from 'react'

const NewMemo = (props) => {
    console.log("Newcomp render",props.newcount)
  return (
    <div><hr/>
      <h1>NewMemo: {props.newcount}</h1>
    </div>
  )
}
export default React.memo(NewMemo)
