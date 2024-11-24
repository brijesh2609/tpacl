const fs = require("fs");
const path = require("path");

const list = [
  {
    player_id: "1",
    image: "IMG_8903 - Kruti Patel",
  },
  {
    player_id: "2",
    image: "IMG_20230709_234705_632 - Chirag Kankaria",
  },
  {
    player_id: "3",
    image: "IMG_6048 - Kaivalya Lakdawala",
  },
  {
    player_id: "4",
    image: "20231122_122549 - Gaurav Gidwani",
  },
  {
    player_id: "5",
    image: "IMG_6360 - Ajay Gidwani",
  },
  {
    player_id: "6",
    image: "IMG-20231029-WA0021 - Archan Jariwala",
  },
  {
    player_id: "7",
    image: "IMG_0928 - Chirag Saharia",
  },
  {
    player_id: "8",
    image: "IMG_1296 - Divyesh Chawla",
  },
  {
    player_id: "9",
    image: "03b003b2-0f3e-47c5-a694-4cb1a300ee5d - Aruni Diams",
  },
  {
    player_id: "10",
    image: "FB_IMG_1728901544408 - Ravee Malpani",
  },
  {
    player_id: "11",
    image: "Screenshot_20241110_141508_Photos - RINKU virani",
  },
  {
    player_id: "12",
    image: "IMG-20241112-WA0006 - Netaanth Kejriwal",
  },
  {
    player_id: "13",
    image: "WhatsApp Image 2024-11-19 at 11.00.33 AM - Tanish Jain",
    teamsId: "6741807fe2a4d64feab3b9d8",
    sp: 5,
  },
  {
    player_id: "14",
    image: "IMG_4948 - Het Saraiya",
  },
  {
    player_id: "15",
    image: "WhatsApp Image 2024-11-19 at 1.59.38 PM - Yash Vidhani",
  },
  {
    player_id: "16",
    image: "IMG_5012 - Aruni Diams",
  },
  {
    player_id: "17",
    image: "IMG_0229 - Chet Brahmania",
  },
  {
    player_id: "18",
    image: "IMG_3162 - Anuj Jain",
  },
  {
    player_id: "19",
    image: "62d7935c-c5b0-43a2-8c8d-293ebbad57cb - Shivang Agrawal",
  },
  {
    player_id: "20",
    image: "IMG_6086 - Kartikay Seth",
  },
  {
    player_id: "21",
    image: "IMG_2948 - jinay parekh",
  },
  {
    player_id: "22",
    image: "IMG_7572 - Mohammed kaif",
  },
  {
    player_id: "23",
    image: "WhatsApp Image 2024-11-20 at 06.59.10_80489fe9 - Nirvan Mundra",
  },
  {
    player_id: "24",
    image: "IMG_0454 - Sudarshan Maru",
  },
  {
    player_id: "25",
    image: "IMG_7857 - Naman Kejriwal",
  },
  {
    player_id: "26",
    image: "graffiti_night - Binoy Pattharwala",
  },
  {
    player_id: "27",
    image: "4824a462-e77f-4031-862f-1279c58939fa - Apurva Shah",
  },
  {
    player_id: "28",
    image: "IMG_20241120_134810 - Jigar Dhaduk",
  },
  {
    player_id: "29",
    image: "IMG_20240517_234906_451 - Sagar Chawla",
  },
  {
    player_id: "30",
    image: "image - sagar ahuja",
  },
  {
    player_id: "31",
    image: "20240323_181101_003 - Raj Panpaliya",
  },
  {
    player_id: "32",
    image:
      "Screenshot_2024-11-20-16-48-10-92_965bbf4d18d205f782c6b8409c5773a4 - Bhuvan Aggarwal",
  },
  {
    player_id: "33",
    image: "9B480FC3-F8FF-48EA-BCA7-BF6A580D5C63 - Saumya Choraria",
  },
  {
    player_id: "34",
    image: "PICKEL BALL-03028 - Nikhil Raja",
  },
  {
    player_id: "35",
    image: "WhatsApp Image 2024-05-13 at 01.37.26 - Vraj Chaubal",
  },
  {
    player_id: "36",
    image: "Screenshot 2024-11-20 at 5.56.16 PM - Vraj Chaubal",
  },
  {
    player_id: "37",
    image: "IMG-20240429-WA0077 - daswani ronak",
  },
  {
    player_id: "38",
    image: "Screenshot_20241120_182323_Instagram - ram patel",
  },
  {
    player_id: "39",
    image: "20240508_171417 - Mustafa Adib",
  },
  {
    player_id: "40",
    image: "0f1e3895-6119-4f30-b604-739a66341429 - vishu gour",
  },
  {
    player_id: "41",
    image: "IMG_6553 - nihar sodha",
  },
  {
    player_id: "42",
    image: "IMG_1805 - Kush Jariwala",
  },
  {
    player_id: "43",
    image: "IMG20240228111800~2 - Ashish Hemnani",
  },
  {
    player_id: "44",
    image: "592ac76f-616a-4cfd-be02-c4dc620d8102 - mehul rajdev",
  },
  {
    player_id: "45",
    image: "IMG_4129 - Dhruv sarawagi",
  },
  {
    player_id: "46",
    image: "16BF8E4E-43A1-4995-A217-BC2CEE7704F1 - Fatema Juzer Tofafarosh",
  },
  {
    player_id: "47",
    image: "Screenshot_20241110-194415__01 - Nikhil Dayma",
  },
  {
    player_id: "48",
    image: "IMG_6614 - Nirmalkumar Patel",
  },
  {
    player_id: "49",
    image: "IMG_6221 - Akshay Bhogar",
  },
  {
    player_id: "50",
    image: "IMG-20240325-WA0029 - Lavnish Lathigara",
  },
  {
    player_id: "51",
    image: "Screenshot_20241119_211854_Instagram - Neer Jain",
  },
  {
    player_id: "52",
    image: "IMG_8910 - Diwakar Agarwal",
  },
  {
    player_id: "53",
    image: "Fahim_ProfilePic - Ayaan Khan",
  },
  {
    player_id: "54",
    image: "IMG_20241104_145105 - Ravi Ranjan",
  },
  {
    player_id: "55",
    image: "1000001263 - Bony Shah",
  },
  {
    player_id: "56",
    image: "AYUSH GARG PHOTO - ayush garg",
  },
  {
    player_id: "57",
    image: "IMG_3962 - Bhagya Modi",
  },
  {
    player_id: "58",
    image: "32c3b5a6-addd-42be-9b89-6522c9f20db5 - Ashutosh Agarwal",
  },
  {
    player_id: "59",
    image: "WhatsApp Image 2024-11-21 at 12.27.13_c92ab90a - vaibhav goenka",
  },
  {
    player_id: "60",
    image: "10484 - ayush tuteja",
  },
  {
    player_id: "61",
    image: "IMG_9574 - pankaj patel",
  },
  {
    player_id: "62",
    image: "20240928_073232 - Shubham Sonthlia",
  },
  {
    player_id: "63",
    image: "DSC06239 - Arhan Merani",
  },
  {
    player_id: "64",
    image: "79AC3FAE-04AA-4F0C-9AF8-EDFBD4CFA4DE - sagar patel",
  },
  {
    player_id: "65",
    image: "PXL_20230603_164022089.MP - kishore bhatter",
  },
  {
    player_id: "66",
    image: "IMG_20240904_104418_363 - Hraday Desai",
  },
  {
    player_id: "67",
    image: "Screenshot_20241121_140436_Photos - Manan Shah",
  },
  {
    player_id: "68",
    image: "IMG_20220112_224019_986 - myself myself",
  },
  {
    player_id: "69",
    image: "Manmeet - Manmeet",
  },
  {
    player_id: "70",
    image: "20241112_222220 - Naman Parekh",
  },
  {
    player_id: "71",
    image: "IMG-20240521-WA0002 - Nabbya Kejriwal",
  },
  {
    player_id: "72",
    image: "IMG_1814 - Akash Sharma",
  },
  {
    player_id: "73",
    image: "IMG_8702 - Duyman 5630",
  },
  {
    player_id: "74",
    image: "IMG_3729 - satyam chaturvedi",
  },
  {
    player_id: "75",
    image: "WhatsApp Image 2024-11-21 at 3.01.21 PM - Yash Vidhani",
  },
  {
    player_id: "76",
    image: "72023 - 20_Deepak Chugh",
  },
  {
    player_id: "77",
    image: "IMG_6840 - Hritesh Agarwal",
  },
  {
    player_id: "78",
    image: "6dfc80ae-d216-4205-ba10-8b59de7e5fbd - Siddhant Poddar",
  },
  {
    player_id: "79",
    image: "6dfc80ae-d216-4205-ba10-8b59de7e5fbd - Siddhant Poddar",
  },
  {
    player_id: "80",
    image: "IMG_9418 - Sanket Goyal",
  },
  {
    player_id: "81",
    image: "17321890682172759134745704414816 - Akshat Singhal",
  },
  {
    player_id: "82",
    image: "IMG-20241121-WA0000 - Sagar Patodia",
  },
  {
    player_id: "83",
    image: "IMG-20241121-WA0028 - Denim Rawal",
  },
  {
    player_id: "84",
    image: "IMG_3082 - Neet Savaliya",
  },
  {
    player_id: "85",
    image: "IMG_8508 - Vinay Chawla",
  },
  {
    player_id: "86",
    image: "IMG_8810 - Bhavik Kabutarwala",
  },
  {
    player_id: "87",
    image: "WhatsApp Image 2024-11-21 at 6.14.54 PM - Yash Vidhani",
  },
  {
    player_id: "88",
    image: "A7R00005 - Dravya Dholakia",
  },
  {
    player_id: "89",
    image: "IMG_3668 - Mayank Choraria",
  },
  {
    player_id: "90",
    image: "Screenshot_20241121-192742_WhatsApp - myself myself",
  },
  {
    player_id: "91",
    image: "IMG_20230312_182117_092~2_Original - sharmen mehta",
  },
  {
    player_id: "92",
    image: "IMG_2807 - Pritish Sanghani",
  },
  {
    player_id: "93",
    image: "IMG_2807 - Pritish Sanghani",
  },
  {
    player_id: "94",
    image: "20241108_123419 - Ankit kumar Jain",
  },
  {
    player_id: "95",
    image: "IMG_20241120_083506187 - Ayan Jadia",
  },
  {
    player_id: "96",
    image: "5da7a052-7438-4302-8114-ef2ad3373329 - Dhruv Manilawala",
  },
  {
    player_id: "97",
    image: "inbound3344738937368396428 - Nityansh Jain",
  },
  {
    player_id: "98",
    image: "IMG_2947 - Vaibhav Saboo",
  },
  {
    player_id: "99",
    image: "9695A3EE-44A7-4CF7-94FD-785D9354B200 - Shyamal Upadhyay",
  },
  {
    player_id: "100",
    image: "45B4778A-0FC6-460E-8DC8-2C9C915A93C3 - Meet Singhvi",
  },
  {
    player_id: "101",
    image: "IMG_5853 - preetam bhati",
  },
  {
    player_id: "102",
    image: "IMG_2423 - Vivek Jain",
  },
  {
    player_id: "103",
    image: "IMG_0331 - Neel Jariwala",
  },
  {
    player_id: "104",
    image: "IMG_0700 - Harmin Gandhi",
  },
  {
    player_id: "105",
    image: "IMG_4526 - Saksham Dang",
  },
  {
    player_id: "106",
    image: "IMG_4258 - Pratik Agrawal",
  },
  {
    player_id: "107",
    image: "IMG-20241107-WA0057 - Bhadresh Kapopara",
  },
  {
    player_id: "108",
    image: "1000064216 - Sresth Sharda",
  },
  {
    player_id: "109",
    image: "42a02dc5-e4a2-44ac-80b3-2b6c8872e00e - Pratham Berawala",
  },
  {
    player_id: "110",
    image: "IMG_8356 - kumar Jain",
  },
  {
    player_id: "111",
    image: "IMG-20241122-WA0002 - SOHEIL SHAIKH",
  },
  {
    player_id: "112",
    image: "WhatsApp Image 2024-11-21 at 17.48.54_2c94a0e9 - Rishabh Nahata",
  },
  {
    player_id: "113",
    image: "Screenshot_20241122-110533~2 - Jaydeep Chudasama",
  },
  {
    player_id: "114",
    image: "IMG_0788 Copy - Dipansh Bhojawala",
  },
  {
    player_id: "115",
    image: "IMG_7489 - dhruv vyas",
  },
  {
    player_id: "116",
    image: "IMG_2878 - Murtaza Karachiwala",
  },
  {
    player_id: "117",
    image: "IMG_2733 - Sejal Shah",
  },
  {
    player_id: "118",
    image: "IMG_9669 - Himanshu Gupta",
  },
  {
    player_id: "119",
    image: "FullSizeRender - dhruv vyas",
  },
  {
    player_id: "120",
    image: "IMG_3838 - Aditya Parekh",
  },
  {
    player_id: "121",
    image: "IMG_20241121_200316 - Swayam Shetty",
  },
  {
    player_id: "122",
    image: "IMG_4675 - Dhiraj Khanchandani",
  },
  {
    player_id: "123",
    image: "IMG_5897 - Saarth Jhaveri",
  },
  {
    player_id: "124",
    image: "IMG_4526 - Akshay Agarwal",
  },
  {
    player_id: "125",
    image: "Screenshot_20241122_182805_Gallery~2 - nilesh desai",
  },
  {
    player_id: "126",
    image: "IMG-20240928-WA0024 - Rushit Pandya",
  },
  {
    player_id: "127",
    image: "IMG_9187 - Akshay Khurana",
  },
  {
    player_id: "128",
    image: "IMG_8433 - Tathy Patel",
  },
  {
    player_id: "129",
    image: "IMG_0609 - chirag maroo",
  },
  {
    player_id: "130",
    image: "336A8854 - Punarva Shah",
  },
  {
    player_id: "131",
    image: "5A28CF7C-F573-45DB-AFD1-9ADE3302AF68 - Yash Lalwani",
  },
  {
    player_id: "132",
    image: "WhatsApp Image 2024-11-23 at 12.23.34 PM (1) - Yash Vidhani",
  },
  {
    player_id: "133",
    image: "Screenshot 2024-11-23 at 11.53.48 AM",
  },
];

// Function to list and rename files based on custom logic
function renameFiles(folderPath, renameLogic) {
  try {
    // Read all files in the directory
    const files = fs.readdirSync(folderPath);

    // Process each file
    files.forEach((filename) => {
      const oldPath = path.join(folderPath, filename);

      // Skip if it's a directory
      if (fs.statSync(oldPath).isDirectory()) {
        return;
      }

      // Get new filename using the provided logic
      const newFilename = renameLogic(filename);

      if (!newFilename) {
        console.log(`Skipping ${filename} - file not found`);
        return;
      }

      // Skip if no change is needed
      if (newFilename === filename) {
        console.log(`Skipping ${filename} - no change needed`);
        return;
      }

      const newPath = path.join(folderPath, newFilename);

      // Perform the rename operation
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${filename} -> ${newFilename}`);
    });

    console.log("File renaming completed successfully!");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Example of how to use:
const folderPath = "./";

// Choose one of the rename operations:
// addPrefixToTxt(folderPath);
// normalizeFilenames(folderPath);
// addDatePrefix(folderPath);

function getFilenameWithoutExt(filepath) {
  // Get the basename first (removes directory path if present)
  const basename = path.basename(filepath);
  // Remove the extension
  return path.parse(basename).name;
}

// Or create your custom rename logic:
const customRename = (folderPath) => {
  const renameLogic = (filename) => {
    const flName = getFilenameWithoutExt(filename);
    const pl = list.find((l) => l.image === flName);
    if (!pl) return null;
    return `${pl.player_id}.jpeg`;
  };
  renameFiles(folderPath, renameLogic);
};

customRename(folderPath);
