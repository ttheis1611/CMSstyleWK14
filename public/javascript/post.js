async function postHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('input[name="post-text"]').value;
  
    const response = await fetch(`/api/post`, {
      method: 'post',
      body: JSON.stringify({
        title,
        post_text
      }),

        headers: { 'Content-Type': 'application/json' }
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#post').addEventListener('click', postHandler);