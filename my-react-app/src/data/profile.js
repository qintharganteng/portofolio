// Ubah data pribadi, link, dan file video di sini — tanpa menyentuh layout.
export const profile = {
  firstName: 'Muhammad Qinthar',
  fullName: 'Muhammad Qinthar Sabilla Almalki',
    email: 'qintharalmaliki@gmail.com',
  heading: ["Hi, I'm", 'Qinthar.'],
  intro: 'Software Developer specializing in front-end and mobile applications, Quality Assurance Tester, with expertise in data analytics, data science and machine learning. I focus on building intuitive, functional, and digital solutions that turn complex ideas into practical experiences.',
  availability: 'Open to meaningful opportunities',
  // Taruh file MP4 di public/videos/intro.mp4, lalu ubah null menjadi '/videos/intro.mp4'.
  introVideoSrc: "/videos/intro.mp4",
  // Opsional: taruh foto poster di public/images/intro-poster.jpg.
  introVideoPoster: null,
  // Opsional: foto About, contoh '/images/profile.jpg'.
  aboutPhoto: '/images/saya.png',
  // Isi ketika sudah memiliki URL. Link kosong tidak akan ditampilkan.
  github: '',
  linkedin: '',
  // PDF opsional: simpan sebagai public/documents/CV.pdf lalu set '/documents/CV.pdf'.
  resumeUrl: '',
};

export const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];
