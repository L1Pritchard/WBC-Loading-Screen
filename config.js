var config = {
    /* In milliseconds */
    "transitionInterval": 1250,
    "imgInterval": 8000,
    "music": true,
    /* Insert the Youtube Video ID below */
    "videoID": "Dc1OQ8hlog0",
    /* Music Volume (0%-100%) | Lower is Quieter, Higher is Louder */
    "musicVolume": 15,
    /* Whether or not to use an image as the logo or not */
    "useLogo": true,
    "text": {
	/* Text to put in place of the image logo when useLogo is false */
	"logotext": "Header",
	/* Header/title text for the info section */
        "title": "",
	/* The text in the info section */
	"text": "This is some sample text... I think I need to make something up about how awesome the server will be... um... hello?",
    },
    /* You dont have to include the '/imgs/' dir AND ALSO REMEMBER TO ADD THESE IMGS IN YOUR __resource.lua*/ 
    "images": ['bg0.png', 'bg1.png', 'bg2.png', 'bg3.png', 'bg4.png', 'bg5.png', 'bg6.png', 'bg7.png'],
	controls: [
        {key:'F1', desc: 'Phone'},
        {key:'F2', desc: 'Inventory'},
        {key:'F3', desc: 'EasyAdmin'},
        {key:'F6', desc: 'Job menu'},
        {key:'F7', desc: 'Billing menu'},
        {key:'SHIFT', desc: 'Drift'},
    ],
    features: [
        "Extendable",
        "13 jobs",
        "Vehicle / Weapon / Clothe / Barber shops",
        "ESX Drugs / HoldUp",
        "GCPhone",
        "EasyAdmin",
    ],
	"credit": "Loading Screen by Stonemercy",
}
