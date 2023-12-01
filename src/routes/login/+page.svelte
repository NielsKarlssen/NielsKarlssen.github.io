<script>
    let firstname = ""
    let lastname = ""
function handleSubmit() {
// Perform form submission logic here
console.log("" + firstname +" "+ lastname + "You have succesfully logged in!");
}
</script>


<p>New to this website? <a

    href="/register">register</a></p>

<main>

    <h1>Log in</h1>

</main>








<form on:submit|preventDefault={handleSubmit}>


    <label for="email">Email:</label>
    <input id="email" type = "email"/>

    <label for="password">Password:</label>
    <input id="password" type="password"/>

<button type="submit">Register</button>

</form>




<style>

form {grid-template-columns: repeat(2, minmax(200px, 1fr));}

    form{display:inline-grid;}



</style>