const scriptURL ='https://script.google.com/macros/s/AKfycby-DxMWMt5iyB0V8rBqt4R0PFkdD5Ss8SG89UAdOyyVoRJlT8JKFj_gqIAJXtuCzOy1HA/exec'



const form = document.forms['contact-form']
 form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thank you! your form is submitted successfully." ))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
})

function loadVideo(containerId, videoUrl) {
    const videoContainer = document.getElementById(containerId);
    
    videoContainer.innerHTML = `<iframe width="560" height="315" src="${videoUrl.replace('watch?v=', 'embed/')}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}


