const Greeting=({name})=>{
    let greetngMassage=name ? `Hello ${name}`  : "Wellcome"
    return(
        <div>
            <h1>{greetngMassage}</h1>
        </div>
    )
}
export default Greeting