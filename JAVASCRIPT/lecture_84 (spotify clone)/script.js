document.addEventListener("DOMContentLoaded", () => {
  const symbol = document.getElementById("symbol");
  const tooltip = document.getElementById("tooltip");
  const playlistPopup = document.getElementById("playlistPopup");
  const notNowBtn = document.getElementById("notNow");
  const cardBtns = document.querySelectorAll(".card-btn");
  
  // State variables
  let tooltipVisible = false;
  let popupVisible = false;
  
  // Show tooltip when clicking the + button
  symbol.addEventListener("click", (e) => {
    e.stopPropagation();
    tooltip.style.opacity = "1";
    tooltip.style.pointerEvents = "auto";
    tooltipVisible = true;
    
    // Close popup if open
    if (popupVisible) {
      playlistPopup.style.display = "none";
      popupVisible = false;
    }
  });
  
  // Show popup when clicking the tooltip
  tooltip.addEventListener("click", (e) => {
    e.stopPropagation();
    playlistPopup.style.display = "block";
    popupVisible = true;
    
    // Hide tooltip
    tooltip.style.opacity = "0";
    tooltip.style.pointerEvents = "none";
    tooltipVisible = false;
  });
  
  // Show popup when clicking any "Create playlist" buttons
  cardBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      playlistPopup.style.display = "block";
      popupVisible = true;
      
      // Hide tooltip if visible
      if (tooltipVisible) {
        tooltip.style.opacity = "0";
        tooltip.style.pointerEvents = "none";
        tooltipVisible = false;
      }
    });
  });
  
  // Hide popup when clicking "Not now"
  notNowBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    playlistPopup.style.display = "none";
    popupVisible = false;
  });
  
  // Close tooltip when clicking outside
  document.addEventListener("click", (e) => {
    // Close tooltip if open and clicking outside
    if (tooltipVisible && e.target !== symbol && !tooltip.contains(e.target)) {
      tooltip.style.opacity = "0";
      tooltip.style.pointerEvents = "none";
      tooltipVisible = false;
    }
    
    // Close popup if open and clicking outside
    if (popupVisible && !playlistPopup.contains(e.target)) {
      playlistPopup.style.display = "none";
      popupVisible = false;
    }
  });
});




let playBtn1 = document.getElementById("playButton1");
let audio1 = document.getElementById("audioPlayer1");
let icon1 = playBtn1.querySelector("i");

let playBtn2 = document.getElementById("playButton2");
let audio2 = document.getElementById("audioPlayer2");
let icon2 = playBtn2.querySelector("i");

let playBtn3 = document.getElementById("playButton3");
let audio3 = document.getElementById("audioPlayer3");
let icon3 = playBtn3.querySelector("i");

let playBtn4 = document.getElementById("playButton4");
let audio4 = document.getElementById("audioPlayer4");
let icon4 = playBtn4.querySelector("i");

let playBtn5 = document.getElementById("playButton5");
let audio5 = document.getElementById("audioPlayer5");
let icon5 = playBtn5.querySelector("i");

let playBtn6 = document.getElementById("playButton6");
let audio6 = document.getElementById("audioPlayer6");
let icon6 = playBtn6.querySelector("i");

let playBtn7 = document.getElementById("playButton7");
let audio7 = document.getElementById("audioPlayer7");
let icon7 = playBtn7.querySelector("i");

let isPlaying1 = false;
let isPlaying2 = false;
let isPlaying3 = false;
let isPlaying4 = false;
let isPlaying5 = false;
let isPlaying6 = false;
let isPlaying7 = false;

function pauseAll() {
  if (isPlaying1) {
    audio1.pause();
    icon1.classList.remove("fa-pause");
    icon1.classList.add("fa-play");
    isPlaying1 = false;
  }
  if (isPlaying2) {
    audio2.pause();
    icon2.classList.remove("fa-pause");
    icon2.classList.add("fa-play");
    isPlaying2 = false;
  }
  if (isPlaying3) {
    audio3.pause();
    icon3.classList.remove("fa-pause");
    icon3.classList.add("fa-play");
    isPlaying3 = false;
  }
  if (isPlaying4) {
    audio4.pause();
    icon4.classList.remove("fa-pause");
    icon4.classList.add("fa-play");
    isPlaying4 = false;
  }
  if (isPlaying5) {
    audio5.pause();
    icon5.classList.remove("fa-pause");
    icon5.classList.add("fa-play");
    isPlaying5 = false;
  }
  if (isPlaying6) {
    audio6.pause();
    icon6.classList.remove("fa-pause");
    icon6.classList.add("fa-play");
    isPlaying6 = false;
  }
  if (isPlaying7) {
    audio7.pause();
    icon7.classList.remove("fa-pause");
    icon7.classList.add("fa-play");
    isPlaying7 = false;
  }
}

playBtn1.addEventListener("click", () => {
  if (isPlaying1) {
    audio1.pause();
    icon1.classList.remove("fa-pause");
    icon1.classList.add("fa-play");
    isPlaying1 = false;
  } else {
    pauseAll(); 
    audio1.play();
    icon1.classList.remove("fa-play");
    icon1.classList.add("fa-pause");
    isPlaying1 = true;
  }
});

audio1.addEventListener("ended", () => {
  icon1.classList.remove("fa-pause");
  icon1.classList.add("fa-play");
  isPlaying1 = false;
});


playBtn2.addEventListener("click", () => {
  if (isPlaying2) {
    audio2.pause();
    icon2.classList.remove("fa-pause");
    icon2.classList.add("fa-play");
    isPlaying2 = false;
  } else {
    pauseAll();
    audio2.play();
    icon2.classList.remove("fa-play");
    icon2.classList.add("fa-pause");
    isPlaying2 = true;
  }
});

audio2.addEventListener("ended", () => {
  icon2.classList.remove("fa-pause");
  icon2.classList.add("fa-play");
  isPlaying2 = false;
});


playBtn3.addEventListener("click", () => {
  if (isPlaying3) {
    audio3.pause();
    icon3.classList.remove("fa-pause");
    icon3.classList.add("fa-play");
    isPlaying3 = false;
  } else {
    pauseAll();
    audio3.play();
    icon3.classList.remove("fa-play");
    icon3.classList.add("fa-pause");
    isPlaying3 = true;
  }
});

audio3.addEventListener("ended", () => {
  icon3.classList.remove("fa-pause");
  icon3.classList.add("fa-play");
  isPlaying3 = false;
});



playBtn4.addEventListener("click", () => {
  if (isPlaying4) {
    audio4.pause();
    icon4.classList.remove("fa-pause");
    icon4.classList.add("fa-play");
    isPlaying4 = false;
  } else {
    pauseAll();
    audio4.play();
    icon4.classList.remove("fa-play");
    icon4.classList.add("fa-pause");
    isPlaying4 = true;
  }
});

audio4.addEventListener("ended", () => {
  icon4.classList.remove("fa-pause");
  icon4.classList.add("fa-play");
  isPlaying4 = false;
});



playBtn5.addEventListener("click", () => {
  if (isPlaying5) {
    audio5.pause();
    icon5.classList.remove("fa-pause");
    icon5.classList.add("fa-play");
    isPlaying5 = false;
  } else {
    pauseAll();
    audio5.play();
    icon5.classList.remove("fa-play");
    icon5.classList.add("fa-pause");
    isPlaying5 = true;
  }
});

audio5.addEventListener("ended", () => {
  icon5.classList.remove("fa-pause");
  icon5.classList.add("fa-play");
  isPlaying5 = false;
});

playBtn6.addEventListener("click", () => {
  if (isPlaying6) {
    audio6.pause();
    icon6.classList.remove("fa-pause");
    icon6.classList.add("fa-play");
    isPlaying6 = false;
  } else {
    pauseAll();
    audio6.play();
    icon6.classList.remove("fa-play");
    icon6.classList.add("fa-pause");
    isPlaying6 = true;
  }
});

audio6.addEventListener("ended", () => {
  icon6.classList.remove("fa-pause");
  icon6.classList.add("fa-play");
  isPlaying6 = false;
});


playBtn7.addEventListener("click", () => {
  if (isPlaying7) {
    audio7.pause();
    icon7.classList.remove("fa-pause");
    icon7.classList.add("fa-play");
    isPlaying7 = false;
  } else {
    pauseAll();
    audio7.play();
    icon7.classList.remove("fa-play");
    icon7.classList.add("fa-pause");
    isPlaying7 = true;
  }
});

audio7.addEventListener("ended", () => {
  icon7.classList.remove("fa-pause");
  icon7.classList.add("fa-play");
  isPlaying7 = false;
});



function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }
}

function closeModal() {
    const openModalElement = document.querySelector('.custom-modal.active');
    if (openModalElement) {
        openModalElement.classList.remove('active'); 

        
        openModalElement.addEventListener('transitionend', function handler() {
            openModalElement.style.display = 'none';
            openModalElement.removeEventListener('transitionend', handler); 
        }, { once: true }); 
    }
}
