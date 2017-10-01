const flagsData = [
  { "nombre": "Afghanistan",
    "colores" : "rojo verde negro blanco"
  },
  { "nombre": "Albania",
    "colores" : "rojo blanco"
  },
  { "nombre": "Algeria",
    "colores" : "verde blanco rojo"
  },
  { "nombre": "Andorra",
    "colores" : "rojo azul amarillo"
  },
  { "nombre": "Antigua-and-Barbuda",
    "colores" : "amarillo rojo negro azul blanco"
  },
  { "nombre": "Argentina",
    "colores" : "azul blanco amarillo"
  },
  { "nombre": "Armenia",
    "colores" : "rojo azul amarillo"
  },
  { "nombre": "Australia",
    "colores" : "azul rojo blanco"
  },
  { "nombre": "Austria",
    "colores" : "rojo blanco"
  },
  { "nombre": "Azerbaijan",
    "colores" : "azul rojo verde blanco"
  },
  { "nombre": "Bahamas",
    "colores" : "azul amarillo negro"
  },
  { "nombre": "Bahrain",
    "colores" : "rojo blanco"
  },
  { "nombre": "Bangladesh",
    "colores" : "verde rojo"
  },
  { "nombre": "Barbados",
    "colores" : "azul amarillo negro"
  },
  { "nombre": "Belarus",
    "colores" : "rojo verde blanco"
  },
  { "nombre": "Belgium",
    "colores" : "negro amarillo rojo"
  },
  { "nombre": "Belize",
    "colores" : "azul rojo blanco verde"
  },
  { "nombre": "Benin",
    "colores" : "verde rojo amarillo"
  },
  { "nombre": "Bhutan",
    "colores" : "rojo amarillo blanco"
  },
  { "nombre": "Bolivia",
    "colores" : "rojo amarillo verde"
  },
  { "nombre": "Bosnia-and-Herzegovina",
    "colores" : "azul amarillo blanco"
  },
  { "nombre": "Botswana",
    "colores" : "azul negro blanco"
  },
  { "nombre": "Brazil",
    "colores" : "verde amarillo azul blanco"
  },
  { "nombre": "Brunei",
    "colores" : "amarillo negro rojo blanco"
  },
  { "nombre": "Bulgaria",
    "colores" : "blanco verde rojo"
  },
  { "nombre": "Burkina-Faso",
    "colores" : "rojo verde amarillo"
  },
  { "nombre": "Burundi",
    "colores" : "rojo verde blanco"
  },
  { "nombre": "Cambodia",
    "colores" : "azul rojo blanco"
  },
  { "nombre": "Cameroon",
    "colores" : "rojo amarillo verde"
  },
  { "nombre": "Canada",
    "colores" : "rojo blanco"
  },
  { "nombre": "Cape-Verde",
    "colores" : "azul rojo blanco amarillo"
  },
  { "nombre": "Catalunya",
    "colores" : "amarillo rojo"
  },
  { "nombre": "Central-African-Republic",
    "colores" : "rojo azul blanco amarillo verde"
  },
  { "nombre": "Chad",
    "colores" : "rojo amarillo azul"
  },
  { "nombre": "Chile",
    "colores" : "rojo azul blanco"
  },
  { "nombre": "China",
    "colores" : "rojo amarillo"
  },
  { "nombre": "Colombia",
    "colores" : "amarillo azul rojo"
  },
  { "nombre": "Comoros",
    "colores" : "verde amarillo blanco rojo azul"
  },
  { "nombre": "Congo-(Democratic)",
    "colores" : "azul amarillo rojo"
  },
  { "nombre": "Congo-(Republic)",
    "colores" : "verde amarillo rojo"
  },
  { "nombre": "Costa-Rica",
    "colores" : "azul rojo blanco"
  },
  { "nombre": "Cote-d'Ivoire",
    "colores" : "naranja blanco verde"
  },
  { "nombre": "Croatia",
    "colores" : "rojo azul blanco"
  },
  { "nombre": "Cuba",
    "colores" : "rojo azul blanco"
  },
  { "nombre": "Cyprus",
    "colores" : "blanco naranja verde"
  },
  { "nombre": "Czech-Republic",
    "colores" : "rojo azul blanco"
  },
  { "nombre": "Denmark",
    "colores" : "rojo blanco"
  },
  { "nombre": "Djibouti",
    "colores" : "azul verde blanco rojo"
  },
  { "nombre": "Dominica",
    "colores" : "verde rojo blanco negro amarillo"
  },
  { "nombre": "Dominican-Republic",
    "colores" : "rojo azul blanco"
  },
  { "nombre": "East-Timor",
    "colores" : "negro rojo amarillo blanco"
  },
  { "nombre": "Ecuador",
    "colores" : "amarillo azul rojo"
  },
  { "nombre": "Egypt",
    "colores" : "rojo blanco negro"
  },
  { "nombre": "El-Salvador",
    "colores" : "azul blanco"
  },
  { "nombre": "Equatorial-Guinea",
    "colores" : "azul blanco verde rojo"
  },
  { "nombre": "Eritrea",
    "colores" : "verde rojo azul amarillo"
  },
  { "nombre": "Estonia",
    "colores" : "azul negro blanco"
  },
  { "nombre": "Ethiopia",
    "colores" : "rojo amarillo verde azul"
  },
  { "nombre": "Fiji",
    "colores" : "rojo azul blanco"
  },
  { "nombre": "Finland",
    "colores" : "blanco azul"
  },
  { "nombre": "France",
    "colores" : "rojo azul blanco"
  },
  { "nombre": "Gabon",
    "colores" : "verde amarillo azul"
  },
  { "nombre": "Gambia",
    "colores" : "verde azul rojo blanco"
  },
  { "nombre": "Georgia",
    "colores" : "rojo blanco"
  },
  { "nombre": "Germany",
    "colores" : "amarillo rojo negro"
  },
  { "nombre": "Ghana",
    "colores" : "rojo amarillo verde negro"
  },
  { "nombre": "Grecee",
    "colores" : "azul blanco"
  },
  { "nombre": "Grenada",
    "colores" : "rojo amarillo verde"
  },
  { "nombre": "Guatemala",
    "colores" : "azul blanco amarillo"
  },
  { "nombre": "Guinea-Bissau",
    "colores" : "rojo amarillo verde negro"
  },
  { "nombre": "Guinea",
    "colores" : "rojo amarillo verde"
  },
  { "nombre": "Guyana",
    "colores" : "rojo amarillo verde negro blanco"
  },
  { "nombre": "Haiti",
    "colores" : "rojo azul blanco verde"
  },
  { "nombre": "Honduras",
    "colores" : "azul blanco"
  },
  { "nombre": "Hungary",
    "colores" : "rojo blanco verde"
  },
  { "nombre": "Iceland",
    "colores" : "rojo azul blanco"
  },
  { "nombre": "India",
    "colores" : "naranja blanco verde"
  },
  { "nombre": "Indonesia",
    "colores" : "rojo blanco"
  },
  { "nombre": "Iran",
    "colores" : "rojo blanco verde"
  },
  { "nombre": "Iraq",
    "colores" : "rojo blanco negro verde"
  },
  { "nombre": "Ireland",
    "colores" : "verde blanco naranja"
  },
  { "nombre": "Israel",
    "colores" : "blanco azul"
  },
  { "nombre": "Italy",
    "colores" : "rojo blanco verde"
  },
  { "nombre": "Jamaica",
    "colores" : "verde negro amarillo"
  },
  { "nombre": "Japan",
    "colores" : "blanco rojo"
  },
  { "nombre": "Jordan",
    "colores" : "rojo negro blanco verde"
  },
  { "nombre": "Kazakhstan",
    "colores" : "azul amarillo"
  },
  { "nombre": "Kenya",
    "colores" : "negro verde rojo blanco"
  },
  { "nombre": "Kiribati",
    "colores" : "rojo azul blanco amarillo"
  },
  { "nombre": "Korea,-North",
    "colores" : "rojo blanco azul"
  },
  { "nombre": "Korea,-South",
    "colores" : "azul rojo blanco negro"
  },
  { "nombre": "Kosovo",
    "colores" : "azul amarillo blanco"
  },
  { "nombre": "Kuwait",
    "colores" : "verde blanco rojo negro"
  },
  { "nombre": "Kyrgyzstan",
    "colores" : "rojo amarillo"
  },
  { "nombre": "Laos",
    "colores" : "azul rojo blanco"
  },
  { "nombre": "Latvia",
    "colores" : "blanco rojo"
  },
  { "nombre": "Lebanon",
    "colores" : "blanco rojo verde"
  },
  { "nombre": "Lesotho",
    "colores" : "azul blanco verde negro"
  },
  { "nombre": "Liberia",
    "colores" : "azul rojo blanco"
  },
  { "nombre": "Libya",
    "colores" : "rojo negro verde blanco"
  },
  { "nombre": "Liechtenstein",
    "colores" : "azul rojo amarillo"
  },
  { "nombre": "Lithuania",
    "colores" : "rojo amarillo verde"
  },
  { "nombre": "Luxembourg",
    "colores" : "azul rojo blanco"
  },
  { "nombre": "Macedonia",
    "colores" : "rojo amarillo"
  },
  { "nombre": "Madagascar",
    "colores" : "blanco verde rojo"
  },
  { "nombre": "Malawi",
    "colores" : "negro rojo verde"
  },
  { "nombre": "Malaysia",
    "colores" : "azul blanco rojo amarillo"
  },
  { "nombre": "Maldives",
    "colores" : "azul rojo blanco"
  },
  { "nombre": "Mali",
    "colores" : "rojo amarillo verde"
  },
  { "nombre": "Malta",
    "colores" : "rojo blanco"
  },
  { "nombre": "Marshall-Islands",
    "colores" : "azul amarillo blanco"
  },
  { "nombre": "Mauritania",
    "colores" : "verde amarillo"
  },
  { "nombre": "Mauritius",
    "colores" : "rojo azul amarillo verde"
  },
  { "nombre": "Mexico",
    "colores" : "rojo blanco verde"
  },
  { "nombre": "Micronesia-(Federated)",
    "colores" : "azul blanco"
  },
  { "nombre": "Moldova",
    "colores" : "azul amarillo rojo"
  },
  { "nombre": "Monaco",
    "colores" : "rojo blanco"
  },
  { "nombre": "Mongolia",
    "colores" : "azul rojo"
  },
  { "nombre": "Montenegro",
    "colores" : "rojo amarillo"
  },
  { "nombre": "Morocco",
    "colores" : "rojo verde"
  },
  { "nombre": "Mozambique",
    "colores" : "rojoverde negro amarillo"
  },
  { "nombre": "Myanmar",
    "colores" : "rojo amarillo verde"
  },
  { "nombre": "Namibia",
    "colores" : "azul rojo verde blanco"
  },
  { "nombre": "Nauru",
    "colores" : "azul amarillo blanco"
  },
  { "nombre": "Nepal",
    "colores" : "rojo blanco"
  },
  { "nombre": "Netherlands",
    "colores" : "azul blanco rojo"
  },
  { "nombre": "New-Zealand",
    "colores" : "azul rojo blanco"
  },
  { "nombre": "Nicaragua",
    "colores" : "azul blanco"
  },
  { "nombre": "Niger",
    "colores" : "naranja blanco verde"
  },
  { "nombre": "Nigeria",
    "colores" : "verde blanco"
  },
  { "nombre": "Norway",
    "colores" : "azul rojo blanco"
  },
  { "nombre": "Oman",
    "colores" : "rojo verde blanco"
  },
  { "nombre": "Pakistan",
    "colores" : "verde blanco"
  },
  { "nombre": "Palau",
    "colores" : "azul amarillo"
  },
  { "nombre": "Panama",
    "colores" : "azul rojo blanco"
  },
  { "nombre": "Papua-New-Guinea",
    "colores" : "rojo negro"
  },
  { "nombre": "Paraguay",
    "colores" : "azul blanco rojo"
  },
  { "nombre": "Peru",
    "colores" : "rojo blanco"
  },
  { "nombre": "Philippines",
    "colores" : "rojo blanco azul"
  },
  { "nombre": "Poland",
    "colores" : "rojo blanco"
  },
  { "nombre": "Portugal",
    "colores" : "rojo verde"
  },
  { "nombre": "Qatar",
    "colores" : "rojo blanco"
  },
  { "nombre": "Romania",
    "colores" : "rojo azul amarillo"
  },
  { "nombre": "Russia",
    "colores" : "blanco azul rojo"
  },
  { "nombre": "Rwanda",
    "colores" : "azul amarillo verde"
  },
  { "nombre": "Saint-Kitts-and-Nevis",
    "colores" : "verde negro rojo amarillo"
  },
  { "nombre": "Saint-Lucia",
    "colores" : "azul negro amarillo blanco"
  },
  { "nombre": "Saint-Vincent-and-the-Grenadines",
    "colores" : "zul amarillo verde"
  },
  { "nombre": "Samoa",
    "colores" : "rono azul"
  },
  { "nombre": "San-Marino",
    "colores" : "azul blanco"
  },
  { "nombre": "Sao-Tome-and-Principe",
    "colores" : "rojo verde negro"
  },
  { "nombre": "Saudi-Arabia",
    "colores" : "verde blanco"
  },
  { "nombre": "Senegal",
    "colores" : "verde amarillo rojo"
  },
  { "nombre": "Serbia",
    "colores" : "rojo blanco azul"
  },
  { "nombre": "Seychelles",
    "colores" : "azul amarillo blanco rojo verde"
  },
  { "nombre": "Sierra-Leone",
    "colores" : "verde blanco azul"
  },
  { "nombre": "Singapore",
    "colores" : "rojo blanco"
  },
  { "nombre": "Slovakia",
    "colores" : "rojo azul blanco"
  },
  { "nombre": "Slovenia",
    "colores" : "rojo azul blanco"
  },
  { "nombre": "Solomon-Islands",
    "colores" : "azul amarillo verde"
  },
  { "nombre": "Somalia",
    "colores" : "azul blanco"
  },
  { "nombre": "South-Africa",
    "colores" : "azul rojo negro verde amarillo blanco"
  },
  { "nombre": "South-Sudan",
    "colores" : "azul rojo negro verde amarillo blanco"
  },
  { "nombre": "Spain",
    "colores" : "rojo amarillo"
  },
  { "nombre": "Sri-Lanka",
    "colores" : "rojo amarillo naranja verde"
  },
  { "nombre": "Sudan",
    "colores" : "rojo blanco negro verde"
  },
  { "nombre": "Suriname",
    "colores" : "verde rojo blanco"
  },
  { "nombre": "Swaziland",
    "colores" : "azul rojo amarillo"
  },
  { "nombre": "Sweden",
    "colores" : "azul amarillo"
  },
  { "nombre": "Switzerland",
    "colores" : "rojo blanco"
  },
  { "nombre": "Syria",
    "colores" : "rojo blanco negro"
  },
  { "nombre": "Taiwan",
    "colores" : "rojo azul"
  },
  { "nombre": "Tajikistan",
    "colores" : "rojo blanco verde"
  },
  { "nombre": "Tanzania",
    "colores" : "azul negro verde amarillo"
  },
  { "nombre": "Thailand",
    "colores" : "rojo blanco azul"
  },
  { "nombre": "Togo",
    "colores" : "rojo verde amarillo"
  },
  { "nombre": "Tonga",
    "colores" : "rojo blanco"
  },
  { "nombre": "Trinidad-and-Tobago",
    "colores" : "rojo negro blanco"
  },
  { "nombre": "Tunisia",
    "colores" : "rojo blanco"
  },
  { "nombre": "Turkey",
    "colores" : "rojo blanco"
  },
  { "nombre": "Turkmenistan",
    "colores" : "rojo verde"
  },
  { "nombre": "Tuvalu",
    "colores" : "azul rojo blanco amarillo"
  },
  { "nombre": "Uganda",
    "colores" : "rojo amarillo negro"
  },
  { "nombre": "Ukraine",
    "colores" : " azul amarillo"
  },
  { "nombre": "United-Arab-Emirates",
    "colores" : "rojo blanco verde rojo"
  },
  { "nombre": "United-Kingdom",
    "colores" : "azul rojo blanco"
  },
  { "nombre": "United-States-of-America",
    "colores" : "azul rojo blanco"
  },
  { "nombre": "Uruguay",
    "colores" : "azul blanco amarillo"
  },
  { "nombre": "Uzbekistan",
    "colores" : "azul blanco verde rojo"
  },
  { "nombre": "Vanuatu",
    "colores" : "rojo verde negro amarillo"
  },
  { "nombre": "Vatican-City",
    "colores" : "blanco amarillo"
  },
  { "nombre": "Venezuela",
    "colores" : "amarillo azul rojo"
  },
  { "nombre": "Vietnam",
    "colores" : "rojo amarillo"
  },
  { "nombre": "Yemen",
    "colores" : "rojo blanco negro"
  },
  { "nombre": "Zambia",
    "colores" : "verde rojo negro amarillo"
  },
  { "nombre": "Zimbabwe",
    "colores" : "verde rojo negro amarillo"
  }
]
