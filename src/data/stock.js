const stock = [
    {
        id: 1,
        nombre: 'SAMSUNG ODYSSEY G4 FHD 240HZ',
        descripcion: `
        Marca : Samsung
        P/N : LS25BG400ELXZB
        Color : Negro
        Tamaño de panel : 25"
        Curvo/Plano : Plano
        Colores : 16.7M
        Tipo de panel : IPS
        Resolución : 1920 x 1080 FHD
        Ángulo de vision : 178 grados / 178 grados
        Parlantes : No
        Conectividad : 1 x Display Port, 2 x HDMI, 1 x USB, 1 x miniplug
        Frecuencia de actualizacion : 240 Hz
        Tiempo de respuesta (ms) : 1 ms
        Voltaje : 100-240 V, 50/60 Hz
        Inclinación : Si
        Giratorio : Si
        Pivote : Si
        Ajuste en altura : Si
        Freesync/Gsync : G-Sync
        `,
        cantidad: 10,
        precio: 269.999,
        stock:6, 
        image1:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-25-samsung-odyssey-g4-fhd-240hz-dp-hdmi-0.jpg',
        image2:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-25-samsung-odyssey-g4-fhd-240hz-dp-hdmi-1.jpg',
        image3:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-25-samsung-odyssey-g4-fhd-240hz-dp-hdmi-2.jpg',
        image4:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-25-samsung-odyssey-g4-fhd-240hz-dp-hdmi-3.jpg',
        
    },
    {
        id: 2,
        nombre: 'Mouse Logitech G Pro X Superlight',
        descripcion: 'Mouse inalámbrico ultraligero de 63 gramos con sensor HERO 25K y hasta 70 horas de duración de batería',
        cantidad: 25,
        precio: 19.999,
        imagen:'https://backupcomputacion.com/imagenes/articulos/mouse_gamer/mouse_logitech_g_pro_x_superlight_negro01.jpg',
        stock:10, 
        image1:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g305-lightspeed-wireless-black-0.jpg',
        image2:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g305-lightspeed-wireless-black-1.jpg',
        image3:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g305-lightspeed-wireless-black-2.jpg',
        image4:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g305-lightspeed-wireless-black-3.jpg',
    },
    {
        id: 3,
        nombre: 'Teclado mecánico Corsair K95 RGB Platinum XT',
        descripcion: 'Teclado mecánico con interruptores Cherry MX Speed y retroiluminación RGB. Incluye 6 teclas macro programables y memoria integrada para guardar perfiles de iluminación y macros.',
        cantidad: 10,
        precio: 39.999,
        imagen: 'https://service.pcconnection.com/images/inhouse/171E1A62-3D69-4BFD-BBB3-6AC7621A9565.jpg',
        stock:8,
    },
    {
        id: 4,
        nombre: 'Auriculares HyperX Cloud II Wireless',
        descripcion: 'Auriculares inalámbricos con sonido envolvente 7.1 y batería de hasta 30 horas de duración',
        cantidad: 20,
        precio: 50.999,
        imagen:'https://http2.mlstatic.com/D_NQ_NP_888876-MLA48554544372_122021-O.webp',
        stock:5, 
    },
    {
        id: 5,
        nombre: 'PC armada ASUS ROG Strix G15',
        descripcion: 'PC de escritorio con procesador Intel Core i9-11900KF, tarjeta gráfica NVIDIA GeForce RTX 3080 y 32 GB de RAM',
        cantidad: 5,
        precio: 899.999,
        imagen:'https://mauricomputacion.com.ar/images/productos/24379.webp',
        stock:3, 
    },
    {
        id: 6,
        nombre: 'Monitor MSI Optix MAG274QRF-QD',
        descripcion: 'Monitor IPS 2K de 27 pulgadas con frecuencia de actualización de 165 Hz y soporte para HDR400',
        cantidad: 20,
        precio: 229.999,
        imagen:'https://http2.mlstatic.com/D_NQ_NP_761869-MLA53378284156_012023-O.webp',
        stock:10, 
    },
    {
        id: 7,
        nombre: 'Mouse Razer DeathAdder V2',
        descripcion: 'Mouse para gaming con sensor óptico de 20.000 DPI y switches ópticos',
        cantidad: 12,
        precio: 24.999,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_759999-MLA41816934384_052020-O.webp',
        stock:12,
    },
    {
        id: 8,
        nombre: 'Teclado Logitech G Pro X Mechanical Gaming Keyboard',
        descripcion: 'Teclado mecánico con switches intercambiables, iluminación RGB y perfiles de juego programables',
        cantidad: 8,
        precio: 39.999,
        imagen: 'https://m.media-amazon.com/images/I/714ehqraXCL.jpg',
        stock:8,
    },

    {
        id: 9,
        nombre: 'Auriculares inalámbricos Logitech G Series G733 negro con luz rgb LED',
        descripcion: '¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Logitech G733 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.',
        cantidad: 15,
        precio: 57.999,
        imagen:'https://http2.mlstatic.com/D_NQ_NP_760857-MLA44771394445_022021-O.webp',
        stock:12, 
    },
    {
        id: 10,
        nombre: 'PC armada NZXT BLD H1 Mini PC',
        descripcion: 'PC de escritorio compacto con procesador AMD Ryzen 7 5800X, tarjeta gráfica NVIDIA GeForce RTX 3070 y 16 GB de RAM',
        cantidad: 8,
        precio: 599.999,
        imagen:'https://www.datocms-assets.com/34299/1678229989-playerthreeprime-hero-white.png?auto=format&fit=max&w=1200',
        stock:3, 
    }
];

export default stock;
  
