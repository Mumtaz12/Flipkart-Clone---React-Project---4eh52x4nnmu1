const productData = [

    {
        category: 'Grocery',
        description: '',
        id: 21,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/sugar/t/6/k/500-sulphurfree-pouch-1-white-sugar-uttam-sugar-crystal-original-imagkpnzazgezhgg.jpeg?q=70',
        price: 32,
        rating: {rate: 4.3, count:100},
        title: 'UTTAM SUGAR Sulphurfree Sugar ',
    
    },
    {
        category: 'Grocery',
        description: '',
        id: 22,
        image: 'https://rukminim1.flixcart.com/image/416/416/kqidx8w0/edible-oil/5/i/s/refined-pouch-soyabean-oil-fortune-original-imag4gb3sefpnueg.jpeg?q=70',
        price: 122,
        rating: {rate: 4.1, count:100},
        title: 'Fortune Refined Soyabean Oil Pouch',
    
    },
    {
        category: 'Grocery',
        description: '',
        id: 23,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/pulses/n/s/c/-original-imagpgzhcwtb6xgu.jpeg?q=70',
        price: 49,
        rating: {rate: 4.4, count:100},
        title: 'Tata Sampann Yellow Chana Dal (Split)  (500 g)',
    
    },
    {
        category: 'Grocery',
        description: '',
        id: 24,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/rice/a/l/x/-original-imagk7sgctyknzzh.jpeg?q=70',
        price: 84,
        rating: {rate: 4.2, count:100},
        title: 'INDIA GATE Rozzana Basmati Rice (Polished)  (1 kg)',
    
    },
    {
        category: 'Grocery',
        description: '',
        id: 25,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/snack-savourie/n/g/6/-original-imaggrah9g6xz4p5.jpeg?q=70',
        price: 174,
        rating: {rate: 3.5, count:100},
        title: 'Bikano Navratan Mixture  (1 kg)',
    
    },
    {
        category: 'Mobiles',
        description: '',
        id: 26,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/r/c/-original-imaghyc7gkgg6qzf.jpeg?q=70',
        price: 22999,
        rating: {rate: 3.2, count:100},
        title: 'realme GT Neo 3T (Drifting White, 128 GB)  (6 GB RAM)',
    
    },
    {
        category: 'Mobiles',
        description: '',
        id: 27,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/m/j/o/-original-imaghkvue4yjecju.jpeg?q=70',
        price: 24999,
        rating: {rate: 4.4, count:100},
        title: 'REDMI Note 12 Pro 5G (Glacier Blue, 128 GB)  (6 GB RAM)',
    
    },
    {
        category: 'Mobiles',
        description: '',
        id: 28,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/k/o/-original-imaghx9qtwbnhwvy.jpeg?q=70',
        price: 67999,
        rating: {rate: 3.6, count:100},
        title: 'APPLE iPhone 14 ((PRODUCT)RED, 128 GB)',
    
    },
    {
        category: 'Mobiles',
        description: '',
        id: 29,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/f/m/-original-imagna3ezkdusyrz.jpeg?q=70',
        price: 32999,
        rating: {rate: 4.6, count:100},
        title: 'vivo V27 5G (Magic Blue, 128 GB)  (8 GB RAM)',
    
    },
    {
        category: 'Mobiles',
        description: '',
        id: 30,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/2/s/7/-original-imagmg6gktts6sfy.jpeg?q=70',
        price: 117000,
        rating: {rate: 4.8, count:100},
        title: 'SAMSUNG Galaxy S23 Ultra 5G (Green, 256 GB)  (12 GB RAM)',
    
    },
    {
        category: 'Home',
        description: '',
        id: 31,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/blanket/l/v/n/3rd-generation-hypoallergic-reversible-single-bed-comforter-original-imagnsttmxszzppn.jpeg?q=70',
        price: 1039,
        rating: {rate: 3.2, count:100},
        title: 'SIE STORE Printed King Comforter for Mild Winter  (Microfiber, Light Blue, White)',
    
    },
    {
        category: 'Home',
        description: '',
        id: 32,
        image: 'https://rukminim1.flixcart.com/image/416/416/kim1aq80-0/curtain/j/b/v/212-cm-7-ft-polyester-door-curtain-pack-of-4-floral-pink-220-original-imafyd5znyfjcygv.jpeg?q=70',
        price: 423,
        rating: {rate: 4.0, count:100},
        title: 'HomeTex 152.4 cm (5 ft) Polyester Room Darkening Window Curtain (Pack Of 3)  (Floral, Pink)',
    
    },
    {
        category: 'Home',
        description: '',
        id: 33,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/gas-stove/f/p/r/2-4-svp02-suryaviva-53-manual-original-imagzjduznpqhkpy.jpeg?q=70',
        price: 1239,
        rating: {rate: 4.1, count:100},
        title: 'SURYAVIVA Photon 2B BK Toughened Glass 2 Cast Iron Burner Gas Stove(Manual Igniton,Black) Glass Manual Gas Stove  (2 Burners)',
    
    },
    {
        category: 'Home',
        description: '',
        id: 34,
        image: 'https://rukminim1.flixcart.com/image/416/416/kt39jm80/changing-table/p/b/o/smart-kids-study-table-for-3-to-10-years-with-an-option-of-led-original-imag6g8gxnbfqsfz.jpeg?q=70',
        price: 1959,
        rating: {rate: 4.1, count:100},
        title: 'StarAndDaisy Smart Kids Study Table For 3 To 10 Years with An Option Of Led Lamp- Pink Plastic Study Table  (Finish Color - BLUE, DIY(Do-It-Yourself))',
    
    },
    {
        category: 'Appliances',
        description: '',
        id: 35,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/fan/t/v/4/imperial-underlight-75-1-ceiling-fan-1320-lazer-original-imaggsgpydmybhbh.jpeg?q=70',
        price: 2999,
        rating: {rate: 4.7, count:100},
        title: 'Lazer Imperial Premium Underlight 1320 mm Remote Controlled 3 Blade Ceiling Fan  (Royal Gold, Pack of 1)',
    
    },
    {
        category: 'Appliances',
        description: '',
        id: 36,
        image: 'https://rukminim1.flixcart.com/image/416/416/l1dwknk0/induction-cook-top/3/e/w/-original-imagcynthja2cng4.jpeg?q=70',
        price: 1210,
        rating: {rate: 4.4, count:100},
        title: 'Pigeon Favourite IC 1800 W Induction Cooktop  (Black, Push Button)',
    
    },
    {
        category: 'Appliances',
        description: '',
        id: 37,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/air-conditioner-new/r/p/k/-original-imagkqs8xkt8hhfw.jpeg?q=70',
        price: 25000,
        rating: {rate: 3.9, count:100},
        title: 'Voltas 1.5 Ton 3 Star Split Inverter AC - White  (183V Vectra Pride(4503445), Copper Condenser)',
    
    },
    {
        category: 'Top Offers',
        description: '',
        id: 38,
        image: 'https://rukminim1.flixcart.com/image/832/832/kd3f3bk0pkrrdj/sunglass/n/d/f/medium-3002-blk-blk-3002-sil-blk-gansta-original-imafu656n5kmgrxw.jpeg?q=70',
        price: 251,
        rating: {rate: 3.2, count:100},
        title: 'Gradient, UV Protection Aviator Sunglasses (57)  (For Men & Women, Black, Blue)',
    
    },
    {
        category: 'Top Offers',
        description: '',
        id: 39,
        image: 'https://rukminim1.flixcart.com/image/416/416/l15bxjk0/painting/t/b/1/30-1-pnt-blk-buddha-circadian-original-imagcsfygf3xn5tw.jpeg?q=70',
        price: 151,
        rating: {rate: 4.9, count:100},
        title: 'CIRCADIAN Lord Buddha Art Print Design Set of 5 MDF Self Adhesive Panel Frame Wall Decor Digital Reprint 17 inch x 30 inch Painting  (With Frame)',
    
    },
    {
        category: 'Top Offers',
        description: '',
        id: 40,
        image: 'https://rukminim1.flixcart.com/image/416/416/l2ghgnk0/vehicle-pull-along/o/c/n/-original-imagdshwvcgsmjj9.jpeg?q=70',
        price: 399,
        rating: {rate: 3.1, count:100},
        title: 'Toys R Us Fast Lane Excavator Premium Quality Toy Design with Mechanical Cement Mixer  (Multicolor)',
    
    },
    {
        category: 'Beauty,Toys & More',
        description: '',
        id: 41,
        image: 'https://rukminim1.flixcart.com/image/416/416/l55nekw0/remote-control-toy/x/s/w/tpzh01-3-grow-star-plus-original-imagfwe4jba5gru8.jpeg?q=70',
        price: 250,
        rating: {rate: 2.7, count:100},
        title: 'Mayne Flying Remote Control RC Induction Type 2-in-1 Indoor Outdoor Helicopter  (Multicolor)',
    
    },
    {
        category: 'Beauty,Toys & More',
        description: '',
        id: 42,
        image: 'https://rukminim1.flixcart.com/image/416/416/kzsqykw0/stuffed-toy/8/h/d/3-feet-pink-teddy-bear-with-neck-bow-88-os-retail-original-imagbqbycvygkak2.jpeg?q=70',
        price: 275,
        rating: {rate: 4.3, count:100},
        title: 'Osjs SOFT TOYS LOVER teddy bear pink colors size 3 feet very soft teddy bear - 90.2 cm  (Pink)',
    
    },
    {
        category: 'Beauty,Toys & More',
        description: '',
        id: 43,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/moisturizer-cream/j/9/q/-original-imagnftddymfhjcp.jpeg?q=70',
        price: 99,
        rating: {rate: 4.7, count:100},
        title: 'Garnier Men Acno Fight Pimple Clearing Brightening Moisturiser  (45 g)',
    
    },
    {
        category: 'Beauty,Toys & More',
        description: '',
        id: 44,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/shopsy-rakhi-set/2/u/l/2-insta-beauty-5-in-1-forever-enrich-matte-lipstick-the-red-nude-original-imagcr2zn5ahu7vn.jpeg?q=70',
        price: 68,
        rating: {rate: 3.7, count:100},
        title: 'NYN HUDA Insta Beauty 5 in 1 Forever Enrich Matte Lipstick, The Red & Nude Pack of 2  (The Fab Red and Nude Edition, 15 g)',
    
    },
    {
        category: 'Two Wheelers',
        description: '',
        id: 74399,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/electric-bike-scooter/c/h/y/-original-imagkfywvavgj3xg.jpeg?q=70',
        price: 25,
        rating: {rate: 3.8, count:100},
        title: 'OKAYA Freedum LI-2 Booking for Ex-showroom Price (with Portable Charger, Matte Green)',
    
    },
    {
        category: 'Two Wheelers',
        description: '',
        id: 46,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/electric-bike-scooter/q/b/8/-original-imagk232gf9mnqeh.jpeg?q=70',
        price: 111499,
        rating: {rate: 3.1, count:100},
        title: 'OKAYA FAAST F4 Booking for Ex-showroom Price (with Portable Charger, White)',
    
    },
    {
        category: 'Two Wheelers',
        description: '',
        id: 47,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/electric-bike-scooter/3/5/k/-original-imagkhw54bfydnvz.jpeg?q=70',
        price: 81513,
        rating: {rate: 4.5, count:100},
        title: 'Hero Super Splendor (Drum) Booking for Ex-showroom Price  (Canvas Black)',
    
    },
    {
        category: 'Two Wheelers',
        description: '',
        id: 48,
        image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/electric-bike-scooter/e/p/z/-original-imaggcdwqyggvp8g.jpeg?q=70',
        price: 84978,
        rating: {rate: 4.1, count:100},
        title: 'Hero Destini 125 (XTEC) Booking for Ex-showroom Price  (Nobel Red)',
    
    },
]
export default productData;