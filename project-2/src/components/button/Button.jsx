
function Button(props) {
  return (
    <div>
        <button  className="flex gap-x-2 items-center justify-center rounded-md bg-white text-base text-black  p-4 text-center">{props.iconX} {props.text}</button>
    </div>
  )
}

export default Button