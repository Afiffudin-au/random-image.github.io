    const images = document.querySelector('.images');
    const button  = document.querySelector('.button-ge');
    function getRandomSize(min, max) {
      min =  Math.ceil(min);
      max = Math.floor(max);
      return parseInt(Math.floor(Math.random() * (max - min + 1) + min));
    }
button.addEventListener('click',function () {
      const note  = document.querySelector('.note');
      const number = document.querySelector('.number').value;
      const widthInput = document.querySelector('.width-input').value;
      const heightInput = document.querySelector('.height-input').value;
      const catagory = document.querySelector('.catagory-filter').value;
      note.classList.add('note-fade');
      setTimeout(function () {
        note.style.display = 'none';
      },1300);
     
      //check H or W , if same return;
      // if(heightInput==''){
      //   alert('Please Input widht and height');
      //   return;
      // }
      // if(widthInput==''){
      //   alert('Please Input widht and height');
      //   return;
      // }
      //check H or W < 100, if true return;
      //Cek number null or not,if null return
      if(number == ''){
        alert('Please Input Count Image');
        return;
      }


      if(heightInput == '' && widthInput==''){
        for(let i = 1; i<=number; i++){
          console.log('width and heigh kosong');
          //create element img
          const image = document.createElement('img');
          //get random number and save in variable w,h
          let w = getRandomSize(200,400);
          let h = getRandomSize(200,400);
          //create variable and fill in[url];
          //https://source.unsplash.com/1600x900/?nature,water
          let href = 'https://source.unsplash.com/random/';   
          //set attribute element image  
          image.setAttribute('src',href+w+'x'+h+'/?'+catagory);       
          //images appendChild image ,not married but have children code not impossible , hahah i joke 
          images.appendChild(image);
        }
        return;
      }
      if(heightInput == ''){
        for(let i = 1; i<=number; i++){
          console.log('height kosong');
          //create element img
          const image = document.createElement('img');
          //get random number and save in variable w,h
          let w = getRandomSize(widthInput,400);
          let h = getRandomSize(widthInput,400);
          //create variable and fill in[url];
          //https://source.unsplash.com/1600x900/?nature,water
          let href = 'https://source.unsplash.com/random/';   
          //set attribute element image  
          image.setAttribute('src',href+w+'x'+h+'/?'+catagory);       
          //images appendChild image ,not married but have children code not impossible , hahah i joke 
          images.appendChild(image);
        }
        return;
      }
      if(widthInput==''){
        for(let i = 1; i<=number; i++){
          console.log('width kosong');
          //create element img
          const image = document.createElement('img');
          //get random number and save in variable w,h
          let w = getRandomSize(400,heightInput);
          let h = getRandomSize(400,heightInput);
          //create variable and fill in[url];
          //https://source.unsplash.com/1600x900/?nature,water
          let href = 'https://source.unsplash.com/random/';   
          //set attribute element image  
          image.setAttribute('src',href+w+'x'+h+'/?'+catagory);       
          //images appendChild image ,not married but have children code not impossible , hahah i joke 
          images.appendChild(image);
        }
        return;
      }

      if(heightInput==widthInput && widthInput==heightInput){
        alert('Please Input Not Same,between widht and height');
        return;
      }
      if(heightInput<100 && widthInput<100){
        alert('Recommended Input Height Or Width >100');
        // return; 
      }
      if(widthInput != '' && heightInput != ' '){
        for(let i = 1; i<=number; i++){
          console.log('width and height tidak kosong')
          //create element img
          const image = document.createElement('img');
          //get random number and save in variable w,h
          let w = getRandomSize(widthInput,heightInput);
          let h = getRandomSize(widthInput,heightInput);
          //create variable and fill in[url];
          //https://source.unsplash.com/1600x900/?nature,water
          let href = 'https://source.unsplash.com/random/';   
          //set attribute element image  
          image.setAttribute('src',href+w+'x'+h+'/?'+catagory);       
          //images appendChild image ,not married but have children code not impossible , hahah i joke 
          images.appendChild(image);
        }
        return;
      }
        
});