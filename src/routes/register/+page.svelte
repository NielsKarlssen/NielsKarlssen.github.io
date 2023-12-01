<script>
    let firstname = ""
    let lastname = ""
function handleSubmit() {
// Perform form submission logic here
console.log("Hello " + firstname +" "+ lastname + "! Welcome to my website.");
}
</script>


<p>Have an account? <a

    href="/login">Log in</a></p>

<main>

    <h1>Registration Form</h1>

</main>








<form on:submit|preventDefault={handleSubmit}>

    <label for="firstName">First Name:</label>
    <input id="firstName" type="text" bind:value={firstname}/>

    <label for="lastname">Last Name:</label>
    <input id="lastname" type = "text" bind:value={lastname}/>

    <label for="email">Email:</label>
    <input id="email" type = "email"/>

    <label for="password">Password:</label>
    <input id="password" type="password"/>

    <label for="dateofbirth">Date of birth</label>
    <input type="date"/>

<button type="submit">Register</button>

</form>




<style>

form {grid-template-columns: repeat(2, minmax(200px, 1fr));}

    form{display:inline-grid;}



</style>