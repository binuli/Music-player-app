import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Soulsounds",
      artist: "Parkbench Epiphany",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#F2B09A", "#7D9AAA"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27500",
    },
    {
      name: "Everlight",
      artist: "Parkbench Epiphany",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F2B09A", "#7D9AAA"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27501",
    },
    {
      name: "Waybackwhen",
      artist: "Philanthrope, Parkbench Epiphany",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F2B09A", "#7D9AAA"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27502",
    },
    {
      name: "Waiting",
      artist: "Parkbench Epiphany",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F2B09A", "#7D9AAA"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27504",
    },
  ];
}

export default chillHop;
