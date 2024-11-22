const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**

    // TODO
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let params = new URLSearchParams({ name, age });
    let resp = await fetch(`https://echo.zuplo.io/api?` + params.toString());

    try{
        let data = await resp.json();
        output.textContent = JSON.stringify(data, null, 2);
    } 
    catch(error){
        output.textContent = `Error: ` + error.message;
    }
}); 

document.getElementById("post-json-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as JSON
    // The two input fields should be included in the request body as **JSON data**

    // TODO
    // Get the values of the input fields
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    try{
        let response = await fetch("https://echo.zuplo.io/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, age })
        });

        let data = await response.json();

        output.textContent = JSON.stringify(data, null, 2);
    } 
    catch(error){
        output.textContent = `Error: ${error.message}`;
    }
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as form data
    // The two input fields should be included in the request body as **url-encoded data**

    // TODO
    // Get the values of the input fields
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    try{
        let formData = new URLSearchParams({ name, age });

        let response = await fetch("https://echo.zuplo.io/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData.toString()
        });

        let data = await response.json();

        output.textContent = JSON.stringify(data, null, 2);
    } 
    catch (error){
        output.textContent = `Error: ${error.message}`;
    }
});
