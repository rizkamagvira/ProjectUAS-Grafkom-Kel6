let textState = true; // Keadaan tulisan (true: nyala, false: mati)
let img;
let img1;
let img2;
    let blinkInterval = 100; // Kecepatan berkedip (dalam milidetik)
    let showImage = true; // Apakah gambar ditampilkan atau disembunyikan
let img3;
let x=0;
let speed = 5; // untuk mengatur kecepatan geser orangnya.
let img4;

function preload() {
  img = loadImage('image/peta.png');
  img1 = loadImage('image/atas.png');
  img2 = loadImage('image/Benderaaja.png');
  img3 = loadImage('image/orang.png');
  img4 = loadImage('image/Garuda.png')
}

function setup() {
  frameRate(2); // Ubah frame rate untuk mengatur kecepatan berkedip
  createCanvas(400, 400);
  setInterval(changeTextState, 600); 
  // Mengubah keadaan setiap 500 milidetik (0.5 detik)
  
}



function draw() {
  background(220);
  background('#D6B793');
  
  //mengatur ukuran gambar dan tata letak (peta)
  image(img, 0, 60);
  img.resize (400, 330);
  
  //mengatur ukuran gambar dan tata letak (Garuda)
  image(img4, 0, 15);
  img4.resize (width, height);
 
  //mengatur ukuran gambar dan tata letak (atas)
  image(img1, 0, 0);
  img1.resize (400, 400);
  
  
 
  if (textState) {
    // Tulisan pertama dengan warna merah
    fill(255, 0, 0);
    textSize(34);
    text("BHINEKA", 112, 85);
    
    // Tulisan kedua dengan warna putih
    fill(255, 255, 255);
    textSize(34);
    text("TUNGGAL IKA", 65, 118);
 
    textFont('Arial Black');
    textSize(width / 10);
  
  }
  
  // Berkedipkan gambar berdasarkan variabel showImage
      if (showImage) {
        image(img2, 0, 0, width, height);
    }

      // Tunggu selama blinkInterval, kemudian ubah status showImage
        setTimeout(() => {
        showImage = !showImage;
      },blinkInterval);

  
  //bentuk bumi warna moka
  ellipse(200, 450, 500, 200);
  let c = color('#CAA275');
  fill(c);
  noStroke();
  ellipse(200, 450, 500, 200);
  
  
  // Menggambar gambar pada posisi x, 179
  image(img3, x, 179);
  img3.resize (350, 320); 
  //350 untuk mengubah piksel lebar dan 320 untuk mengubah piksel tinggi. 
  
  // Menggerakkan Gambar Orangnya
  x += speed;
  
  //Jika gambar melewati batas kanan canvas,maka akan kembali ke kiri
  if (x > width) {
    x = -img3.width; 
  // Mengatur posisi gambar agar dimulai dari luar canvas sebelah kiri
  }
}

function changeTextState() {
  textState = !textState; // Menukar keadaan tulisan (nyala <=> mati)
}
