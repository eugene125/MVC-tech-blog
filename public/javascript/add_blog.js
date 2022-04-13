async function addBlog(event) {
    event.preventDefault();

    const title = document.querySelector("input[name='title']").value;
    const blogText = document.querySelector("input[name='blogText']").value;

    const response = await fetch("api/blogs", {
        method: "POST",
        body: JSON.stringify({
            title,
            blogText
        }),
        
    })
}