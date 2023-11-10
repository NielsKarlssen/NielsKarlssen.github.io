<script>
    let images = [
        "https://www.diakonia.se/_next/image/?url=https%3A%2F%2Fapidiakoniase.cdn.triggerfish.cloud%2Fuploads%2F2021%2F04%2FUganda_Woman-and-house_Sumy-Sadurni.jpg&w=3840&q=75",
        "https://as1.ftcdn.net/v2/jpg/02/94/62/14/1000_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg"
    ];
    let pageTitle = "Daddy Cool";
</script>

<main>
    <h1>{pageTitle}</h1>
    <h2>Hello world.</h2>

    <div class="images">
        {#each images as image}
            <div class="image-wrapper">
                <img src={image} alt="flexbox vsgridbox" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
        {/each}
    </div>
</main>

<style>
    main {
        text-align: center;
        padding-left: 35px;
        padding-top: 5px;
    }

    h1,
    h2 {
        color: black;
        font-family: Arial, Helvetica, sans-serif;
    }

    .images {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        max-width: 100vw;
        margin: 0 auto;
    }

    .image-wrapper {
        width: 300px; /* You can adjust this value based on your design */
        margin-right: 25px;
        margin-bottom: 25px;
        overflow: hidden;
        flex:1;
    }
</style>