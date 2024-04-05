import React from 'react'

type HelloWorld = {
    name: string,
    color: string
}

type TitleProps = {
    children : React.ReactNode
}

function TsExersice(props:HelloWorld) {


    const containerStyle: React.CSSProperties  = {
        color: props.color,
    }

    const onChangeHandler = (event : React.ChangeEvent<HTMLInputElement> )=>{
        event.target.value;
    }
    const onCLickHandler = (event : React.MouseEvent<HTMLButtonElement, MouseEvent> )=>{
        event.preventDefault();
    }

  return (
    <div style={containerStyle}>
        {props.color}

        <form action="">
            <input type="text" onChange={(e)=>{onChangeHandler}} />
            <button onClick={(e)=>{onCLickHandler}}>Click me</button>
        </form>
    </div>
  )
}

export default TsExersice