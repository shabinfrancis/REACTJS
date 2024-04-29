function printHello(event) {
    console.log("Hello!");
    console.log(event); // prints 'event' object.
}
function printBye() {
    console.log("Bye!");
}

export default function Button(){
    return(
        <div>
            {/* Handling Click Events. */}
            <button onClick={printHello}>Click Me!</button> 
            {/* Handling Non-Click Events. */}
            <p onMouseOver={printBye}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente praesentium non nihil tempora aperiam dolorem in assumenda omnis veniam. Sed ab maxime itaque excepturi obcaecati quod molestiae facere, facilis ratione.
            </p>
        </div>
    )

}