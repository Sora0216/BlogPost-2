document.getElementById("new-post").addEventListener("click", async () => {
  const title = prompt("Enter the title of your post:");
  const content = prompt("Enter the content of your post:");

  if (title && content) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create post");
    }
  }
});
