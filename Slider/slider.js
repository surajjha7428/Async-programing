let imageArr = [
    "https://images.alphacoders.com/605/605799.jpg",
    "https://wallpapercave.com/wp/wp12416854.jpg",
    "https://wallpapercave.com/wp/CzAZAOD.jpg",
    "https://wallpapers.com/images/hd/dragon-ball-z-goku-izgexbvdpxyjqkck.jpg",
    "https://images8.alphacoders.com/403/403511.jpg",
    "https://images2.alphacoders.com/516/thumb-1920-516664.jpg",
    "https://preview.redd.it/buy0srooere71.png?auto=webp&s=c883bbb0e42a1cbfdf76f14194fced29ec7489e6",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c640f2d-8a5b-4996-8504-8a0ef55c1029/d9tcg86-cd7e6b0d-08ae-4c29-8599-f89320aa5a56.png/v1/fill/w_1024,h_576/one_piece_wallpaper_hd_by_miahatake13_d9tcg86-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvNWM2NDBmMmQtOGE1Yi00OTk2LTg1MDQtOGEwZWY1NWMxMDI5XC9kOXRjZzg2LWNkN2U2YjBkLTA4YWUtNGMyOS04NTk5LWY4OTMyMGFhNWE1Ni5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.j6WhXGVH17pM2sAJNQBRVVt6BjdXfyBETvUtBUgR5aQ",
    "https://4kwallpapers.com/images/wallpapers/one-piece-netflix-3840x2160-12664.jpg",
    "https://s1.picswalls.com/wallpapers/2015/09/27/awesome-one-piece-wallpaper_011515110_277.jpg",
    "https://images2.alphacoders.com/133/1337462.png",    
    "https://wallpaperset.com/w/full/a/a/6/501284.jpg",
    "https://images.alphacoders.com/205/205913.jpg",
    "https://wallpapercave.com/wp/jzx2Bg8.jpg",
    "https://c4.wallpaperflare.com/wallpaper/299/269/227/naruto-theme-background-images-wallpaper-preview.jpg",
    "https://wallpaperaccess.com/full/394052.jpg",
    "https://dw9to29mmj727.cloudfront.net/promo/2016/6226-SeriesHeaders_DN_2000x800.jpg",
    "https://i0.wp.com/dmtalkies.com/wp-content/uploads/2021/01/Death-Note-Light-L-and-Ryuk-Cropped-compressed.jpg?resize=696%2C348&ssl=1",
    "https://wallpaperset.com/w/full/9/1/e/225292.jpg",
    "https://wallpaperxyz.com/wp-content/uploads/One-Piece-Manga-Wallpaper-Full-HD-Free-Download-for-Desktop-PC-Laptop-Macbook-1710-Wallpaperxyz.com-1.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhz4tDMMJixg1iD5YSo7RviOh-3Rv279Qbt17yGixPRcr73ein2MHcHpa5tDD2BcK7VoK8qbkU2DR489kTOnikGWPHMOjPY4fk5IrwDptmKJcgwQIawkp4KOG-BB393fmyQ5v2Fdd41oRFobnAwjFrYnZ7pM0Vmf9GiD59PtFBW8wB2w5kf3-c_5zZ2Td8/s700/angry-gut-berserk-hd-wallpaper.jpg",
    "https://images7.alphacoders.com/134/thumb-1920-1341150.png",
    "https://motionbgs.com/i/c/960x540/media/3143/unyielding-itachis-sharingan.jpg",
    "https://images.alphacoders.com/132/1328866.png",
    "https://www.pixel4k.com/wp-content/uploads/2018/03/One%20Piece%20Anime1914018237.jpg.webp",
]

// let image=document.querySelector("img");
// let currentImage=0;
// image.setAttribute("src",imageArr[currentImage]);
// //-------------------------Next Button Function----------------------------//
// let next=document.getElementById("next");
// next.addEventListener("click",function(){
//     currentImage++
//     if(currentImage>=imageArr.length){
//         currentImage=0;
//     }
//     image.setAttribute("src",imageArr[currentImage]);
//     clearInterval(id);
// });
// //-------------------------Previous Button Function------------------------//
// let previous=document.getElementById("previous");
// previous.addEventListener("click",function(){
//     currentImage--;
//     if(currentImage<0){
//         currentImage=imageArr.length-1;
//     }
//     image.setAttribute("src",imageArr[currentImage]);
//     clearInterval(id);
// })
// //-------------------------Start Button Function--------------------------//
// let start=document.getElementById("start");
// start.addEventListener("click",function(){
//     id=setInterval(()=>{
//        currentImage++;
//     if(currentImage>=imageArr.lenght){
//         currentImage=0;
//     };
//     image.setAttribute("src",imageArr[currentImage]);
//     },1000);
// })
// //------------------------Stop Button Function---------------------------//
// let stop = document.getElementById("stop");
// stop.addEventListener("click",function(){
//     clearInterval(id);
// })


  

  
  let image = document.querySelector("img");
  let currentImage = 0;
  let id; // Define id globally
  
  image.setAttribute("src", imageArr[currentImage]);
  
  //-------------------------Next Button Function----------------------------//
  let next = document.getElementById("next");
  next.addEventListener("click", function () {
    currentImage++;
    if (currentImage >= imageArr.length) {
      currentImage = 0;
    }
    image.setAttribute("src", imageArr[currentImage]);
    clearInterval(id);
  });
  
  //-------------------------Previous Button Function------------------------//
  let previous = document.getElementById("previous");
  previous.addEventListener("click", function () {
    currentImage--;
    if (currentImage < 0) {
      currentImage = imageArr.length - 1;
    }
    image.setAttribute("src", imageArr[currentImage]);
    clearInterval(id);
  });
  
  //-------------------------Start Button Function--------------------------//
  let start = document.getElementById("start");
  start.addEventListener("click", function () {
    id = setInterval(() => {
      currentImage++;
      if (currentImage >= imageArr.length) {
        currentImage = 0;
      }
      image.setAttribute("src", imageArr[currentImage]);
    }, 1000);
  });
  
  //------------------------Stop Button Function---------------------------//
  let stop = document.getElementById("stop");
  stop.addEventListener("click", function () {
    clearInterval(id);
  });
  