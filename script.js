// App state
let userData = {
    name: '',
    selectedSongTitle: '',
    selectedSongFile: '',
    selectedImage: ''
};

// Participants (name + portrait path)
const participants = [
    { name: 'Flani', image: 'foto/Flani.jpeg' },
    { name: 'Pita', image: 'foto/pita.jpeg' },
    { name: 'Nickhole', image: 'foto/Cofee nichole 2.jpeg' },
    { name: 'Sarah', image: 'foto/sarah.jpeg' },
    { name: 'Amelia', image: 'foto/Amelia.jpeg' },
    { name: 'Melanie', image: 'foto/Melanie.jpg' },
    { name: 'Marseal', image: 'foto/Marseal.jpeg' },
    { name: 'Ale', image: 'foto/Ale.jpeg' },
    { name: 'Aress', image: 'foto/Aress.png' }
];

// Playlists (placeholder file names; update if needed)
const playlists = [
    { title: 'Adelle - All I Ask', file: 'playlst/All I Ask.mp3' },
    { title: 'Daniel Caesar - Who Knows', file: 'playlst/Daniel Caesar - Who Knows Official Lyric Video.mp3' },
    { title: 'Billie Eilish - TV', file: 'playlst/Billie Eilish - TV (Lyrics).mp3' },
    { title: 'Conan Gray - The Cut That Always Bleeds', file: 'playlst/Conan Gray - The Cut That Always Bleeds (Lyric Video).mp3' },
    { title: 'Daniel Caesar - Always', file: 'playlst/Daniel Caesar - Always (Official Audio) (1).mp3' },
    { title: 'Goo Goo Dolls - Iris', file: 'playlst/Goo Goo Dolls - Iris (Lyrics).mp3' },
    { title: 'Katy Perry - In another life I would be your girl', file: 'playlst/Katy Perry - In another life I would be your girl (The One That Got Away) (Lyrics).mp3' },
    { title: 'Lana Del Rey - Margaret', file: 'playlst/Lana Del Rey - Margaret (Lyrics) ft. Bleachers.mp3' },
    { title: 'Meryl Streep - The Winner Takes It All', file: 'playlst/Meryl Streep - The Winner Takes It All (From _Mamma Mia!_) [Lyrics Video].mp3' },
    { title: 'NIKI - Backburner', file: 'playlst/NIKI -  Backburner (Official Lyric Video).mp3' },
    { title: 'Olivia Rodrigo - Deja Vu', file: 'playlst/Olivia Rodrigo - deja vu.mp3' },
    { title: 'Radiohead - Let Down + Choir', file: 'playlst/Radiohead - Let Down + Choir (Complete) [Lyric Video].mp3' },
    { title: 'Ravyn Lenae - Love Me Not', file: 'playlst/Ravyn Lenae - Love Me Not (Lyrics).mp3' },
    { title: 'White', file: 'playlst/White.mp3' },
    { title: 'Conan Gray - Memories', file: 'playlst/Conan Gray - Memories (Lyrics).mp3' }
];

const compliments = [
    'Kamu punya energi yang benar-benar menyegarkan',
    'Pilihanmu selalu punya cerita yang dalam',
    'Senyummu bikin suasana jadi hangat',
    'Kehadiranmu selalu berarti buat banyak orang',
    'Nada dan kata-katamu selalu menyentuh hati'
];

const thankYouMessage = 'Terima Kasih, Kak';
let autoScrollInterval = null;
let playlistPlaybackActive = false;

// Personal messages (text only). Photos for each slide are loaded from
// folder: `foto pesan khusus/<name-lowercase>/foto1.jpg` ... foto5.jpg
const personalMessages = {
    Flani: [
        'Kak Fla, Princess-nya Tokman. Headbar terbaik yang pernah kerja bareng gua. Thanks ya Kak, lu udah ngerangkul gua dari awal, ngasih gua ruang buat belajar banyak hal selama di sini. Lu itu cewek cerdik, otak lu jalan banget.',
        'Lu selalu punya jalan keluar out of the box buat mecahin tiap masalah yang bikin tim pusing. Sori kalau kinerja gua selama shift sering ada minusnya, tapi dari lu gua belajar buat tetep tenang.',
        'Ambisi dan energi lu buat ngejar target itu gila, Kak. Gua gak bakal pernah lupa momen berdarah-darah kita pas shift sampai tembus angka 12 juta dalam sehari. Di situ keliatan banget peran lu bener-bener perfect dalam nge-lead dan ngelola tim.',
        'Harapan gua, lu jangan pernah turunin standar lu. Gua pengen liat lu jadi orang sukses, yang dimudahkan segala urusannya, karirnya meroket, dan rezekinya ngalir terus.',
        'Thanks banyak buat semuanya, Kak. Momen-momen bareng lu di Tokman bakal selalu jadi salah satu highlight terbaik yang bakal gua bawa ke mana pun gua pergi nanti.'
    ],
    Pita: [
        'Kak Pit, Bundanya Tokman BSD. Gua nulis ini dengan rasa hormat paling gede buat lu, Head Kitchen terbaik yang pernah gua kenal. Thanks udah nyeret gua lebih dalam dan ngajarin gua kerasnya dunia F&B. Dari lu, gua belajar satu hal penting: resep itu bukan cuma soal takaran gramasi yang kaku, tapi soal feeling—gimana cara kita naruh hati di setiap produk yang kita racik.',
        'Sori banget kalau selama shift, gua masih sering plongo, terlambat, atau bikin lu naik darah. Tapi percayalah Kak, setiap omelan dan teguran lu selalu gua telan mentah-mentah buat gua jadiin bekal biar gak bego di hari berikutnya.',
        'Thanks udah tulus peduli sama gua dan anak-anak yang lain. Thanks juga udah bawa gua keliling cabang Tokman; di situ gua liat langsung gimana dedikasi lu. Lu itu cewek kelewat tangguh.',
        'Harapan gua buat lu: sukses terus karirnya, tapi tolong... tolong banget, lambung lu jangan dilupain. Jangan gila kerja sampai lupa makan lagi. Jujur, lu udah gua anggap kayak kakak kandung gua sendiri.',
        'Semua pelajaran dari lu bakal gua bawa ke dunia gua selanjutnya. Semangat terus Kak, lancar rezekinya, dan semoga lu cepet jadian sama cowok idaman lu—yang kemaren cuma butuh satu tatapan doang buat bikin lu salting brutal itu.'
    ],
    Nickhole: [
        'Kak Nick, si cewek prontal yang ternyata sialnya cozy banget buat diajak ngobrol. Thanks ya lu udah jadi bagian penting dari chapter perjalanan gua di Tokman. Jujur aja, setiap kali kita dapet jadwal shift bareng, gua selalu excited nungguin cerita-cerita random lu, plus nungguin kopi kalibrasian lu yang emang seenak itu.',
        'Waktu empat bulan ini kerasa cepet banget lewatnya, dan gua harap lu bakal selalu nemuin kebahagiaan di mana pun lu milih buat stay.',
        'Sori kalau ada ucapan atau kelakuan gua yang bikin lu enek selama kerja bareng, yang jelas gua selalu nekenin diri buat gas maksimal supaya mood lu tetep aman dan shift kita lancar hahaha.',
        'Dengerin gua Kak: lu stop keseringan diet ege, badan lu tuh udah pas dan bagus banget. Kurang-kurangin insecure, lu udah perfect apa adanya. Tuhan berkati lu terus, Kak.',
        'Dan soal "lelaki dahsyat" Tokman itu... kejar terus kalau emang itu yang bikin lu seneng. Gua yakin lu bisa dapetin dia. Kalau lu capek, napas dan istirahat dulu aja. Positif thinking lah, mungkin dia emang lagi puyeng sama tugas-tugas kuliahnya. Gua yakin banget, bentar lagi dia bakal nongol main ke Tokman dan genggam tangan lu lagi.'
    ],
    Sarah: [
        'Kak Sar, thanks ya lu udah jadi salah satu partner shift terbaik yang pernah gua punya. Dari lu, gua bener-bener diajarin gimana rasanya pakai feeling pas ngeracik produk. Lu juga yang sabar banget nuntun gua buat ngenalin semua taste makanan di Tokman.',
        'Sori banget kalau selama kita shift bareng, gua masih banyak bebonya, masih haus buat terus lu ingetin, dan selalu bawel nanya pendapat lu soal rasa. Tapi aslinya Kak, dari situ gua belajar yakin. Gua cuma berani ngeluarin produk ke customer kalau rasanya udah dapet approve mutlak dari lidah lu.',
        'Semangat terus ya Kak kerjanya. Dan dengerin gua: stop kebiasaan begadang lu. Kalau besoknya lu kebagian shift pagi, malemnya maksimal jam 12 lu udah harus merem! Jangan sampai bablas gak tidur lagi.',
        'Kasian badan lu, Kak, kalau disiksa melek terus-terusan. Semangat Kak Sarah, semoga karir lu makin naik, rezeki lu makin gampang, dan urusan jodoh lu dilancarin terus ya.',
        'Jaga dirilu baik-baik, karena lu sangat berharga.'
    ],
    Amelia: [
        'Mel, thanks ya. Lu udah jadi partner yang solid banget selama gua shift di Tokman. Lu inget gak waktu pertama kali kita interview bareng? Dari detik itu aja gua udah punya feeling kuat kalau lu pasti bakal keterima.',
        'Jujur, ngelepas apron dan ninggalin Tokman ini cukup berat buat gua, tapi apa boleh buat, Mel. Gua harus realistis dan kasian sama badan gua yang makin rontok kalau harus dihajar begadang tiap hari. Tapi gua yakin, setelah gua cabut, lu pasti dapet partner yang jauh lebih baik dan gak se-ngerepotin gua.',
        'Sori ya Mel kalau gua punya banyak salah, entah dari omongan gua yang kadang nyelekit atau kelakuan gua yang minus. Tapi jujur, pas kerjaan lagi capek-capeknya, lu itu selalu jadi nyawa yang ngidupin suasana.',
        'Jangan sedih ege, gua pasti bakal main lagi kok nengokin kalian. Atau nanti kita wujudin janji ngopi di... apa sih nama kafenya anjir gua lupa, intinya yang di Nusa Loka itu dah. Nanti gua kabarin lu aja ya kalau mau ke sana.',
        'Semangat terus Amel, semoga lu selalu bahagia, rezeki lu ngalir deres, karir lu lancar, dan semua urusan lu dipermudah. Keep shining and never let anyone dim that bright energy of yours, Mel.'
    ],
    Melanie: [
        'Halo Kak Melanie Putri Julia. Thanks ya lu udah jadi partner shift gua yang asik banget, thanks juga udah selalu excited tiap kali lu tau kita dapet jadwal shift bareng. Sori banget kalau akhirnya gua harus tega cabut dari Tokman.',
        'Gua ngambil keputusan ini karena ada satu dan lain hal yang emang harus gua urus, Kak. Padahal aslinya, gua masih nyaman banget ada di tengah kalian. Lingkungan kerjanya, orang-orang sarapnya, dan semua kerandoman kalian itu yang bakal bikin gua kangen berat.',
        'Sori ya Kak, abis ini gua udah gak bisa bantuin lu closing-an floor lagi. Btw, thanks ya, latte buatan lu tuh enak bingitzzzz aseli, lu udah cocok banget divalidasi jadi barista beneran. Semangat terus ya kerjanya.',
        'Pesen gua: jangan nakal, jangan mainin perasaan cowok-cowok lain wkwk, udah cukup Yuda doang yang bertahta di hati lu, Kak. Semangat jaga kesehatan, atur pola makan lu yang bener.',
        'Semoga karir dan rezeki lu ke depannya selalu dikasih kelancaran ya, Kak. Babayyyy.'
    ],
    Marseal: [
        'Sel, thanks ya. tanggal 20 ini pas gua beneran harus lepas apron dan cabut dari Tokman, gua makin sadar kalau lu adalah alasan utama gua punya cerita gila di sini. Kalau lu waktu itu gak narik gua masuk, gua mungkin gak bakal pernah ngerasain pengalaman seberharga ini, dan gua gak bakal pernah nemu sekumpulan orang waras yang bener-bener peduli satu sama lain, termasuk lu.',
        'Lu itu manusia kuat, Sel. Gua tau perjuangan lu, dan gua seyakin itu semua cita-cita yang lu kejar sekarang pasti bakal tembus. Oh ya, dari dulu kopi kalibrasian lu selalu bangsat enaknya, beneran bikin melek.',
        'Karena lu sering nanyain, nih gua bongkar resepnya sekarang buat lu pegang: Ayam Kecap (Saus tomat, saus sambal, saus tiram, kecap manis, mayonaise 1:1, kaldu Knorr, garem, micin, lada hitam, aida, gula aren/pasir—lu sesuaiin aja sama lidah lu).',
        'Sori, cuma resep ini yang bisa gua tinggalin buat lu.',
        'Tetep idup, bahagiain nyokap lu karena dia pantes dapet versi terbaik dari lu, dan hajar semua mimpi lu sampai dapet. Thanks buat brotherhood ini, Sel.'
    ],
    Ale: [
        'Halo Bang Nafis! eh, bener kan nama asli lu Nafis? Yaudah lah ya, Nafis alias Ale wkwk. Bang, latte lu tuh aseli bangsat enaknya, sialan emang. Thanks ya buat vanilla latte sama hazelnut latte-nya selama ini. Jujur aja, tiap kali kita dapet jadwal shift bareng, racikan kopi lu itu jadi salah satu hal yang paling gua tunggu dan bikin gua excited.',
        'Tapi sori banget nih, kayaknya lidah gua udah gak dapet jatah buat ngicipin kopi lu lagi, soalnya tanggal 20 ini gua resmi ngelepas apron. Aslinya lu tuh random parah, Bang. Gua gak tau lagi dah sel-sel otak lu bakal berevolusi jadi serandom apa kalau aja gua punya waktu lebih panjang buat nongkrong di Tokman. Sayangnya, ada hal lain yang maksa gua buat cabut dari sini.',
        'Pesen gua buat lu: hajar terus kerjaannya, gas terus kuliahnya. Gua doain keras supaya ambisi lu buat sekolah dan tembus kerja di pelayaran bener-bener kejadian.',
        'Inget Bang, keringat dan usaha bajingan itu gak bakal pernah sudi mengkhianati hasil. Tekunin aja terus kalau lu emang seserius itu sama tujuan lu.',
        'Gua harap lu selalu nemu alasan buat bahagia di mana pun lu singgah nanti, tetep jadi si periang yang kelakuannya di luar nalar. Oh ya satu lagi, langgeng dah lu sama Chandra wkwk. Thanks ya Bang Nafis, sori gua beneran harus say goodbye sekarang.'
    ],
    Aress: [
        'Halo Bang Ares. Thanks ya udah pernah jadi bagian dari ritme kerja gua dan jadi partner shift selama perjalanan gua di Tokman. Jujur, rasanya kurang banget porsi waktu yang kita abisin bareng gara-gara jadwal shift kita yang sering bentrok dan gak menentu.',
        'Tapi dari interaksi yang singkat itu, gua beneran bangga pernah jalan di floor yang sama bareng lu, Bang. Gua harap lu bisa sampai di titik kesuksesan yang lu definisiin sendiri, ngebentuk realita sesuai apa yang lu inginkan, dan semesta berpihak buat mudahin segala urusan lu.',
        'Bang, dengerin gua. Lu itu punya kapasitas penuh buat bertahan di tengah kekacauan apa pun, asal lu tetep melangkah pakai kompas dari dalem diri lu sendiri. Gak usah maksain diri buat nunduk sama keadaan atau nurutin ekspektasi yang sejak awal bukan murni dari kehendak dan kesadaran lu.',
        'kalau ruangnya udah gak ngedukung kewarasan lu. Inget Bang, eksistensi dan versi terbaik dari diri lu itu terlalu mahal kalau cuma divalidasi buat nyenengin ego di luar sana—diri lu itu berharga mutlak buat diri lu sendiri.',
        'Kebebasan lu ada di tangan lu, bukan di tuntutan orang lain. Tetep nyala Bang, jangan biarin bisingnya rutinitas ngebunuh idealisme lu. Semangat terus perjalanannya.'
    ]
};

// --- Page management ---
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = document.getElementById(pageId);
    if (el) el.classList.add('active');
}

function goToNameSelection() { showPage('nameSelection'); }

// Render horizontal name list
function renderNameList() {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';
    participants.forEach(person => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'name-card';
        card.innerHTML = `
            <img src="${person.image}" alt="${person.name}" class="name-photo" onerror="this.src='foto/default.jpg';">
            <span class="name-text">${person.name}</span>
        `;
        card.addEventListener('click', () => selectName(person));
        nameList.appendChild(card);
    });
}

function selectName(person) {
    userData.name = person.name;
    userData.selectedImage = person.image;
    showPlaylistPage();
}

function showPlaylistPage() {
    showPage('playlistSelection');
    document.getElementById('playlistTitle').textContent = `Halo ${userData.name}, pilih lagu favoritmu`;
    document.getElementById('playlistSubtitle').textContent = 'Pilih satu lagu lalu nikmati sapaan pendek sebelum lanjut ke pesan khusus.';
    document.getElementById('nowPlaying').textContent = '';
    renderSongList();
}

function renderSongList() {
    const songList = document.getElementById('songList');
    songList.innerHTML = '';
    playlists.forEach(song => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'song-card';
        card.innerHTML = `<strong>${song.title}</strong><span>Pilih lagu ini</span>`;
        card.addEventListener('click', () => selectSong(song, card));
        songList.appendChild(card);
    });
}

function selectSong(song, cardElement) {
    userData.selectedSongTitle = song.title;
    userData.selectedSongFile = song.file;
    document.querySelectorAll('.song-card').forEach(c => c.classList.remove('active'));
    cardElement.classList.add('active');
    document.getElementById('nowPlaying').textContent = `Sedang memutar: ${song.title}`;
    playlistPlaybackActive = true;
    setAudioSource(song.file, false);
    setTimeout(() => goToCompliment(), 800);
}

function setAudioSource(file, loop = false) {
    const audio = document.getElementById('backgroundMusic');
    if (!file) return;
    audio.src = file;
    audio.loop = loop;
    audio.volume = 0.50;
    audio.onended = loop ? null : handlePlaylistSongEnded;
    audio.play().catch(() => console.log('Audio autoplay blocked'));
}

function handlePlaylistSongEnded() {
    if (!playlistPlaybackActive) return;
    const nextSong = getRandomPlaylistSong(userData.selectedSongFile);
    if (!nextSong) return;
    userData.selectedSongTitle = nextSong.title;
    userData.selectedSongFile = nextSong.file;
    document.getElementById('nowPlaying').textContent = `Sedang memutar: ${nextSong.title}`;
    setAudioSource(nextSong.file, false);
}

function getRandomPlaylistSong(excludeFile) {
    const candidates = playlists.filter(song => song.file !== excludeFile);
    if (!candidates.length) return playlists[Math.floor(Math.random() * playlists.length)];
    return candidates[Math.floor(Math.random() * candidates.length)];
}

function maybeResumePlaylistAudio() {
    const audio = document.getElementById('backgroundMusic');
    if (!userData.selectedSongFile) return;
    if (audio.paused || audio.ended) {
        setAudioSource(userData.selectedSongFile, false);
    }
}

function goToCompliment() {
    document.getElementById('greetingText').textContent = `Halo, Kak ${userData.name}!`;
    document.getElementById('complimentText').textContent = `${getRandomCompliment()}\n\nLagu pilihanmu "${userData.selectedSongTitle}" sudah mulai diputar.`;
    showPage('greeting');
    setTimeout(() => goToConfirmation(), 8500);
}

function goToConfirmation() { showPage('confirmation'); }

function goToBreathing() { showPage('breathing'); startBreathingExercise(); }

function startBreathingExercise() {
    const timer = document.getElementById('breathingTimer');
    let seconds = 0;
    const maxSeconds = 9;
    const interval = setInterval(() => {
        seconds++;
        if (seconds <= 3) timer.textContent = `Tarik nafas... (${seconds})`;
        else if (seconds <= 6) timer.textContent = `Tahan... (${seconds - 3})`;
        else if (seconds <= 9) timer.textContent = `Hembuskan... (${seconds - 6})`;
        else timer.textContent = 'Bagus! Lu siap sekarang...';
        if (seconds >= maxSeconds) clearInterval(interval);
    }, 1000);
}

function goToPersonalMessages() { showPage('personalMessages'); renderPersonalMessages(); }

function getPersonalPhotoPaths(name) {
    const folderName = encodeURI(name.toLowerCase());
    return Array.from({ length: 5 }, (_, i) => `foto pesan khusus/${folderName}/foto${i + 1}.jpeg`);
}

function renderPersonalMessages() {
    const title = document.getElementById('personalTitle');
    const messageScroll = document.getElementById('messageScroll');
    const messages = personalMessages[userData.name] || [
        'Pesan khusus untuk kamu sedang disiapkan.',
        'Nanti akan ada lima pesan penuh kenangan di sini.',
        'Pastikan namamu telah dipilih dari daftar awal.',
        'Hanya nama yang dipilih di awal yang dapat melihat pesan ini.',
        'Terima kasih sudah tetap setia sampai detik ini.'
    ];
    const photoPaths = getPersonalPhotoPaths(userData.name);

    title.textContent = `Pesan Khusus untuk ${userData.name}`;
    messageScroll.innerHTML = '';

    messages.forEach((text, index) => {
        const photoPath = photoPaths[index] || userData.selectedImage;
        const slide = document.createElement('div');
        slide.className = 'message-slide';
        slide.innerHTML = `
            <img src="${photoPath}" alt="${userData.name}" class="message-photo" onerror="this.src='foto/default.jpg';">
            <div class="message-text">
                <h3>Slide ${index + 1}</h3>
                <p>${text}</p>
            </div>
        `;
        messageScroll.appendChild(slide);
    });
}

function goToAutoScroll() { showPage('mediaGallery'); initializeMediaGallery(); playlistPlaybackActive = Boolean(userData.selectedSongFile); maybeResumePlaylistAudio(); startAutoScroll(); }

function initializeMediaGallery() {
    const mediaScroll = document.getElementById('mediaScroll');
    mediaScroll.innerHTML = '';

    // Files gathered from workspace (kept in code). These were auto-detected earlier.
    const imageFiles = [
        'foto konten scroll otomatis/Foto GC 1.jpeg',
        'foto konten scroll otomatis/Amel cipung.jpeg',
        'foto konten scroll otomatis/Cofee nichole 1.jpeg',
        'foto konten scroll otomatis/gcq.jpeg',
        'foto konten scroll otomatis/nichole 1.jpeg',
        'foto konten scroll otomatis/1.jpeg',
        'foto konten scroll otomatis/2.jpeg',
        'foto konten scroll otomatis/Alefrestayle.jpeg',
        'foto konten scroll otomatis/Reybee.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.16.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.17.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.18 (1).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.18.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.20 (1).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.20.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.21 (1).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.21.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.22 (1).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.22.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.23.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.24 (1).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.24.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.25 (1).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.25 (2).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.25.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.17.26.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.22.34 (1).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.22.34 (2).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.22.34.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.22.35.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.22.36 (1).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.22.36 (2).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.22.36.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.22.37 (1).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.22.38 (1).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.22.38 (2).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.22.38.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.22.39 (1).jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-15 at 15.22.40.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-17 at 14.37.56.jpeg',
        'foto konten scroll otomatis/WhatsApp Image 2026-05-17 at 14.37.57.jpeg',
        'foto konten scroll otomatis/terima kasih.jpeg',
    ];

    const videoFiles = [
        'video/Bang Danu Mpruy.mp4',
        'video/15.mp4',
        'video/13.mp4',
        'video/Flani Hijab.mp4',
         'video/9.mp4',
        'video/hbd kak pita.mp4',
        'video/10.mp4',
        'video/hbd marseal.mp4',
         'video/11.mp4',
        'video/HBD NICHOLE.mp4',
        'video/17.mp4',
        'video/14.mp4',
        'video/kelakuanale.mp4',
        'video/18.mp4',
        'video/Seblak Ka flani.mp4',
        'video/WhatsApp Video 2026-05-12 at 20.47.58.mp4',
        'video/1.mp4',
        'video/2.mp4',
        'video/3.mp4',
        'video/4.mp4',
        'video/5.mp4',
        'video/6.mp4',
        'video/7.mp4',
        'video/8.mp4',
        'video/12.mp4',
        'video/16.mp4',
    ];

    const uniqueImages = Array.from(new Set(imageFiles));
    const uniqueVideos = Array.from(new Set(videoFiles));

    // Alternate image, video and drop duplicates
    const mediaItems = [];
    const seen = new Set();
    let i = 0, j = 0;
    while (i < uniqueImages.length || j < uniqueVideos.length) {
        if (i < uniqueImages.length) {
            const src = uniqueImages[i++];
            if (!seen.has(src)) { mediaItems.push({ type: 'image', src, caption: '' }); seen.add(src); }
        }
        if (j < uniqueVideos.length) {
            const src = uniqueVideos[j++];
            if (!seen.has(src)) { mediaItems.push({ type: 'video', src, caption: '' }); seen.add(src); }
        }
    }

    mediaItems.forEach(item => {
        const container = document.createElement('div');
        container.className = 'media-item';
        if (item.type === 'image') container.innerHTML = `<img src="${item.src}" alt="${item.caption}">`;
        else container.innerHTML = `\n                <video width="100%" controls muted>\n                    <source src="${item.src}" type="video/mp4">\n                    Browser Anda tidak mendukung video.\n                </video>\n            `;
        mediaScroll.appendChild(container);
    });

    setupVideoVisibilityObserver(mediaScroll);

    const endMessage = document.createElement('div');
    endMessage.className = 'media-item';
    endMessage.innerHTML = `
        <div style="padding: 3rem; text-align: center; background: rgba(233, 69, 96, 0.1); border-radius: 10px;">
            <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">Terima Kasih</h3>
            <p style="font-size: 1.1rem; color: rgba(255, 255, 255, 0.7);">Setiap momen dengan Anda sangat berarti...</p>
        </div>
    `;
    mediaScroll.appendChild(endMessage);

    // ... (kode di atasnya tetap sama)

    const bgMusic = document.getElementById('backgroundMusic');
    
    if (!userData.selectedSongFile) {
        // Jika user tidak memilih lagu, pakai lagu default dan boleh di-loop
        bgMusic.src = 'audio/terimakasih sudah bertahan - Gea Indrawari  lirik lagu.mp3';
        bgMusic.volume = 0.47;
        bgMusic.loop = true;
    } else {
        // Jika user memilih lagu, JANGAN di-loop agar fungsi acak bisa berjalan
        bgMusic.loop = false;
        
        // Pastikan fungsi acak kita tetap terpasang saat lagu habis
        bgMusic.onended = handlePlaylistSongEnded;
    }
    
    bgMusic.play().catch(e => console.log('Audio autoplay blocked:', e));

}

function setupVideoVisibilityObserver(container) {
    const videos = container.querySelectorAll('video');
    const observerOptions = { root: container, threshold: 0.08 };
    const observerCallback = entries => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) { video.muted = false; video.play().catch(e => console.log('Video autoplay blocked:', e)); }
            else { video.muted = true; video.pause(); }
        });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    videos.forEach(video => observer.observe(video));
}

function startAutoScroll() {
    const mediaScroll = document.getElementById('mediaScroll');
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    let scrollPosition = 0;
    autoScrollInterval = setInterval(() => {
        scrollPosition += 10;
        mediaScroll.scrollTop = scrollPosition;
        if (scrollPosition >= mediaScroll.scrollHeight - mediaScroll.clientHeight) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
            setTimeout(() => goToThankYou(), 2000);
        }
    }, 100);
}

function goToThankYou() {
    document.getElementById('thankYouText').textContent = `${thankYouMessage}, ${userData.name}`;
    const bgMusic = document.getElementById('backgroundMusic');
    playlistPlaybackActive = false;
    bgMusic.pause();
    showPage('thankYou');
}

function goToLanding() {
    playlistPlaybackActive = false;
    userData = { name: '', selectedSongTitle: '', selectedSongFile: '', selectedImage: '' };
    document.querySelectorAll('.song-card').forEach(c => c.classList.remove('active'));
    showPage('landing');
}

function getRandomCompliment() { return compliments[Math.floor(Math.random() * compliments.length)]; }

document.addEventListener('DOMContentLoaded', () => { showPage('landing'); renderNameList(); });
