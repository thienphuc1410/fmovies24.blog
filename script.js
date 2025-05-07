

var bannerWrappers = document.querySelectorAll('.banner_wrapper');


bannerWrappers.forEach(function(bannerWrapper) {

    var xButton = document.createElement('button');

    
    xButton.innerHTML = '&times;';

    
    xButton.style.position = 'absolute';
    xButton.style.top = '-5px'; 
    xButton.style.right = '-5px'; 
    xButton.style.padding = '0 5px'; 
    xButton.style.border = 'none';
    xButton.style.backgroundColor = '#ffffff'; 
    xButton.style.color = '#000'; 
    xButton.style.fontWeight = 'bold';
    xButton.style.fontSize = '25px'; 
    xButton.style.lineHeight = '24px'; 
    xButton.style.cursor = 'pointer';
    xButton.style.boxShadow = 'rgb(0, 0, 0) 0px 2px 4px';
    xButton.style.borderRadius = '2px';
    xButton.style.transition = 'background-color 0.3s'; 

    
    xButton.style.display = 'none';
    setTimeout(function() {
        xButton.style.display = 'block';
    }, 3000);

    
    xButton.addEventListener('mouseover', function() {
        xButton.style.backgroundColor = '#e0e0e0'; 
    });

    xButton.addEventListener('mouseout', function() {
        xButton.style.backgroundColor = '#ffffff'; 
    });


    xButton.addEventListener('click', function() {

        var iframes = bannerWrapper.querySelectorAll('iframe');
        iframes.forEach(function(iframe) {
            iframe.style.display = 'none';
        });


        xButton.style.display = 'none';
    });

    
    bannerWrapper.appendChild(xButton);
});


fetch('/link.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Dont load link: ' + response.statusText);
    }
    return response.text();
  })
  .then(text => {
    const links = text.split('\n').map(line => line.trim()).filter(line => line !== '');
    const randomLink = links[Math.floor(Math.random() * links.length)];
    document.getElementById('main-iframe').src = randomLink;
  })
  .catch(error => {
    console.error('errorr URL:', error);
  }); 