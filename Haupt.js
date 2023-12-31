// احصل على مرجع لزر الأغاني والقائمة
const showSongsButton = document.getElementById('showSongsButton');
const songsList = document.getElementById('songsList');
const audioPlayer = document.getElementById('song');
const ctrlIcon = document.getElementById('ctrlIcon');
const progress = document.getElementById('progress');
const timee = document.getElementById('timee');
const confettiElements = document.querySelectorAll('.confetti');


// أضف استماع لحدث النقر على الزر
showSongsButton.addEventListener('click', function() {
    // قم بتبديل عرض القائمة
    if (songsList.classList.contains('hidden')) {
        songsList.classList.remove('hidden');
    } else {
        songsList.classList.add('hidden');
    }
});
function back(){
    songsList.classList.add('hidden');
}

// تشغيل أو إيقاف التشغيل عند النقر
function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    } else {
        audioPlayer.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }
}

// التقدم والتراجع في الأغنية
function f() {
    audioPlayer.currentTime += 5;
}

function b() {
    audioPlayer.currentTime -= 5;
}

// تحديث شريط التقدم
audioPlayer.addEventListener('timeupdate', function() {
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.value = percent;

    // تحديث الوقت المنقضي
    const minutes = Math.floor(audioPlayer.currentTime / 60);
    const seconds = Math.floor(audioPlayer.currentTime % 60);
    timee.textContent = `${minutes}:${seconds}`;
});

// التقدم في الأغنية عند تحريك شريط التقدم
progress.addEventListener('input', function() {
    const seekTime = (audioPlayer.duration / 100) * progress.value;
    audioPlayer.currentTime = seekTime;
});

function loadSong(src, title, description,image) {
    const audioPlayer = document.getElementById('song');
    const songTitleElement = document.getElementById('songTitle');
    const songDescriptionElement = document.getElementById('songDescription');
    const songImageElement = document.getElementById('songImg');


    audioPlayer.src = src;
    songTitleElement.textContent = title;
    songDescriptionElement.textContent = description;
    songImageElement.src = image;

        // إعادة تشغيل الأغنية بمجرد تحميلها
    audioPlayer.addEventListener('loadeddata', function() {
        audioPlayer.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    });

    // إعادة تشغيل الأغنية إذا كانت مشغلة
    if (!audioPlayer.paused) {
        audioPlayer.pause();
        audioPlayer.load();  // تحميل الأغنية من البداية
        audioPlayer.play();
    }
}
// تابع لتحديث مستوى الصوت بناءً على قيمة شريط التمرير
function setVolume() {
    const volumeSlider = document.getElementById('volumeSlider');
    audioPlayer.volume = volumeSlider.value;
}





// في main.js

// في ملف JavaScript
audioPlayer.addEventListener('play', () => {
    confettiElements.forEach(confetti => {
        confetti.style.display = 'block';
    });
});

audioPlayer.addEventListener('pause', () => {
    confettiElements.forEach(confetti => {
        confetti.style.display = 'none';
    });
});










