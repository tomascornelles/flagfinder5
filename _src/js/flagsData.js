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
    "colores" : "negro rojo"
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
    "colores" : ""
  },
  { "nombre": "Iran",
    "colores" : ""
  },
  { "nombre": "Iraq",
    "colores" : ""
  },
  { "nombre": "Ireland",
    "colores" : ""
  },
  { "nombre": "Israel",
    "colores" : ""
  },
  { "nombre": "Italy",
    "colores" : ""
  },
  { "nombre": "Jamaica",
    "colores" : ""
  },
  { "nombre": "Japan",
    "colores" : ""
  },
  { "nombre": "Jordan",
    "colores" : ""
  },
  { "nombre": "Kazakhstan",
    "colores" : ""
  },
  { "nombre": "Kenya",
    "colores" : ""
  },
  { "nombre": "Kiribati",
    "colores" : ""
  },
  { "nombre": "Korea,-North",
    "colores" : ""
  },
  { "nombre": "Korea,-South",
    "colores" : ""
  },
  { "nombre": "Kosovo",
    "colores" : ""
  },
  { "nombre": "Kuwait",
    "colores" : ""
  },
  { "nombre": "Kyrgyzstan",
    "colores" : ""
  },
  { "nombre": "Laos",
    "colores" : ""
  },
  { "nombre": "Latvia",
    "colores" : ""
  },
  { "nombre": "Lebanon",
    "colores" : ""
  },
  { "nombre": "Lesotho",
    "colores" : ""
  },
  { "nombre": "Liberia",
    "colores" : ""
  },
  { "nombre": "Libya",
    "colores" : ""
  },
  { "nombre": "Liechtenstein",
    "colores" : ""
  },
  { "nombre": "Lithuania",
    "colores" : ""
  },
  { "nombre": "Luxembourg",
    "colores" : ""
  },
  { "nombre": "Macedonia",
    "colores" : ""
  },
  { "nombre": "Madagascar",
    "colores" : ""
  },
  { "nombre": "Malawi",
    "colores" : ""
  },
  { "nombre": "Malaysia",
    "colores" : ""
  },
  { "nombre": "Maldives",
    "colores" : ""
  },
  { "nombre": "Mali",
    "colores" : ""
  },
  { "nombre": "Malta",
    "colores" : ""
  },
  { "nombre": "Marshall-Islands",
    "colores" : ""
  },
  { "nombre": "Mauritania",
    "colores" : ""
  },
  { "nombre": "Mauritius",
    "colores" : ""
  },
  { "nombre": "Mexico",
    "colores" : ""
  },
  { "nombre": "Micronesia-(Federated)",
    "colores" : ""
  },
  { "nombre": "Moldova",
    "colores" : ""
  },
  { "nombre": "Monaco",
    "colores" : ""
  },
  { "nombre": "Mongolia",
    "colores" : ""
  },
  { "nombre": "Montenegro",
    "colores" : ""
  },
  { "nombre": "Morocco",
    "colores" : ""
  },
  { "nombre": "Mozambique",
    "colores" : ""
  },
  { "nombre": "Myanmar",
    "colores" : ""
  },
  { "nombre": "Namibia",
    "colores" : ""
  },
  { "nombre": "Nauru",
    "colores" : ""
  },
  { "nombre": "Nepal",
    "colores" : ""
  },
  { "nombre": "Netherlands",
    "colores" : ""
  },
  { "nombre": "New-Zealand",
    "colores" : ""
  },
  { "nombre": "Nicaragua",
    "colores" : ""
  },
  { "nombre": "Niger",
    "colores" : ""
  },
  { "nombre": "Nigeria",
    "colores" : ""
  },
  { "nombre": "Norway",
    "colores" : ""
  },
  { "nombre": "Oman",
    "colores" : ""
  },
  { "nombre": "Pakistan",
    "colores" : ""
  },
  { "nombre": "Palau",
    "colores" : ""
  },
  { "nombre": "Panama",
    "colores" : ""
  },
  { "nombre": "Papua-New-Guinea",
    "colores" : ""
  },
  { "nombre": "Paraguay",
    "colores" : ""
  },
  { "nombre": "Peru",
    "colores" : ""
  },
  { "nombre": "Philippines",
    "colores" : ""
  },
  { "nombre": "Poland",
    "colores" : ""
  },
  { "nombre": "Portugal",
    "colores" : ""
  },
  { "nombre": "Qatar",
    "colores" : ""
  },
  { "nombre": "Romania",
    "colores" : ""
  },
  { "nombre": "Russia",
    "colores" : ""
  },
  { "nombre": "Rwanda",
    "colores" : ""
  },
  { "nombre": "Saint-Kitts-and-Nevis",
    "colores" : ""
  },
  { "nombre": "Saint-Lucia",
    "colores" : ""
  },
  { "nombre": "Saint-Vincent-and-the-Grenadines",
    "colores" : ""
  },
  { "nombre": "Samoa",
    "colores" : ""
  },
  { "nombre": "San-Marino",
    "colores" : ""
  },
  { "nombre": "Sao-Tome-and-Principe",
    "colores" : ""
  },
  { "nombre": "Saudi-Arabia",
    "colores" : ""
  },
  { "nombre": "Senegal",
    "colores" : ""
  },
  { "nombre": "Serbia",
    "colores" : ""
  },
  { "nombre": "Seychelles",
    "colores" : ""
  },
  { "nombre": "Sierra-Leone",
    "colores" : ""
  },
  { "nombre": "Singapore",
    "colores" : ""
  },
  { "nombre": "Slovakia",
    "colores" : ""
  },
  { "nombre": "Slovenia",
    "colores" : ""
  },
  { "nombre": "Solomon-Islands",
    "colores" : ""
  },
  { "nombre": "Somalia",
    "colores" : ""
  },
  { "nombre": "South-Africa",
    "colores" : ""
  },
  { "nombre": "South-Sudan",
    "colores" : ""
  },
  { "nombre": "Spain",
    "colores" : ""
  },
  { "nombre": "Sri-Lanka",
    "colores" : ""
  },
  { "nombre": "Sudan",
    "colores" : ""
  },
  { "nombre": "Suriname",
    "colores" : ""
  },
  { "nombre": "Swaziland",
    "colores" : ""
  },
  { "nombre": "Sweden",
    "colores" : ""
  },
  { "nombre": "Switzerland",
    "colores" : ""
  },
  { "nombre": "Syria",
    "colores" : ""
  },
  { "nombre": "Taiwan",
    "colores" : ""
  },
  { "nombre": "Tajikistan",
    "colores" : ""
  },
  { "nombre": "Tanzania",
    "colores" : ""
  },
  { "nombre": "Thailand",
    "colores" : ""
  },
  { "nombre": "Togo",
    "colores" : ""
  },
  { "nombre": "Tonga",
    "colores" : ""
  },
  { "nombre": "Trinidad-and-Tobago",
    "colores" : ""
  },
  { "nombre": "Tunisia",
    "colores" : ""
  },
  { "nombre": "Turkey",
    "colores" : ""
  },
  { "nombre": "Turkmenistan",
    "colores" : ""
  },
  { "nombre": "Tuvalu",
    "colores" : ""
  },
  { "nombre": "Uganda",
    "colores" : ""
  },
  { "nombre": "Ukraine",
    "colores" : ""
  },
  { "nombre": "United-Arab-Emirates",
    "colores" : ""
  },
  { "nombre": "United-Kingdom",
    "colores" : ""
  },
  { "nombre": "United-States-of-America",
    "colores" : ""
  },
  { "nombre": "Uruguay",
    "colores" : ""
  },
  { "nombre": "Uzbekistan",
    "colores" : ""
  },
  { "nombre": "Vanuatu",
    "colores" : ""
  },
  { "nombre": "Vatican-City",
    "colores" : ""
  },
  { "nombre": "Venezuela",
    "colores" : ""
  },
  { "nombre": "Vietnam",
    "colores" : ""
  },
  { "nombre": "Yemen",
    "colores" : ""
  },
  { "nombre": "Zambia",
    "colores" : ""
  },
  { "nombre": "Zimbabwe",
    "colores" : ""
  }
]
