export default async (Database) => {
  // **==========================================================================
  // *                           USERS
  // **==========================================================================
  await Database.Users.bulkCreate([
    {
      firstName: "Omar",
      lastName: "Elsahragty",
      gender: "M",
      dateOfBirth: "1997-02-13",
      email: "omar_elsahragty@hotmail.com",
      password: "$2a$10$yQeb44ZCO1Z8x5ncPv5hh.DekQH8EuZSPfnFnlrf2380o.ovalVHm", // ! Password123
      isAdmin: true,
    },
    {
      firstName: "Aly",
      lastName: "Hesham",
      gender: "M",
      dateOfBirth: "1996-12-15",
      email: "aly_mario@yahoo.com",
      password: "$2a$10$AciTsIwj8u5MpyRASyv6yOi/UtZTDPLh5hpOfOHKM.K7RlRxRJwLG", // ! 123456789Aa
      isAdmin: true,
    },
    {
      firstName: "Moustafa",
      lastName: "Tohamy",
      gender: "M",
      dateOfBirth: "1996-08-26",
      email: "moustafatohamy96@gmail.com",
      password: "$2a$10$xoqsfAKV6b2w8dsvg0t5M.0oQclLPzatAiMDGQKGCvzUL6XIcNQKu", // ! Sportyzporty123!@#
      isAdmin: true,
    },
  ]);

  // **==========================================================================
  // *                         GROUP ROLES
  // **==========================================================================
  await Database.GroupRoles.bulkCreate([
    {
      id: 1,
      arabicName: "عضو",
      englishName: "member",
      permissions: {
        addPost: false,
        addMembers: false,
        removeMembers: false,
        createEvents: false,
        editEvents: false,
        assignRoles: false,
        editGroup: false,
        deleteGroup: false,
      },
    },
    {
      id: 2,
      arabicName: "مشرف",
      englishName: "moderator",
      permissions: {
        addPost: true,
        addMembers: true,
        removeMembers: true,
        createEvents: true,
        editEvents: true,
        assignRoles: false,
        editGroup: false,
        deleteGroup: false,
      },
    },
    {
      id: 3,
      arabicName: "مدير",
      englishName: "administrator",
      permissions: {
        addPost: true,
        addMembers: true,
        removeMembers: true,
        createEvents: true,
        editEvents: true,
        assignRoles: true,
        editGroup: true,
        deleteGroup: true,
      },
    },
  ]);

  // **==========================================================================
  // *                        Cites/Regions
  // **==========================================================================
  await Database.Cites.bulkCreate(
    [
      {
        arabicName: "الإسكندرية",
        englishName: "Alexandria",
        picture: null,
        Regions: [
          {
            arabicName: "الدخيلة",
            englishName: "Dekhela",
          },
          {
            arabicName: "حي العامرية أول",
            englishName: "Amreya 1st",
          },
          {
            arabicName: "حي العامرية ثان",
            englishName: "Amreya 2nd",
          },
          { arabicName: "سموحة", englishName: "Semouha" },
          {
            arabicName: "العطارين",
            englishName: "Attaren",
          },
          { arabicName: "الجمرك", englishName: "Gomrok" },
          { arabicName: "اللبان", englishName: "Labban" },
          {
            arabicName: "المنشية",
            englishName: "Mansheya",
          },
          {
            arabicName: "حي أول المنتزة",
            englishName: "Montaza 1st",
          },
          {
            arabicName: "حي ثان المنتزة",
            englishName: "Montaza 2nd",
          },
          {
            arabicName: "الابراهيمية",
            englishName: "Al Ibrahimiyyah",
          },
          {
            arabicName: "الحضرة",
            englishName: "Al Hadara",
          },
          {
            arabicName: "الأزاريطة",
            englishName: "Al Azareta",
          },
          {
            arabicName: "الشاطبي",
            englishName: "Al Shatby",
          },
          {
            arabicName: "النزهة",
            englishName: "Al Nozha",
          },
          { arabicName: "أبيس", englishName: "Abis" },
          { arabicName: "باكوس", englishName: "Bacos" },
          {
            arabicName: "سان ستيفانو",
            englishName: "San Stifano",
          },
          { arabicName: "فلمنج", englishName: "Fleming" },
          {
            arabicName: "السيوف",
            englishName: "El Soyof",
          },
          {
            arabicName: "القصعى",
            englishName: "Al Kasaai",
          },
          {
            arabicName: "الظاهرية",
            englishName: "Al Zahiriyyah",
          },
          {
            arabicName: "المحروسة",
            englishName: "Al Mahrousa",
          },
          {
            arabicName: "خورشيد",
            englishName: "Khorshid",
          },
          {
            arabicName: "عزبة سعد",
            englishName: "Ezbet Saad",
          },
          {
            arabicName: "مصطفى كامل",
            englishName: "Mostafa Kamel",
          },
          { arabicName: "بولكلي", englishName: "Bolkly" },
          {
            arabicName: "زعربانة",
            englishName: "Zaarbana",
          },
          {
            arabicName: "أبو النواتير",
            englishName: "Abu Al Nawatir",
          },
          {
            arabicName: "عزبة حجازي",
            englishName: "Ezbet Hegazy",
          },
          { arabicName: "العجمي", englishName: "Agami" },
          {
            arabicName: "أول الرمل",
            englishName: "El Raml 1",
          },
          {
            arabicName: "ثان الرمل",
            englishName: "El Raml 2",
          },
          { arabicName: "الساحل الشمالى جزء", englishName: "North Coast" },
          { arabicName: "برج العرب", englishName: "Borg El Arab" },
          { arabicName: "باب شرق", englishName: "Bab Sharq" },
          { arabicName: "كرموز", englishName: "Karmouz" },
          {
            arabicName: "برج العرب الجديده",
            englishName: "New Borg El Arab",
          },
          {
            arabicName: "مينا البصل",
            englishName: "Port al-Basal",
          },
          {
            arabicName: "محرم بك",
            englishName: "Moharam Bek",
          },
          {
            arabicName: "سيدى جابر",
            englishName: "Sidi Gaber",
          },
        ],
      },
      {
        arabicName: "أسوان",
        englishName: "Aswan",
        picture: null,
        Regions: [
          { arabicName: "أَسْوان", englishName: "Aswan" },
          {
            arabicName: "أَسْوان الجديدة",
            englishName: "New Aswan",
          },
          { arabicName: "دراو", englishName: "Daraw" },
          {
            arabicName: "كُوم أُمْبُو",
            englishName: "Kom Ombo",
          },
          {
            arabicName: "نصر النوبة",
            englishName: "Nasr Al Nubia",
          },
          {
            arabicName: "كَلَابْشَة",
            englishName: "Kalabsha",
          },
          { arabicName: "إِدفو", englishName: "Edfu" },
          {
            arabicName: "الرِّدِيسيّة",
            englishName: "El Radisia",
          },
          {
            arabicName: "البِصِيليَّة",
            englishName: "El Baseelya",
          },
          {
            arabicName: "السباعية",
            englishName: "Al Sibaiyyah",
          },
          {
            arabicName: "أبو سمبل",
            englishName: "Abu Sombol",
          },
        ],
      },
      {
        arabicName: "أسيوط",
        englishName: "Asyut",
        picture: null,
        Regions: [
          { arabicName: "أسيوط", englishName: "Asyut" },
          {
            arabicName: "أسيوط الجديدة",
            englishName: "New Asyut",
          },
          { arabicName: "دَيْرُوط", englishName: "Dayrout" },
          { arabicName: "منفلوط", englishName: "Manfalut" },
          {
            arabicName: "القوصية",
            englishName: "Al Qusiyyah",
          },
          { arabicName: "أَبْنُوب", englishName: "Abnub" },
          { arabicName: "أبو تيج", englishName: "Abu Tij" },
          {
            arabicName: "الغنايم",
            englishName: "El-Ghanayem",
          },
          {
            arabicName: "ساحل سليم",
            englishName: "Sahel Selim",
          },
          { arabicName: "البداري", englishName: "Al Badari" },
          { arabicName: "صِدفا", englishName: "Sidfa" },
        ],
      },
      {
        arabicName: "البحيرة",
        englishName: "Beheira",
        picture: null,
        Regions: [
          { arabicName: "دمنهور", englishName: "Damnhour" },
          {
            arabicName: "كفر الدوار",
            englishName: "Kafr ElDwar",
          },
          { arabicName: "رشيد", englishName: "Rasheed" },
          { arabicName: "إدكو", englishName: "Edco" },
          {
            arabicName: "أبو المطامير",
            englishName: "Abu ElMattamir",
          },
          {
            arabicName: "أبو حُمُّص",
            englishName: "Abu Hommus",
          },
          {
            arabicName: "الدِّلنْجات",
            englishName: "ElDlengat",
          },
          {
            arabicName: "المحموديّة",
            englishName: "ElMahmoudia",
          },
          {
            arabicName: "الرحمانيّة",
            englishName: "ElRahmania",
          },
          {
            arabicName: "إيتاي البارود",
            englishName: "Eitay Elbarod",
          },
          {
            arabicName: "حُوش عيسى",
            englishName: "Housh Eissa",
          },
          {
            arabicName: "شُبراخِيت",
            englishName: "Shobrakhit",
          },
          {
            arabicName: "كوم حمادة",
            englishName: "Kom Hamada",
          },
          { arabicName: "بدر", englishName: "Badr" },
          {
            arabicName: "وادي النَطْرون",
            englishName: "Wadi ElNatroun",
          },
          {
            arabicName: "النُوبَاريّة الجديدة",
            englishName: "New Nobareyya",
          },
        ],
      },
      {
        arabicName: "بنى سويف",
        englishName: "Beni Suef",
        picture: null,
        Regions: [
          {
            arabicName: "بني سويف",
            englishName: "Beni Suef",
          },
          {
            arabicName: "بني سويف الجديدة",
            englishName: "New Beni Suef",
          },
          {
            arabicName: "الواسْطَى",
            englishName: "Al Wasta",
          },
          { arabicName: "ناصر", englishName: "Naser" },
          {
            arabicName: "إهناسيا",
            englishName: "Ehnasia",
          },
          { arabicName: "بِبا", englishName: "Biba" },
          { arabicName: "سمسطا", englishName: "Samasta" },
          {
            arabicName: "الفَشْن",
            englishName: "Al Fashn",
          },
        ],
      },
      {
        arabicName: "القاهرة",
        englishName: "Cairo",
        picture: null,
        Regions: [
          {
            arabicName: "حي الزيتون",
            englishName: "El-Zaytoun",
          },
          {
            arabicName: "الزاوية الحمراء",
            englishName: "El-Zawya El-Hamraa",
          },
          {
            arabicName: "حدائق القبة",
            englishName: "Hadaeq Al Qubbah",
          },
          {
            arabicName: "الشرابية",
            englishName: "Al-Sharabiya",
          },
          { arabicName: "حي الساحل", englishName: "Elsahel" },
          { arabicName: "شبرا", englishName: "Shubra" },
          {
            arabicName: "روض الفرج",
            englishName: "Rod El Farag",
          },
          {
            arabicName: "الأميرية",
            englishName: "Al Amiriyyah",
          },
          {
            arabicName: "السلام أول",
            englishName: "Al Salam 1",
          },
          {
            arabicName: "السلام ثان",
            englishName: "Al Salam 2",
          },
          { arabicName: "المرج", englishName: "Al Marj" },
          {
            arabicName: "المطرية",
            englishName: "Al Matariyyah",
          },
          { arabicName: "عين شمس", englishName: "Ain Shams" },
          { arabicName: "حي النزهة", englishName: "Al Nozha" },
          {
            arabicName: "مصر الجديدة",
            englishName: "Masr Al Jadidah",
          },
          {
            arabicName: "مدينة نصر",
            englishName: "Nasr City",
          },
          { arabicName: "الوايلي", englishName: "Al Waili" },
          {
            arabicName: "منشأة ناصر",
            englishName: "Monsha'et Nasser",
          },
          { arabicName: "حي وسط", englishName: "Wasat" },
          {
            arabicName: "باب الشعرية",
            englishName: "Bab El Sharia",
          },
          {
            arabicName: "الأزبكية",
            englishName: "Al Azbakeya",
          },
          { arabicName: "بولاق", englishName: "Bulaq" },
          { arabicName: "الموسكي", englishName: "Al Moesky" },
          { arabicName: "عابدين", englishName: "Abdeen" },
          { arabicName: "حي غرب", englishName: "Gharb" },
          { arabicName: "المقطم", englishName: "Al Mokattam" },
          {
            arabicName: "حي الخليفة",
            englishName: "Al Khalifa",
          },
          {
            arabicName: "السيدة زينب",
            englishName: "El Sayeda Zeinab",
          },
          {
            arabicName: "مصر القديمة",
            englishName: "Old Cairo",
          },
          {
            arabicName: "دار السلام",
            englishName: "Dar Al Salam",
          },
          {
            arabicName: "البساتين",
            englishName: "El Basatin",
          },
          { arabicName: "المعادي", englishName: "Maadi" },
          { arabicName: "حي طره", englishName: "Tura" },
          {
            arabicName: "المعصرة",
            englishName: "Al Maasarah",
          },
          {
            arabicName: "حي 15 مايو",
            englishName: "15th May",
          },
          { arabicName: "حلوان", englishName: "Helwan" },
          { arabicName: "التبين", englishName: "Al Tbin" },
          {
            arabicName: "القاهرة الجديدة",
            englishName: "New Cairo",
          },
          { arabicName: "بدر", englishName: "Badr" },
          {
            arabicName: "الشروق",
            englishName: "El Shorouk City",
          },
        ],
      },
      {
        arabicName: "الدقهلية",
        englishName: "Dakahlia",
        picture: null,
        Regions: [
          {
            arabicName: "المنصورة",
            englishName: "Al Mansoura",
          },
          { arabicName: "طَلْخا", englishName: "Talkha" },
          {
            arabicName: "ميت غمر",
            englishName: "Meit Ghamr",
          },
          {
            arabicName: "دِكِرِنْس",
            englishName: "Dekrens",
          },
          { arabicName: "أجا", englishName: "Aga" },
          {
            arabicName: "منية النصر",
            englishName: "Menyet AlNasr",
          },
          {
            arabicName: "السنبلاوين",
            englishName: "AlSenblawen",
          },
          { arabicName: "الكردي", englishName: "AlKordy" },
          {
            arabicName: "بني عبيد",
            englishName: "Bani Abeed",
          },
          {
            arabicName: "المنزلة",
            englishName: "AlManzla",
          },
          {
            arabicName: "تمي الأمديد",
            englishName: "Tami AlAmdeed",
          },
          {
            arabicName: "الجمالية",
            englishName: "AlGammaleya",
          },
          { arabicName: "شربين", englishName: "Shrbeen" },
          {
            arabicName: "المطرية",
            englishName: "AlMatareya",
          },
          { arabicName: "بلقاس", englishName: "Belqas" },
          {
            arabicName: "ميت سلسيل",
            englishName: "Meit Salseel",
          },
          { arabicName: "جمصة", englishName: "Gamasa" },
          {
            arabicName: "محلة دمنة",
            englishName: "Mahlt Dmna",
          },
          { arabicName: "نبروه", englishName: "Nabrouh" },
        ],
      },
      {
        arabicName: "دمياط",
        englishName: "Damietta",
        picture: null,
        Regions: [
          { arabicName: "دمياط", englishName: "Damietta" },
          {
            arabicName: "دمياط الجديدة",
            englishName: "New Damietta",
          },
          {
            arabicName: "رأس البر",
            englishName: "Ras ElBarr",
          },
          {
            arabicName: "فارسكور",
            englishName: "Farskour",
          },
          {
            arabicName: "كفر سعد",
            englishName: "Kafr Saad",
          },
          { arabicName: "الزرقا", englishName: "AlZarka" },
          { arabicName: "السرو", englishName: "AlSrw" },
          { arabicName: "الروضة", englishName: "AlRawda" },
          {
            arabicName: "كفر البطيخ",
            englishName: "Kafr AlBateekh",
          },
          {
            arabicName: "عزبة البرج",
            englishName: "Ezbet AlBorg",
          },
          {
            arabicName: "ميت أبو غالب",
            englishName: "Meit Abu Ghaleb",
          },
        ],
      },
      {
        arabicName: "الفيوم",
        englishName: "Faiyum",
        picture: null,
        Regions: [
          { arabicName: "الفُيُّوم", englishName: "Faiyum" },
          {
            arabicName: "الفُيُّوم الجديدة",
            englishName: "New Faiyum",
          },
          {
            arabicName: "طَامِيِّة",
            englishName: "Tamiyyah",
          },
          { arabicName: "سنورس", englishName: "Sinnuris" },
          { arabicName: "إطسا", englishName: "Etsa" },
          { arabicName: "إبشواي", englishName: "Ibsheway" },
          {
            arabicName: "يوسف الصديق",
            englishName: "Joseph Al Seddek",
          },
        ],
      },
      {
        arabicName: "الغربية",
        englishName: "Gharbia",
        picture: null,
        Regions: [
          { arabicName: "طنْطَا", englishName: "Tanta" },
          {
            arabicName: "المحلة الكبرى",
            englishName: "AlMahala AlKobra",
          },
          {
            arabicName: "كفر الزَّيَّات",
            englishName: "Kafr AlZayyat",
          },
          { arabicName: "زِفْتى", englishName: "Zefta" },
          { arabicName: "السّنْطة", englishName: "AlSanta" },
          { arabicName: "قُطور", englishName: "Qotour" },
          { arabicName: "بَسْيون", englishName: "Basioun" },
          {
            arabicName: "سَمَنُّود",
            englishName: "Samnood",
          },
        ],
      },
      {
        arabicName: "الجيزة",
        englishName: "Giza",
        picture: null,
        Regions: [
          {
            arabicName: "حي شمال",
            englishName: "North Giza District",
          },
          { arabicName: "الوراق", englishName: "El Warraq" },
          {
            arabicName: "بولاق الدكرور",
            englishName: "Bolak Al Dakrour",
          },
          { arabicName: "الدقي", englishName: "Al Doqi" },
          { arabicName: "العجوزة", englishName: "Al Agouzah" },
          {
            arabicName: "العمرانية",
            englishName: "El Omraniya",
          },
          { arabicName: "الهرم", englishName: "Haram" },
          {
            arabicName: "حي جنوب",
            englishName: "South Giza District",
          },
          {
            arabicName: "السادس من أكتوبر",
            englishName: "6th of October City",
          },
          {
            arabicName: "الشيخ زايد",
            englishName: "Sheikh Zayed City",
          },
          {
            arabicName: "الحوامدية",
            englishName: "El-Hawamdeyya",
          },
          {
            arabicName: "البدراشين",
            englishName: "Al Badrashin",
          },
          { arabicName: "الصَّف", englishName: "El-Saf City" },
          { arabicName: "أطْفِيح", englishName: "Atfih" },
          {
            arabicName: "مدينة العياط",
            englishName: "Madinet Al Ayat",
          },
          { arabicName: "الباويطي", englishName: "Bawiti" },
          {
            arabicName: "منشأة القناطر",
            englishName: "Monsha'et El Kanater",
          },
          { arabicName: "أوسيم", englishName: "Ausim" },
          { arabicName: "كرداسة", englishName: "Kirdasah" },
          {
            arabicName: "أبو النُمْرُس",
            englishName: "Abu an Numros",
          },
        ],
      },
      {
        arabicName: "الإسماعيلية",
        englishName: "Ismailia",
        picture: null,
        Regions: [
          {
            arabicName: "الإسماعيلية",
            englishName: "Ismailia",
          },
          { arabicName: "فايد", englishName: "Fayed" },
          {
            arabicName: "القنطرة شرق",
            englishName: "East AlQantara",
          },
          {
            arabicName: "القنطرة غرب",
            englishName: "West AlQantara",
          },
          {
            arabicName: "التل الكبير",
            englishName: "AlTal Alkbeer",
          },
          {
            arabicName: "أبو صوير المحطة",
            englishName: "Abu Soweir",
          },
          {
            arabicName: "القصاصين الجديدة",
            englishName: "New AlQasasin",
          },
        ],
      },
      {
        arabicName: "كفر الشيخ",
        englishName: "Kafr El Sheikh",
        picture: null,
        Regions: [
          {
            arabicName: "كفر الشيخ",
            englishName: "Kafr El Sheikh",
          },
          {
            arabicName: "دِسوق",
            englishName: "Desouk",
          },
          {
            arabicName: "فُوّه",
            englishName: "Foah",
          },
          {
            arabicName: "مِطوُبِس",
            englishName: "Metoubus",
          },
          {
            arabicName: "بَلْطيم",
            englishName: "Balteem",
          },
          {
            arabicName: "الحامول",
            englishName: "AlHamoul",
          },
          {
            arabicName: "بِيَلا",
            englishName: "Bela",
          },
          {
            arabicName: "الرياض",
            englishName: "AlReyad",
          },
          {
            arabicName: "سيدي سالم",
            englishName: "Sidi Salem",
          },
          {
            arabicName: "قَلّين",
            englishName: "Qaleen",
          },
          {
            arabicName: "سيدي غازي",
            englishName: "Sidi Ghazi",
          },
          {
            arabicName: "بُرج البُرلُّس",
            englishName: "Borg AlBorols",
          },
          {
            arabicName: "مِسِير",
            englishName: "Meseer",
          },
        ],
      },
      {
        arabicName: "الأقصر",
        englishName: "Luxor",
        picture: null,
        Regions: [
          { arabicName: "الأقصر", englishName: "Luxor" },
          {
            arabicName: "الأقصر الجديدة",
            englishName: "New Luxor",
          },
          {
            arabicName: "طِيبة الجديدة",
            englishName: "New Tiba",
          },
          { arabicName: "الزينيّة", englishName: "Zainiya" },
          {
            arabicName: "البَيَاضِيّة",
            englishName: "Al Bayadeyah",
          },
          {
            arabicName: "القُرْنَة",
            englishName: "Al Qarnah",
          },
          { arabicName: "أَرمَنْت", englishName: "Armant" },
          { arabicName: "الطُّود", englishName: "Al Toud" },
          { arabicName: "إسنا", englishName: "Esna" },
        ],
      },
      {
        arabicName: "مطروح",
        englishName: "Matruh",
        picture: null,
        Regions: [
          {
            arabicName: "مَرْسَى مَطْرُوح",
            englishName: "Marsa Matruh",
          },
          {
            arabicName: "الحَمَّام",
            englishName: "AlHammam",
          },
          {
            arabicName: "العَلَمِين",
            englishName: "AlAlamin",
          },
          {
            arabicName: "الضَّبْعَة",
            englishName: "AlDabaa",
          },
          {
            arabicName: "النِّجِيلَة",
            englishName: "AlNagila",
          },
          {
            arabicName: "سِيِدي بَرَّانِي",
            englishName: "Sidi Barrani",
          },
          {
            arabicName: "السَّلُّوم",
            englishName: "AlSalloom",
          },
        ],
      },
      {
        arabicName: "المنيا",
        englishName: "Minya",
        picture: null,
        Regions: [
          { arabicName: "المنيا", englishName: "Minya" },
          {
            arabicName: "المنيا الجديدة",
            englishName: "New Minya",
          },
          { arabicName: "العدوة", englishName: "Al Edwah" },
          { arabicName: "مَغَاغَة", englishName: "Maghaghah" },
          {
            arabicName: "بني مزار",
            englishName: "Bani Mazar",
          },
          { arabicName: "مَطَاي", englishName: "Matay" },
          { arabicName: "سَمَالُوط", englishName: "Samalut" },
          {
            arabicName: "المدينة الفكرية",
            englishName: "Al Madinah Al Fikriyyah",
          },
          { arabicName: "مَلّوي", englishName: "Mallawi" },
          {
            arabicName: "دِير مَوَاس",
            englishName: "Dayr Mawas",
          },
        ],
      },
      {
        arabicName: "المنوفية",
        englishName: "Monufia",
        picture: null,
        Regions: [
          {
            arabicName: "شِبين الكوم",
            englishName: "Shebeen ElKoom",
          },
          {
            arabicName: "مدينة السادات",
            englishName: "AlSadat",
          },
          { arabicName: "مِنُوف", englishName: "Menouf" },
          {
            arabicName: "سِرس الليَّان",
            englishName: "Sers AlLayan",
          },
          { arabicName: "أَشْمُون", englishName: "Ashmoun" },
          { arabicName: "الباجور", englishName: "AlBagour" },
          { arabicName: "قُوِيْسنا", englishName: "Quisna" },
          {
            arabicName: "بركة السبع",
            englishName: "Berkt AlSabaa",
          },
          { arabicName: "تَلَا", englishName: "Tala" },
          {
            arabicName: "الشهداء",
            englishName: "AlShohadaa",
          },
        ],
      },
      {
        arabicName: "الوادي الجديد",
        englishName: "New Valley",
        picture: null,
        Regions: [
          {
            arabicName: "الخَارْجَة",
            englishName: "Kharga",
          },
          { arabicName: "باريس", englishName: "Paris" },
          { arabicName: "مُوط", englishName: "Mut" },
          {
            arabicName: "الفرافرة",
            englishName: "Farafra",
          },
          { arabicName: "بلاط", englishName: "Balat" },
        ],
      },
      {
        arabicName: "شمال سيناء",
        englishName: "North Sinai",
        picture: null,
        Regions: [
          {
            arabicName: "العريش",
            englishName: "AlAresh",
          },
          {
            arabicName: "الشّيخ زُوَيِّد",
            englishName: "Sheikh Zowaid",
          },
          { arabicName: "رَفَح", englishName: "Rafah" },
          {
            arabicName: "بئر العبد",
            englishName: "Be'r AlAbd",
          },
          {
            arabicName: "الحَسَنَة",
            englishName: "AlHasana",
          },
          { arabicName: "نَخِل", englishName: "Nakhl" },
        ],
      },
      {
        arabicName: "بور سعيد",
        englishName: "Port Said",
        picture: null,
        Regions: [
          {
            arabicName: "بورسعيد",
            englishName: "Port Said",
          },
          {
            arabicName: "بورفؤاد",
            englishName: "Port Fuad",
          },
        ],
      },
      {
        arabicName: "القليوبية",
        englishName: "Qalyubia",
        picture: null,
        Regions: [
          { arabicName: "بنها", englishName: "Banha" },
          { arabicName: "قَلْيوب", englishName: "Qalyub" },
          {
            arabicName: "شُبْرا الخيمة",
            englishName: "Shubra Al Khaymah",
          },
          {
            arabicName: "القناطر الخيرية",
            englishName: "Al Qanatir Al Khayriyyah",
          },
          {
            arabicName: "الخْانْكَة",
            englishName: "Al Khankah",
          },
          {
            arabicName: "كفر شُكر",
            englishName: "Kafr Shokr",
          },
          { arabicName: "طُوخ", englishName: "Tukh" },
          { arabicName: "قَها", englishName: "Qaha" },
          {
            arabicName: "العبور",
            englishName: "El Obour City",
          },
          {
            arabicName: "الخُصُوص",
            englishName: "Al Khusus",
          },
          {
            arabicName: "شِبِين القناطر",
            englishName: "Shibin Al Qanater",
          },
        ],
      },
      {
        arabicName: "قنا",
        englishName: "Qena",
        picture: null,
        Regions: [
          { arabicName: "قنا", englishName: "Qena" },
          {
            arabicName: "قنا الجديدة",
            englishName: "New Qena",
          },
          { arabicName: "أبو طشت", englishName: "Abu Tesht" },
          {
            arabicName: "نَجْع حَمَّادِي",
            englishName: "Nagaa Hammadi",
          },
          { arabicName: "دِشْنَا", englishName: "Dishna" },
          { arabicName: "الوَقْف", englishName: "Waqf" },
          { arabicName: "قِفْط", englishName: "Qift" },
          { arabicName: "نَقَادَة", englishName: "Naqadah" },
          { arabicName: "قُوص", englishName: "Qus" },
          { arabicName: "فَرْشُوط", englishName: "Farshut" },
        ],
      },
      {
        arabicName: "البحر الأحمر",
        englishName: "Red Sea",
        picture: null,
        Regions: [
          { arabicName: "الغردقة", englishName: "Hurghada" },
          {
            arabicName: "رأس غارب",
            englishName: "Ras Ghareb",
          },
          { arabicName: "سفاجا", englishName: "Safaga" },
          { arabicName: "القصير", englishName: "Quseer" },
          {
            arabicName: "مرسى علم",
            englishName: "Marsa Alam",
          },
          {
            arabicName: "الشلاتين",
            englishName: "Shalateen",
          },
          { arabicName: "حلايب", englishName: "Halayeb" },
        ],
      },
      {
        arabicName: "الشرقية",
        englishName: "Sharqia",
        picture: null,
        Regions: [
          {
            arabicName: "الزقازيق",
            englishName: "AlZaqazeeq",
          },
          {
            arabicName: "العاشر من رمضان",
            englishName: "10th of Ramadan",
          },
          {
            arabicName: "منيا القمح",
            englishName: "Minya AlQamh",
          },
          { arabicName: "بِلْبيس", englishName: "Balbees" },
          {
            arabicName: "مشتول السوق",
            englishName: "Mashtoul AlSouq",
          },
          {
            arabicName: "القنايات",
            englishName: "AlQnayat",
          },
          {
            arabicName: "أبو حمّاد",
            englishName: "Abu Hammad",
          },
          { arabicName: "القُرين", englishName: "AlQureen" },
          { arabicName: "هِهْيا", englishName: "Hehya" },
          {
            arabicName: "أبو كبير",
            englishName: "Abu Kbeer",
          },
          { arabicName: "فاقوس", englishName: "Faqous" },
          {
            arabicName: "الصالحية الجديدة",
            englishName: "AlSalheyya",
          },
          {
            arabicName: "الإبراهيمية",
            englishName: "Al Ebrahimeya",
          },
          {
            arabicName: "ديرب نجم",
            englishName: "Derb Negm",
          },
          {
            arabicName: "كفر صقر",
            englishName: "Kafr Sakr",
          },
          {
            arabicName: "أولاد صقر",
            englishName: "Awlad Sakr",
          },
          {
            arabicName: "الحسينية",
            englishName: "AlHusaineyya",
          },
          {
            arabicName: "صان الحجر القبلية",
            englishName: "San Alhagar",
          },
          {
            arabicName: "منشأة أبو عمر",
            englishName: "Abu Omar",
          },
        ],
      },
      {
        arabicName: "سوهاج",
        englishName: "Sohag",
        picture: null,
        Regions: [
          { arabicName: "سوهاج", englishName: "Sohag" },
          {
            arabicName: "سوهاج الجديدة",
            englishName: "New Sohag",
          },
          { arabicName: "أخميم", englishName: "Akhmim" },
          {
            arabicName: "أخميم الجديدة",
            englishName: "New Akhmim",
          },
          {
            arabicName: "البلْيَنا",
            englishName: "Al Balyana",
          },
          {
            arabicName: "المراغة",
            englishName: "Al Maraghah",
          },
          { arabicName: "المنشأة", englishName: "Al Minshah" },
          {
            arabicName: "دار السلام",
            englishName: "Dar Al Salam",
          },
          { arabicName: "جِرجا", englishName: "Girga" },
          {
            arabicName: "جُهِينَة الغربيّة",
            englishName: "Juhaynah",
          },
          { arabicName: "ساقلتة", englishName: "Saqultah" },
          { arabicName: "طمَا", englishName: "Tima" },
          { arabicName: "طَهُطَا", englishName: "Tahta" },
        ],
      },
      {
        arabicName: "جنوب سيناء",
        englishName: "South Sinai",
        picture: null,
        Regions: [
          { arabicName: "الطور", englishName: "El Tor" },
          {
            arabicName: "شرم الشيخ",
            englishName: "Sharm El-Sheikh",
          },
          { arabicName: "دهب", englishName: "Dahab" },
          {
            arabicName: "نويبع",
            englishName: "Nuweibaa",
          },
          { arabicName: "طابا", englishName: "Taba" },
          {
            arabicName: "سانت كاترين",
            englishName: "Saint Catherine",
          },
          {
            arabicName: "أبو رديس",
            englishName: "Ras Abu Rudeis",
          },
          {
            arabicName: "أبو زنيمة",
            englishName: "Abu Znema",
          },
          {
            arabicName: "رأس سدر",
            englishName: "Ras Sedr",
          },
        ],
      },
      {
        arabicName: "السويس",
        englishName: "Suez",
        picture: null,
        Regions: [
          {
            arabicName: "حي السويس",
            englishName: "Suez Neighborhood",
          },
          {
            arabicName: "حي الأربعين",
            englishName: "40 Neighborhood",
          },
          {
            arabicName: "حي عتاقة",
            englishName: "Ataqa Neighborhood",
          },
          {
            arabicName: "حي الجناين",
            englishName: "Gardens Neighborhood",
          },
          {
            arabicName: "حي فيصل",
            englishName: "Feisal Neighborhood",
          },
        ],
      },
    ],
    {
      include: [{ model: Database.Regions, as: "Regions" }],
    }
  );

  // **==========================================================================
  // *                           SPORTS
  // **==========================================================================
  await Database.Sports.bulkCreate([
    { arabicName: "كرة سلة", englishName: "Basketball", picture: null },
    {
      arabicName: "التسلق والمشي لمسافات طويلة",
      englishName: "Climbing and hiking",
      picture: null,
    },
    { arabicName: "كريكيت", englishName: "Cricket", picture: null },
    { arabicName: "مشي", englishName: "Walking", picture: null },
    { arabicName: "ركض", englishName: "Running", picture: null },
    { arabicName: "تنس الريشة", englishName: "Badminton", picture: null },
    { arabicName: "تنس طاولة", englishName: "Table tennis", picture: null },
    { arabicName: "رفع أثقال", englishName: "Weightlifting", picture: null },
    { arabicName: "الرماية", englishName: "Archery", picture: null },
    { arabicName: "ركوب الدراجات", englishName: "Cycling", picture: null },
    { arabicName: "ألعاب القوى", englishName: "Athletics", picture: null },
    { arabicName: "يوجا", englishName: "Yoga", picture: null },
    { arabicName: "مبارزة", englishName: "Fencing", picture: null },
    { arabicName: "سباحة", englishName: "Swimming", picture: null },
    {
      arabicName: "كرة القدم الأمريكية",
      englishName: "American Football",
      picture: null,
    },
    { arabicName: "قنون قتالية", englishName: "Martial arts", picture: null },
    { arabicName: "كرة قدم", englishName: "Football", picture: null },
    { arabicName: "تنس", englishName: "Tennis", picture: null },
    { arabicName: "ملاكمة", englishName: "Boxing", picture: null },
    { arabicName: "كرة اليد", englishName: "Handball", picture: null },
    {
      arabicName: "كرة قدم حرة",
      englishName: "Freestyle football",
      picture: null,
    },
    { arabicName: "الهوكى الجليدى", englishName: "Ice hockey", picture: null },
    { arabicName: "سكواش", englishName: "Squash", picture: null },
    {
      arabicName: "رياضة التزحلق على الجليد",
      englishName: "Skating sports",
      picture: null,
    },
    { arabicName: "القفز بالمظلة", englishName: "Parachuting", picture: null },
    { arabicName: "كروس فيت", englishName: "Crossfit", picture: null },
  ]);

  // **==========================================================================
  // *                        CONFIGURATIONS
  // **==========================================================================
  await Database.Configurations.create({
    id: 1,
    GroupDefaultRole: 1,
  });
};
