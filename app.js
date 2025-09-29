const video1 =  document.getElementById("projectVideo1");
const video2 =  document.getElementById("projectVideo2");
const video3 =  document.getElementById("projectVideo3");
const hoversign = document.querySelector(".hover-sign");

const videoList = [video1, video2, video3];

videoList.forEach(function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoversign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
        video.pause()
        hoversign.classList.remove("active")
    })
})

const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('header ul');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
});
