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
     
      // Eng = Check number  empty or not,if  empty return
      // Ind = Periksa angka nol atau tidak, jika kosong kembali
      if(number == ''){
        alert('Please Input Count Image');
        return;
      }

      //Eng = check height input and width input empty or not ,if empty run
      //Ind  = periksa tinggi input dan lebar input kosong atau tidak, jika kosong dijalankan
      if(heightInput == '' && widthInput==''){
        for(let i = 1; i<=number; i++){
          console.log('Empty width and height');
          //Eng = create element img
          //Ind = membuat element img
          const image = document.createElement('img');
          //Eng = get random number and save in variable w,h
          //Ind = mendapatkan random number dan disimpkan ke variable w,h
          //Eng = height input and width input empty ,set default value w = 200,h = 400
          let w = getRandomSize(200,400);
          let h = getRandomSize(200,400);
          //Eng = create variable and fill in[url];
          //Ind = Membuat variable dan isi [url] 
          let href = 'https://source.unsplash.com/random/';   
          //Eng = set attribute element image  
          //Ind = set attribute element image
          image.setAttribute('src',href+w+'x'+h+'/?'+catagory);       
          //images appendChild image
          images.appendChild(image);
        }
        return;
      }
       // Eng = Check height empty or not
       // Ind = Periksa ketinggian kosong atau tidak,
      if(heightInput == ''){
        for(let i = 1; i<=number; i++){
          console.log('empty height');
          //create element img
          //Ind = membuat element img
          const image = document.createElement('img');
          //Eng = get random number and save in variable w,h
          //Ind = mendapatkan random number dan disimpkan ke variable w,h

          //Eng = height input empty ,set default h = 400
          //Ind = input tinggi kosong, atur default h = 400
          let w = getRandomSize(widthInput,400);
          let h = getRandomSize(widthInput,400);
          //Eng = create variable and fill in[url];
          //Ind = Membuat variable dan isi [url] 
          let href = 'https://source.unsplash.com/random/'; 
          //Eng = set attribute element image  
          //Ind = set attribute element image  
          image.setAttribute('src',href+w+'x'+h+'/?'+catagory);       
           //images appendChild image
          images.appendChild(image);
        }
        return;
      }
     // Eng = Check width empty or not
      // Ind = Periksa lebar kosong atau tidak
      if(widthInput==''){
        for(let i = 1; i<=number; i++){
          console.log('empty width');
          //create element img
          //Ind = membuat element img
          const image = document.createElement('img');
          //Eng = get random number and save in variable w,h
          //Ind = mendapatkan random number dan disimpkan ke variable w,h

          //Eng = width input empty ,set default w = 400
          //Ind = input lebar kosong, atur default w = 400
          let w = getRandomSize(400,heightInput);
          let h = getRandomSize(400,heightInput);
          //Eng = create variable and fill in[url];
          //Ind = Membuat variable dan isi [url] 
          let href = 'https://source.unsplash.com/random/';   
          //Eng = set attribute element image  
          //Ind = set attribute element image  
          image.setAttribute('src',href+w+'x'+h+'/?'+catagory);       
          //images appendChild image
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
      }

      //Eng = width and height not empty
      //Ind = lebar dan tinggi tidak kosong
      if(widthInput != '' && heightInput != ' '){
        for(let i = 1; i<=number; i++){
          console.log('width and height are not empty')
          //create element img
          //Ind = membuat element img
          const image = document.createElement('img');
          //Eng = get random number and save in variable w,h
          //Ind = mendapatkan random number dan disimpkan ke variable w,h

          //Eng = width and height not empty , set default input user
          //Ind = lebar dan tinggi tidak kosong, tetapkan pengguna input default
          let w = getRandomSize(widthInput,heightInput);
          let h = getRandomSize(widthInput,heightInput);
          //Eng = create variable and fill in[url];
          //Ind = Membuat variable dan isi [url]
          let href = 'https://source.unsplash.com/random/';   
           //Eng = set attribute element image  
          //Ind = set attribute element image    
          image.setAttribute('src',href+w+'x'+h+'/?'+catagory);       
           //images appendChild image
          images.appendChild(image);
        }
        return;
      }
        
});