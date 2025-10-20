const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginView = document.getElementById('loginView');
const dashboardView = document.getElementById('dashboardView');
const grid = document.querySelector('.grid');
const logoutBtn = document.getElementById('logoutBtn');


const cards = [
{ title: 'SCAN ABSEN QR CODE', desc: 'Scan QR dengan notifikasi WhatsApp otomatis' },
{ title: 'Daftar Hadir Siswa', desc: 'Lihat siswa yg Hadir' },
{ title: 'Daftar Hadir Guru', desc: 'Lihat rekap kehadiran guru per periode' },
{ title: 'Siswa Belum Hadir', desc: 'Lihat daftar siswa yang belum melakukan absensi' },
{ title: 'Input S/I/A Siswa', desc: 'Input data Sakit, Izin, atau Alpha' },
{ title: 'Presentase Kehadiran', desc: 'Statistik persentase kehadiran siswa' },
{ title: 'Rekap Bulanan Siswa', desc: 'Lihat rekap kehadiran per bulan' },
{ title: 'Rekap Bulanan Guru', desc: 'Lihat rekap kehadiran guru per bulan' },
{ title: 'Hari Libur', desc: 'Kelola hari libur dan cuti bersama' },
{ title: 'Export Excel', desc: 'Ekspor data absensi ke format Excel' }
];


function renderCards() {
grid.innerHTML = '';
cards.forEach(c => {
const el = document.createElement('div');
el.className = 'card';
el.innerHTML = `<div><div class="title">${c.title}</div><div class="desc">${c.desc}</div></div><button class="open">Buka</button>`;
grid.appendChild(el);
});
// add logout card spanning two columns
const logoutCard = document.createElement('div');
logoutCard.className = 'card';
logoutCard.style.gridColumn = 'span 2';
logoutCard.innerHTML = `<div><div class="title">Logout</div><div class="desc">Keluar dari sistem administrasi</div></div><button id="logoutBtn2" class="open logout">Keluar</button>`;
grid.appendChild(logoutCard);
document.getElementById('logoutBtn2').addEventListener('click', showLogin);
}


function showDashboard() {
loginView.classList.add('hidden');
dashboardView.classList.remove('hidden');
dashboardView.setAttribute('aria-hidden','false');
loginView.setAttribute('aria-hidden','true');
renderCards();
}
function showLogin() {
loginView.classList.remove('hidden');
dashboardView.classList.add('hidden');
dashboardView.setAttribute('aria-hidden','true');
loginView.setAttribute('aria-hidden','false');
}


loginBtn.addEventListener('click', () => {
const u = usernameInput.value.trim();
const p = passwordInput.value;
if(u === 'dashboard' && p === 'dashboard') {
showDashboard();
} else {
alert('Username atau Password salah.\nGunakan: dashboard / dashboard');
}
});


[usernameInput, passwordInput].forEach(el => {
el.addEventListener('keydown', (e) => { if(e.key === 'Enter') loginBtn.click(); });
});


logoutBtn.addEventListener('click', () => {
usernameInput.value = 'dashboard';
passwordInput.value = 'dashboard';
showLogin();
window.scrollTo(0,0);
});
