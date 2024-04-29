function handleFormSubmit(event) {
    event.preventDefault();  // 'preventDefault()' method prevents the default behaviours associated with the 'event' object.
    console.log("Form submitted");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="write something" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}