// قاعدة بيانات التمارين مع روابط الفيديو

const exercisesData = {

"كارديو": [
{name: "TREADMILL", link: ""},
{name: "BIKE", link: ""},
{name: "ELIPTICAL", link: ""},
{name: "STAIRMASTER", link: ""}
],

"تمارين إحماء و إطالات": [
{name: "ARM SWINGS", link: "https://www.youtube.com/watch?v=AsMMF3YWIIM"},
{name: "ARM CIRCLES", link: "https://www.youtube.com/watch?v=bP52FXTlzjA"},
{name: "EXTERNAL ROTATION", link: "https://www.youtube.com/watch?v=PVdgjHqAes8"},
{name: "FORWARD WALL SLIDE", link: "https://www.youtube.com/watch?v=Tp43JMh_gaM"},
{name: "PUSH-PLUS", link: "https://www.youtube.com/watch?v=I2MM3UBAlU4"},
{name: "Y-RAISE", link: "https://www.youtube.com/watch?v=lXp16YozXgk"},
{name: "HIGH CABLE BICEPS CURL (U WARMUP)", link: "https://www.youtube.com/watch?v=Okl64XegSu0"},
{name: "CROSS-CABLE TRICEPS EXTENSION (U WARMUP)", link: "https://www.youtube.com/watch?v=vrV_gA-m8Wc"},
{name: "LEG SWINGS", link: "https://www.youtube.com/watch?v=UZd_j5dJsaI"},
{name: "LEG CIRCLES", link: "https://www.youtube.com/watch?v=sHo5jJEVkD0"},
{name: "LEG EXTENSION MACHINE (L WARMUP)", link: "https://www.youtube.com/watch?v=4ZDm5EbiFI8"},
{name: "LEG CURL MACHINE", link: "https://www.youtube.com/watch?v=SbSNUXPRkc8"},
{name: "ROCKBACK LAT STRETCH", link: "https://www.youtube.com/watch?v=SPbUJUIXFmg"},
{name: "INCHWORM CRAWLS", link: "https://www.youtube.com/watch?v=Hx1UsDQxT4M"}
],

"بايسيبس (Biceps)": [
{name: "INCLINE DB CURL", link: "https://www.youtube.com/watch?v=zg3goGwXNMA"},
{name: "DB SPIDER CURL", link: "https://www.youtube.com/watch?v=ke2shAeQ0O8"},
{name: "FACE-AWAY CABLE CURL", link: "https://www.youtube.com/watch?v=fV9BpknCjGM"},
{name: "FACE-IN CABLE CURL", link: "https://www.youtube.com/watch?v=5z4y7QRTx1w"},
{name: "HIGH CABLE BICEPS CURL (BICEPS)", link: "https://www.youtube.com/watch?v=Okl64XegSu0"},
{name: "SA DB PREACHER CURL", link: "https://www.youtube.com/watch?v=fuK3nFvwgXk"},
{name: "PREACHER CURL MACHINE", link: "https://www.youtube.com/watch?v=Ja6ZlIDONac"},
{name: "SA PREACHER CURL MACHINE", link: "https://www.youtube.com/watch?v=ysxciKlyBso"},
{name: "SA DB CONCENTRATION CURL", link: "https://www.youtube.com/watch?v=VcBhLQ2Sh8k"},
{name: "SA CABLE CONCENTRATION CURL", link: "https://www.youtube.com/watch?v=bHp1vRuRrdA"},
{name: "STANDING DB BICEPS CURL", link: "https://www.youtube.com/watch?v=NnQCB4uVTNQ"},
{name: "DB HAMMER CURL", link: "https://www.youtube.com/watch?v=nvcqKLIJ_ds"},
{name: "FACE-AWAY CABLE HAMMER CURL", link: "https://www.youtube.com/watch?v=Bx4A5FYZfAU"},
{name: "ROPE CABLE HAMMER CURL", link: "https://www.youtube.com/watch?v=7Tw9fpb5mOo"},
{name: "DB PREACHER HAMMER CURL", link: "https://www.youtube.com/watch?v=_37keawAZlg"},
{name: "REVERSE DB BICEPS CURL", link: "https://www.youtube.com/watch?v=hUA-fIpM7nA"},
{name: "REVERSE CABLE BICEPS CURL", link: "https://www.youtube.com/watch?v=23-WiuDnsZ0"},
{name: "BARBELL CURL", link: "https://www.youtube.com/watch?v=kwG2ipFRgfo"},
{name: "HAMMER CABLE ROPE CURL", link: "https://www.youtube.com/watch?v=V8AR3SGzboU"}
],

"ترايسيبس (Triceps)": [
{name: "CROSS-CABLE TRICEPS EXTENSION (TRICEPS)", link: "https://www.youtube.com/watch?v=vrV_gA-m8Wc"},
{name: "CROSS-CABLE OHT EXTENSION", link: "https://www.youtube.com/watch?v=jtLTcED38Dg"},
{name: "CS DB KICK BACK", link: "https://www.youtube.com/watch?v=rCp0ttMPflc"},
{name: "DB SKULL CRUSHER", link: "https://www.youtube.com/watch?v=IAHDkC6vJw4"},
{name: "SA DB OVERHEAD EXTENSION", link: "https://www.youtube.com/watch?v=F3w6m0aENVQ"},
{name: "DUAL ROPE TRICEPS EXTENSION", link: "https://www.youtube.com/watch?v=89UkdRV2Xco"},
{name: "DUAL ROPE OHT EXTENSION", link: "https://www.youtube.com/watch?v=kqidUIf1eJE"},
{name: "SA CROSS-BODY TRICEPS EXTENSION", link: "https://www.youtube.com/watch?v=L0jD3hrFt20"},
{name: "JM PRESS SMITH MACHINE", link: "https://www.youtube.com/watch?v=L0jD3hrFt20"},
{name: "DUAL CABLE TRICPES PRESS", link: "https://www.youtube.com/watch?v=C3T1tLli9z0"},
{name: "DIPS MACHINE", link: "https://www.youtube.com/watch?v=nhRexXR59Us"},
{name: "CLOSE GRIP BB PRESS", link: "https://www.youtube.com/watch?v=XEFDMwmrLAM"},
{name: "DB KICK BACK", link: "https://www.youtube.com/watch?v=6SS6K3lAwZ8"},
{name: "TRICEPS PUSH DOWN", link: "https://www.youtube.com/watch?v=6Fzep104f0s"}
],

"ساعد (Forearms)": [
{name: "Dumbbell Bench Wrist Curl", link: "https://www.youtube.com/watch?v=2wPpcJBe03o"},
{name: "DB WRIST EXTENSION", link: "https://www.youtube.com/watch?v=UcwgCTkVvIQ"},
{name: "CABLE WRIST CURL", link: "https://www.youtube.com/watch?v=WVAaKJvToe0"},
{name: "CABLE WRIST EXTENSION", link: "https://www.youtube.com/watch?v=AzywEXzVkfU"}
],

"كتف (Shoulder)": [
{name: "60-DEGREE INCLINE SMITH MACHINE", link: "https://www.youtube.com/watch?v=evtRb6cPF-Q"},
{name: "60-DEGREE INCLINE DB PRESS", link: "https://www.youtube.com/watch?v=ZnPMj0nT1K8"},
{name: "NG SHOULDER PRESS MACHINE", link: "https://www.youtube.com/watch?v=LEhz8ZXNWaY"},
{name: "FRONT DELT CABLE PRESS", link: "https://www.youtube.com/watch?v=pBqNjLHYs8A"},
{name: "FRONT DELT CABLE RAISE", link: "https://www.youtube.com/watch?v=6LTGwjyQm4k"},
{name: "CS DB LATERAL RAISE", link: "https://www.youtube.com/watch?v=aUDh4_V1-eY"},
{name: "CS DB Y RAISE", link: "https://www.youtube.com/watch?v=lXp16YozXgk"},
{name: "DUAL CABLE LATERAL RAISE H-WRIST", link: "https://www.youtube.com/watch?v=wQmnJW5x7jU"},
{name: "SA CABLE LATERAL RAISE H-WRIST", link: "https://www.youtube.com/watch?v=VOA6_pa2Cso"},
{name: "SA CABLE LATERAL RAISE H-KNEE", link: "https://www.youtube.com/watch?v=BDwGKpTa83g"},
{name: "SA CABLE LATERAL RAISE H-HIP", link: "https://www.youtube.com/watch?v=vFODLn4zEHk"},
{name: "DUAL CABLE Y-RAISE", link: "https://www.youtube.com/watch?v=hELTuLntsuw"},
{name: "PRONE DB REAR DELT ROW", link: "https://www.youtube.com/watch?v=xiz7hPLRKFo"},
{name: "PRONE DB REAR DELT FLY", link: "https://www.youtube.com/watch?v=CI4YSJjkHiI"},
{name: "REAR DELT ROW MACHINE", link: "https://www.youtube.com/watch?v=KXrvhhZtshY"},
{name: "REAR DELT CABLE ROW", link: "https://www.youtube.com/watch?v=uIdXVGjcfFE"},
{name: "CROSS-CABLE REAR DELT FLY", link: "https://www.youtube.com/watch?v=ywMSCem375A"},
{name: "DB SHRUGS", link: "https://www.youtube.com/watch?v=_t3lrPI6Ns4"},
{name: "CABLE SHRUGS", link: "https://www.youtube.com/watch?v=YykmcX2b-LY"},
{name: "DUAL CABLE SHRUGS", link: "https://www.youtube.com/watch?v=9fOMcScO9Ks"},
{name: "BANDED LATERAL RAISE", link: "https://www.youtube.com/watch?v=yfNg5sFndbw"}
],

"ظهر (Back)": [
{name: "CHEST SUPPORTED DB ROW", link: "https://www.youtube.com/watch?v=9zkP4Cd_cz0"},
{name: "T-BAR ROW MACHINE", link: "https://www.youtube.com/watch?v=0UBRfiO4zDs"},
{name: "UPPER BACK ROW MACHINE", link: "https://www.youtube.com/watch?v=_FrrYQxA6kc"},
{name: "WIDE GRIP CABLE ROW", link: "https://www.youtube.com/watch?v=vqcSh5S_WNg"},
{name: "UPPER BACK PULLDOWN", link: "https://www.youtube.com/watch?v=g6wTsj0sj5s"},
{name: "UPPER BACK PULL-UPS", link: "https://www.youtube.com/watch?v=Hdc7Mw6BIEE"},
{name: "SA REVERSE LAT PULLDOWN MACHINE", link: "https://www.youtube.com/watch?v=X1GiSfvgZww"},
{name: "SA ISO LAT ROW MACHINE", link: "https://www.youtube.com/watch?v=GdL4VJ25xY4"},
{name: "NG CABLE LAT PULLDOWN", link: "https://www.youtube.com/watch?v=kVB6SlEyjQM"},
{name: "NG CABLE ISO LAT ROW", link: "https://www.youtube.com/watch?v=CQkT-W18N5g"},
{name: "SA DB LAT ROW", link: "https://www.youtube.com/watch?v=ePCVxDVvZQw"},
{name: "SA CABLE ILIAC PULLDOWN", link: "https://www.youtube.com/watch?v=Qed5O9toqT8"},
{name: "SA CABLE LUMBAR ROW", link: "https://www.youtube.com/watch?v=0pGi67ADMRg"},
{name: "BENT OVER DB ROW", link: "https://www.youtube.com/watch?v=6TSP1TRMUzs"},
{name: "ONE HAND DB ROW", link: "https://www.youtube.com/watch?v=xl1YiqQY2vA"},
{name: "LAT PULLDOWN", link: "https://www.youtube.com/watch?v=CAwf7n6Luuc"},
{name: "STRAIGHT ARM CABLE PULLDOWN", link: "https://www.youtube.com/watch?v=G9uNaXGTJ4w"},
{name: "PULL UPS", link: "https://www.youtube.com/watch?v=eGo4IYlbE5g"}
],

"صدر (Chest)": [
{name: "15-DEGREE INCLINE SMITH MACHINE", link: "https://www.youtube.com/watch?v=t8Sk7b62oaY"},
{name: "30-DEGREE INCLINE SMITH MACHINE", link: "https://www.youtube.com/watch?v=Huwq0SH5p8Y"},
{name: "15-DEGREE INCLINE DB PRESS", link: "https://www.youtube.com/watch?v=XL9aTB1SHqs"},
{name: "30-DEGREE INCLINE DB PRESS", link: "https://www.youtube.com/watch?v=fZMIrUA3X9o"},
{name: "SA CLAVICULAR CABLE PRESS AROUND", link: "https://www.youtube.com/watch?v=Lo6R9rllS78"},
{name: "CLAVICULAR CABLE FLY", link: "https://www.youtube.com/watch?v=GQiojfl0RgM"},
{name: "CLAVICULAR PUSH-UP", link: "https://www.youtube.com/watch?v=QuaOc1mFcqs"},
{name: "BB BENCH PRESS", link: "https://www.youtube.com/watch?v=vcBig73ojpE"},
{name: "FLAT SMITH MACHINE PRESS", link: "https://www.youtube.com/watch?v=QCjETTKb1l8"},
{name: "FLAT DB PRESS", link: "https://www.youtube.com/watch?v=SfFfLXlpiQQ"},
{name: "CHEST PRESS MACHINE", link: "https://www.youtube.com/watch?v=NwzUje3z0qY"},
{name: "SEATED STERNAL CABLE PRESS", link: "https://www.youtube.com/watch?v=Kd-qABRUyZ0"},
{name: "SA STERNAL CABLE PRESS AROUND", link: "https://www.youtube.com/watch?v=HzTYlVfjQCw"},
{name: "STERNAL CABLE FLY", link: "https://www.youtube.com/watch?v=4Y8QgiT2-OA"},
{name: "STERNAL PUSH-UP", link: "https://www.youtube.com/watch?v=IODxDxX7oi4"},
{name: "DECLINE PRESS MACHINE", link: "https://www.youtube.com/watch?v=qTX2OlhSsnc"},
{name: "DIPS MACHINE", link: "https://www.youtube.com/watch?v=pMarNxAvHPc"},
{name: "ASSISTED DIPS MACHINE", link: "https://www.youtube.com/watch?v=7AwoZWJ3-eo"},
{name: "WEIGHTED DIPS", link: "https://www.youtube.com/watch?v=yN6Q1UI_xkE"},
{name: "COSTAL FLY MACHINE", link: "https://www.youtube.com/watch?v=KwvJEXts2lg"},
{name: "SEATED COSTAL CABLE PRESS", link: "https://www.youtube.com/watch?v=7pJKUQMKIV0"},
{name: "SA COSTAL CABLE PRESS AROUND", link: "https://www.youtube.com/watch?v=mkxnfAjhNeE"},
{name: "COSTAL CABLE FLY", link: "https://www.youtube.com/watch?v=KwvJEXts2lg"},
{name: "COSTAL PUSH-UP", link: "https://www.youtube.com/watch?v=Me9bHFAxnCs"},
{name: "DECLINE PUSH UP", link: "https://www.youtube.com/watch?v=SKPab2YC8BE"},
{name: "DIAMOND PUSH UPS", link: "https://www.youtube.com/watch?v=J0DnG1_S92I"},
{name: "DB FLOOR PRESS", link: "https://www.youtube.com/watch?v=uUGDRwge4F8"},
{name: "DB FLOOR FLY", link: "https://www.youtube.com/watch?v=DNZ6IwviZYE"},
{name: "INCLINE PUSH UP", link: "https://www.youtube.com/watch?v=Me9bHFAxnCs"}
],

"بطن": [
{name: "CABLE ROPE CRUNCH", link: "https://www.youtube.com/watch?v=ToJeyhydUxU"},
{name: "DEAD BUG", link: "https://www.youtube.com/watch?v=rbemelnkHag"},
{name: "BIRD DOG", link: "https://www.youtube.com/watch?v=vzU5xrs1gMQ"},
{name: "PLANK", link: "https://www.youtube.com/watch?v=pSHjTRCQxIw"},
{name: "SIDE PLANK", link: "https://www.youtube.com/watch?v=_R389Jk0tIo"},
{name: "BEAR PLANK", link: "https://www.youtube.com/watch?v=ASThkQl4fWg"},
{name: "WALL SIT", link: "https://www.youtube.com/watch?v=y-wV4Venusw"},
{name: "PALLOF PRESS", link: "https://www.youtube.com/watch?v=XZkN5MljJY4"},
{name: "FLOOR BRIDGE", link: "https://www.youtube.com/watch?v=BKJYG6Pq2yw"},
{name: "WEIGHTED CRUNCH", link: "https://www.youtube.com/watch?v=1YSxi0qv3wg"},
{name: "DECLINE CRUNCH", link: "https://www.youtube.com/watch?v=dVO_yOfvp3A"},
{name: "HANGING LEG RAISE", link: "https://www.youtube.com/watch?v=RuIdJSVTKO4"},
{name: "CAPTAINS CHAIR", link: "https://www.youtube.com/watch?v=nBsP27-x7LU"},
{name: "SUPINE LEG RAISE", link: "https://www.youtube.com/watch?v=q0JVBRHoLz4"},
{name: "BACK EXTENSION", link: "https://www.youtube.com/watch?v=bs7S3RFyIYs"},
{name: "CABLE OBLIQUE CRUNCH", link: "https://www.youtube.com/watch?v=tgusmyhJKgU"},
{name: "PLATE OBLIQUE CRUNCH", link: "https://www.youtube.com/watch?v=oWDdHeJP7QM"},
{name: "CABLE ROTATION", link: "https://www.youtube.com/watch?v=61ara6KJdrU"},
{name: "STANDING CABLE WOOD CHOPPER", link: "https://www.youtube.com/watch?v=he4IhLc1d5k"},
{name: "RUSSIAN TWIST", link: "https://www.youtube.com/watch?v=wkD8rjkodUI"}
],

"رجل (Leg)": [
{name: "BB BACK SQUAT", link: "https://www.youtube.com/watch?v=bEv6CCg2BC8"},
{name: "SQUAT SMITH MACHINE", link: "https://www.youtube.com/watch?v=-eO_VydErV0"},
{name: "PENDULUM SQUAT MACHINE", link: "https://www.youtube.com/watch?v=J8czl8DDnJ4"},
{name: "HACK SQUAT MACHINE (QUADS)", link: "https://www.youtube.com/watch?v=rYgNArpwE7E"},
{name: "LEG PRESS MACHINE (QUADS)", link: "https://www.youtube.com/watch?v=yZmx_Ac3880"},
{name: "LEG EXTENSION MACHINE (QUADS)", link: "https://www.youtube.com/watch?v=m0FOpMEgero"},
{name: "DB BULGARIAN SPLIT SQUAT (QUADS)", link: "https://www.youtube.com/watch?v=vLuhN_glFZ8"},
{name: "DB WALKING LUNGES", link: "https://www.youtube.com/watch?v=IMe2mlmCOs0"},
{name: "DB SPLIT SQUAT", link: "https://www.youtube.com/watch?v=ks0EFdPKw4A"},
{name: "DB GOBLET SQUAT", link: "https://www.youtube.com/watch?v=RUXLuZ_GLrE"},
{name: "BB FRONT SQUAT", link: "https://www.youtube.com/watch?v=HHxNbhP16UE"},
{name: "BW SQUAT", link: "https://www.youtube.com/watch?v=NvHjGILrH0E"},
{name: "SPLIT SQUAT", link: "https://www.youtube.com/watch?v=Py2Qeg-D5T0"}
],

"هامسترينج (Hamstrings)": [
{name: "CONVENTIONAL DEADLIFT", link: "https://www.youtube.com/watch?v=VL5Ab0T07e4"},
{name: "BB SLDL", link: "https://www.youtube.com/watch?v=CN_7cz3P-1U"},
{name: "DB SLDL", link: "https://www.youtube.com/watch?v=cYKYGwcg0U8"},
{name: "STANDING LEG CURL", link: "https://www.youtube.com/watch?v=fyF6FQOUGDI"},
{name: "BB RDL", link: "https://www.youtube.com/watch?v=HCIAl9ro2p4"},
{name: "DB RDL", link: "https://www.youtube.com/watch?v=hQgFixeXdZo"},
{name: "DB LEG CURL", link: "https://www.youtube.com/watch?v=ZHlBSI6JPsA"}
],

"أرداف (Glutes)": [
{name: "HACK SQUAT MACHINE (GLUTES)", link: "https://www.youtube.com/watch?v=-8JzfonfxCs"},
{name: "LEG PRESS MACHINE (GLUTES)", link: "https://www.youtube.com/watch?v=2WzJbFY__lk"},
{name: "DB BULGARIAN SPLIT SQUAT (GLUTES)", link: "https://www.youtube.com/watch?v=8cG_z0Hx9nA"},
{name: "DB REVERSE LUNGES", link: "https://www.youtube.com/watch?v=RcAty9jhVW0"},
{name: "KAS GLUTE BRIDGE", link: "https://www.youtube.com/watch?v=s-lcp_2e21w"},
{name: "BB HIP THRUST", link: "https://www.youtube.com/watch?v=hg9MMvd-MY8"},
{name: "GLUTES BRIDGE SMITH MACHINE", link: "https://www.youtube.com/watch?v=ADgWjz9i42Y"},
{name: "GLUTES MAX CABLE KICKBACK", link: "https://www.youtube.com/watch?v=bVrmtCI00Ys"},
{name: "GLUTES MED CABLE KICKBACK", link: "https://www.youtube.com/watch?v=wkkZfPrEU40"},
{name: "GLUTES KICK BACK MACHINE", link: "https://www.youtube.com/watch?v=Anl9B3vzTiA"},
{name: "FLOOR BRIDGE", link: "https://www.youtube.com/watch?v=Ce3XDuWXXq4"}
],

"مقابض (Hips)": [
{name: "STANDING CABLE HIP ABDUCTION", link: "https://www.youtube.com/watch?v=vSqhrbzZb7A"},
{name: "SEATED HIP ABDUCTION MACHINE", link: "https://www.youtube.com/watch?v=G_8LItOiZ0Q"},
{name: "SEATED HIP ADDUCTION MACHINE", link: "https://www.youtube.com/watch?v=CjAVezAggkI"},
{name: "STANDING CABLE HIP ADDUCTION", link: "https://www.youtube.com/watch?v=SIQrpq6YnT8"},
{name: "HIP ADDUCTION MACHINE", link: "https://www.youtube.com/watch?v=CjAVezAggkI"},
{name: "SIDE LUNGES", link: "https://www.youtube.com/watch?v=HLDhxSqMQyE"}
],

"ربلة (Calves)": [
{name: "SEATED CALF RAISE MACHINE", link: "https://www.youtube.com/watch?v=HSGjUouQZCQ"},
{name: "STANDING CALF RAISE MACHINE", link: "https://www.youtube.com/watch?v=GAQ-oohMhog"},
{name: "PLATE STANDING CALF RAISE", link: "https://www.youtube.com/watch?v=k67UjgvJdEk"},
{name: "HORIZONTAL CALF RAISE", link: "https://www.youtube.com/watch?v=dhRz1Ns60Zg"},
{name: "LEG PRESS CALF RAISE", link: "https://www.youtube.com/watch?v=KxEYX_cuesM"},
{name: "WALL TIPIA RAISE", link: "https://www.youtube.com/watch?v=nQKgHwi8W9E"}
]

};
