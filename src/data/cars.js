export const cars = [
  {
    type: 'SUV',
    year: '2025',
    name: 'Lamborghini Urus S',
    specs: '4.0L V8 Biturbo • 666 HP • AWD • 0-100 en 3.5s',
    price: '$250,000',
    image: 'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1683648332/evo/2023/05/Lamborghini%20Urus%20S%202023%20review.jpg',
    description: 'El SUV superdeportivo que redefine el lujo y el rendimiento. Diseño agresivo, tecnología de punta y una experiencia de conducción incomparable.',
    features: ['Suspensión adaptativa', 'Asientos con masaje', 'Sonido Bang & Olufsen', 'Head-up display', 'Cámara 360°'],
    technical: {
      engine: '4.0L V8 Biturbo',
      power: '666 HP @ 6,000 rpm',
      torque: '850 Nm @ 2,250-4,500 rpm',
      transmission: 'Automática 8 velocidades',
      drivetrain: 'AWD permanente',
      acceleration: '3.5 segundos',
      topSpeed: '305 km/h',
      fuel: 'Gasolina Premium',
      weight: '2,200 kg'
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=1QqG5TZbYyQ'
  },
  {
    type: 'DEPORTIVO',
    year: '2025',
    name: 'Ferrari 296 GTB',
    specs: '3.0L V6 Híbrido • 830 HP • RWD • 0-100 en 2.9s',
    price: '$322,000',
    image: 'https://exoticcars.ae/uploads/blog-images/50/img.jpeg',
    description: 'Híbrido enchufable que combina la pasión Ferrari con eficiencia moderna. Diseño aerodinámico y un sonido que eriza la piel.',
    features: ['Sistema híbrido PHEV', 'Aerodinámica activa', 'Frenos carbono-cerámica', 'Telemetría F1', 'Interior minimalista'],
    technical: {
      engine: '3.0L V6 Twin-Turbo + Motor Eléctrico',
      power: '830 HP combinados',
      torque: '740 Nm',
      transmission: 'Doble embrague 8 velocidades',
      drivetrain: 'Trasera (RWD)',
      acceleration: '2.9 segundos',
      topSpeed: '330 km/h',
      fuel: 'Híbrido Enchufable',
      weight: '1,470 kg'
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=ARcG7nX2tP4'
  },
  {
    type: 'SEDÁN',
    year: '2025',
    name: 'BMW M5 Competition',
    specs: '4.4L V8 Biturbo • 627 HP • AWD • 0-100 en 3.3s',
    price: '$115,000',
    image: 'https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/MDA4kXhARjCCiFnv2Orj',
    description: 'El sedán deportivo definitivo. Potencia brutal con la elegancia y confort de un BMW de lujo.',
    features: ['M xDrive AWD', 'Suspensión M adaptativa', 'Asientos M carbono', 'Sistema iDrive 8', 'Sonido Harman Kardon'],
    technical: {
      engine: '4.4L V8 M TwinPower Turbo',
      power: '627 HP @ 6,000 rpm',
      torque: '750 Nm @ 1,800-5,860 rpm',
      transmission: 'M Steptronic 8 velocidades',
      drivetrain: 'M xDrive AWD',
      acceleration: '3.3 segundos',
      topSpeed: '305 km/h (con M Driver\'s Package)',
      fuel: 'Gasolina Premium',
      weight: '1,855 kg'
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=C4GhljGhkfY'
  },
  {
    type: 'ELÉCTRICO',
    year: '2025',
    name: 'Porsche Taycan Turbo S',
    specs: 'Dual Motor • 761 HP • AWD • 0-100 en 2.8s',
    price: '$185,000',
    image: 'https://www.topgear.com/sites/default/files/2024/12/1-Porsche-Taycan-Turbo-S-review-2024-UK.jpg',
    description: 'El deportivo eléctrico que lleva el ADN Porsche al futuro. Aceleración instantánea y tecnología de carga líder.',
    features: ['Carga 800V ultra-rápida', 'Suspensión neumática', 'Pantalla curva', 'Sonido Bose Surround', 'Modo Track'],
    technical: {
      engine: 'Dual Motor Eléctrico Permanente',
      power: '761 HP con Overboost',
      torque: '1,050 Nm',
      transmission: 'Automática 2 velocidades',
      drivetrain: 'AWD eléctrico',
      acceleration: '2.8 segundos',
      topSpeed: '260 km/h',
      fuel: '100% Eléctrico - 93.4 kWh',
      weight: '2,295 kg'
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=9k1J4FzP3e4'
  },
  {
    type: 'COUPÉ',
    year: '2025',
    name: 'Mercedes-AMG GT 63',
    specs: '4.0L V8 Biturbo • 630 HP • AWD • 0-100 en 3.2s',
    price: '$165,000',
    image: 'https://cdn.motor1.com/images/mgl/vxZBrR/s1/2025-mercedes-amg-gt63-pro.jpg',
    description: 'Coupé de cuatro puertas que fusiona lujo AMG con rendimiento de pista. Diseño escultural y tecnología MBUX de última generación.',
    features: ['AMG Performance 4MATIC+', 'Suspensión AMG Ride Control', 'Asientos AMG Performance', 'MBUX Hyperscreen', 'Escape AMG Performance'],
    technical: {
      engine: '4.0L V8 Biturbo AMG',
      power: '630 HP @ 5,500-6,500 rpm',
      torque: '900 Nm @ 2,500-4,500 rpm',
      transmission: 'AMG SPEEDSHIFT MCT 9G',
      drivetrain: 'AMG Performance 4MATIC+',
      acceleration: '3.2 segundos',
      topSpeed: '315 km/h',
      fuel: 'Gasolina Premium',
      weight: '2,045 kg'
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=qZ1pVhB6Lp4'
  },
  {
    type: 'HYPERCAR',
    year: '2025',
    name: 'McLaren 750S',
    specs: '4.0L V8 Biturbo • 750 HP • RWD • 0-100 en 2.8s',
    price: '$330,000',
    image: 'https://acnews.blob.core.windows.net/imgnews/medium/NAZ_2d30a900748240a0beb1e4f22bde7e36.webp',
    description: 'La esencia pura de McLaren en un hypercar. Chasis monocasco de carbono, aerodinámica activa y una relación peso-potencia insuperable.',
    features: ['Chasis MonoCell II-T', 'Aerodinámica activa McLaren', 'Suspensión Proactive Chassis Control III', 'Telemetría McLaren Track Telemetry', 'Asientos de carbono'],
    technical: {
      engine: '4.0L V8 M840T Twin-Turbo',
      power: '750 HP @ 7,500 rpm',
      torque: '800 Nm @ 5,500 rpm',
      transmission: 'Seamless Shift Gearbox 7 velocidades',
      drivetrain: 'Trasera (RWD)',
      acceleration: '2.8 segundos',
      topSpeed: '332 km/h',
      fuel: 'Gasolina Premium',
      weight: '1,337 kg (seco)'
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=h_E2dH8BqjY'
  },
  // ========== NUEVOS CARROS AGREGADOS ==========
  {
    type: 'PICKUP',
    year: '2025',
    name: 'Ford F-150 Raptor R',
    specs: '5.2L V8 Supercharged • 700 HP • 4WD • 0-100 en 4.2s',
    price: '$108,000',
    image: 'https://blackfoxmotors.de/wp-content/uploads/2024/10/394A0051-scaled.jpeg',
    description: 'La pickup deportiva definitiva con motor V8 sobrealimentado. Capacidad off-road extrema con la potencia de un superdeportivo.',
    features: ['Suspensión FOX Racing', 'Tracción 4WD inteligente', 'Pantalla táctil 12"', 'Asientos Recaro', 'Sistema Terrain Management'],
    technical: {
      engine: '5.2L V8 Supercharged',
      power: '700 HP @ 6,000 rpm',
      torque: '868 Nm @ 4,250 rpm',
      transmission: 'Automática 10 velocidades',
      drivetrain: '4WD con bloqueo electrónico',
      acceleration: '4.2 segundos',
      topSpeed: '180 km/h',
      fuel: 'Gasolina Premium',
      weight: '2,540 kg'
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=example1'
  },
  {
    type: 'LUJO',
    year: '2025',
    name: 'Rolls-Royce Ghost',
    specs: '6.75L V12 Biturbo • 571 HP • AWD • 0-100 en 4.6s',
    price: '$410,000',
    image: 'https://e9iwhqzsmh4.exactdn.com/wp-content/uploads/Rolls-Royce-Ghost-Serie-II-091024-07.jpg?strip=all&lossy=1&ssl=1',
    description: 'El epítome del lujo británico. Silencio absoluto, acabados artesanales y una experiencia de conducción serena e inigualable.',
    features: ['Suspensión Planar', 'Starlight Headliner', 'Sistema Bespoke Audio', 'Asientos con masaje', 'Techo panorámico'],
    technical: {
      engine: '6.75L V12 Twin-Turbo',
      power: '571 HP @ 5,000 rpm',
      torque: '850 Nm @ 1,600 rpm',
      transmission: 'Automática 8 velocidades',
      drivetrain: 'AWD permanente',
      acceleration: '4.6 segundos',
      topSpeed: '250 km/h',
      fuel: 'Gasolina Premium',
      weight: '2,490 kg'
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=example2'
  },
  {
    type: 'DEPORTIVO',
    year: '2025',
    name: 'Audi R8 V10 Performance',
    specs: '5.2L V10 • 612 HP • AWD • 0-100 en 3.1s',
    price: '$208,000',
    image: 'https://robbreport.com/wp-content/uploads/2019/11/audi-r8-g.jpg',
    description: 'El último superdeportivo con motor V10 atmosférico de Audi. Sonido inolvidable, tracción quattro y precisión alemana.',
    features: ['Quattro AWD', 'Frenos carbono-cerámica', 'Virtual Cockpit', 'Láser lights', 'Escape deportivo'],
    technical: {
      engine: '5.2L V10 FSI',
      power: '612 HP @ 8,000 rpm',
      torque: '580 Nm @ 6,600 rpm',
      transmission: 'Doble embrague 7 velocidades',
      drivetrain: 'quattro AWD',
      acceleration: '3.1 segundos',
      topSpeed: '331 km/h',
      fuel: 'Gasolina Premium',
      weight: '1,695 kg'
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=example3'
  }
];