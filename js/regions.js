// Edit freely. Region shapes are illustrative, not survey data.
const REGIONS = [
  {
    "id": "egypt",
    "name": "Egypt",
    "summary": "Land of Joseph's rise, Israel's bondage, and the Exodus.",
    "detail": "Egypt frames the Joseph narrative (Gen 37-50) and the Exodus (Exod 1-15), and recurs as refuge and as imperial power in the prophets. Its role is both historical and theological: oppression, rescue, and memory.",
    "refs": "Gen 37-50; Exod 1-15; Jer 43",
    "path": "M80 640 L170 600 L235 645 L210 760 L105 770 L70 700 Z"
  },
  {
    "id": "sinai",
    "name": "Sinai / Wilderness",
    "summary": "Where Israel received the covenant and wandered between slavery and land.",
    "detail": "Sinai and the wilderness are about routes and stations more than borders. Israel receives the law here (Exod 19-Num 10). Atlases usually show this as a corridor of movement, and the location of Mount Sinai itself is debated.",
    "refs": "Exod 19-24; Num 10-21",
    "path": "M170 600 L320 545 L395 620 L305 720 L210 760 L235 645 Z"
  },
  {
    "id": "canaan",
    "name": "Canaan / Promised Land",
    "summary": "The broad land of promise, conquest, judges, and monarchy.",
    "detail": "Canaan is the umbrella term for the land of the patriarchs and later Israel. Its extent shifts by period, from tribal allotments (Josh 13-19) to the monarchies. Treat it as the parent of the finer regions below.",
    "refs": "Gen 12; Josh 1-21; Judg",
    "path": "M330 180 L500 170 L560 300 L530 520 L400 610 L315 520 L300 320 Z"
  },
  {
    "id": "galilee",
    "name": "Galilee",
    "summary": "Northern hill country of Jesus' early ministry.",
    "detail": "Nazareth, Capernaum, Cana, and the Sea of Galilee are here. The population was mixed, and in the Gospels most of Jesus' teaching and healing happens in this area.",
    "refs": "Matt 4:12-25; Mark 1; John 2",
    "path": "M380 120 L520 110 L560 170 L500 190 L335 182 L350 140 Z"
  },
  {
    "id": "samaria",
    "name": "Samaria",
    "summary": "Central highlands: capital of the northern kingdom, later a Roman-era district.",
    "detail": "Samaria was the core of the northern kingdom of Israel after the split (1 Kgs 12, 16). By the first century Judeans and Samaritans were rivals, which gives scenes like John 4 and Luke 10 their tension.",
    "refs": "1 Kgs 16; 2 Kgs 17; John 4",
    "path": "M340 190 L500 190 L530 320 L480 400 L360 390 L315 320 Z"
  },
  {
    "id": "judea",
    "name": "Judea",
    "summary": "Southern heartland: Jerusalem, the temple, and the Davidic line.",
    "detail": "Judea contains Jerusalem, Bethlehem, and Hebron. It anchors the Davidic monarchy, the exile and return, and the Passion narratives.",
    "refs": "2 Sam 5; Ezra 1; Luke 2; Matt 21-28",
    "path": "M340 400 L480 400 L530 520 L420 620 L305 565 L300 470 Z"
  },
  {
    "id": "jordan-valley",
    "name": "Jordan Valley",
    "summary": "The river corridor linking Galilee to the Dead Sea.",
    "detail": "The Jordan Valley is a north-south corridor and a boundary. Israel crosses it in Joshua 3, and Jesus is baptized here (Mark 1).",
    "refs": "Josh 3; 2 Kgs 2; Mark 1",
    "path": "M520 160 L610 170 L635 560 L545 560 L500 200 Z"
  },
  {
    "id": "dead-sea",
    "name": "Dead Sea Basin",
    "summary": "Stark desert basin tied to Sodom and borderland wilderness.",
    "detail": "Associated with the Sodom and Gomorrah narrative (Gen 19), the wilderness of Judah, and En-gedi, where David hid from Saul.",
    "refs": "Gen 14, 19; 1 Sam 24",
    "path": "M505 485 L565 495 L545 560 L490 540 Z"
  },
  {
    "id": "transjordan",
    "name": "Transjordan",
    "summary": "East of the Jordan: Moab, Ammon, Gilead, Bashan, Edom.",
    "detail": "The plateau east of the Jordan includes Reuben, Gad, and half of Manasseh (Num 32), and the neighbors Moab and Ammon. Moses views the land from Mount Nebo here.",
    "refs": "Num 32; Deut 34; Ruth 1",
    "path": "M625 170 L850 180 L900 500 L630 560 Z"
  },
  {
    "id": "mesopotamia",
    "name": "Mesopotamia / Babylon",
    "summary": "Riverland of Abraham's origins, Assyria, and Babylon.",
    "detail": "Abraham comes from Ur and Haran (Gen 11-12). Assyria destroyed the northern kingdom (722 BC), and Babylon exiled Judah (586 BC).",
    "refs": "Gen 11-12; 2 Kgs 17, 25; Dan 1",
    "path": "M820 80 L1110 95 L1130 310 L900 300 L850 180 Z"
  },
  {
    "id": "anatolia",
    "name": "Asia Minor / Anatolia",
    "summary": "Setting of Paul's journeys and the seven churches of Revelation.",
    "detail": "In the New Testament era this region (Galatia, Asia, Cappadocia, and others) is where Christianity spreads through Paul and others.",
    "refs": "Acts 13-20; Rev 2-3",
    "path": "M670 40 L950 35 L1110 95 L820 80 Z"
  },
  {
    "id": "arabia",
    "name": "Arabia",
    "summary": "Southern and eastern frontier of trade routes and desert traditions.",
    "detail": "'Arabia' is used loosely in the Bible. It covers Midian (where Moses fled), Sheba, and the Nabatean lands Paul mentions in Gal 1:17.",
    "refs": "Exod 2-3; 1 Kgs 10; Gal 1:17",
    "path": "M580 560 L900 540 L1080 825 L620 845 L520 680 Z"
  }
];
