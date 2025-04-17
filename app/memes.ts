const memesData = [
  {
    id: 1,
    name: "Tralalero Tralala",
    image:
      "https://i.pinimg.com/736x/d1/17/19/d11719e51c27642cecfe54c188bbb8ef.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 2,
    name: "Bombardino Crocodilo",
    image:
      "https://i.pinimg.com/736x/b5/9c/15/b59c15a55a8789c353f86a090f690259.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 3,
    name: "Trippi Troppi",
    image:
      "https://i.pinimg.com/736x/b6/61/fc/b661fc0ea72368aae9b634e036030e29.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 4,
    name: "Cappuccino Assassino",
    image:
      "https://i.pinimg.com/736x/c5/80/20/c58020f25be386d54ca470c040521fb0.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 5,
    name: "Lirili Larilla",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQob2Litc9uLU-96Ui8K5fIcdH6Lyy_IlSoRQ&s",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 6,
    name: "Glorbo Fruttodrillo",
    image: "https://pbs.twimg.com/media/GoFxFlZWQAAw-rX.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 7,
    name: "Balerina Capucina",
    image:
      "https://i.kym-cdn.com/entries/icons/original/000/053/748/cover2.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 8,
    name: "Bobritto Bandito",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ov6NDl0FQ7YHdXadeNBcQca11fCsfITaAU_M_BMAdqcWrkKX2OMHVzRO8WAIRhNn9CY&usqp=CAU",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 9,
    name: "Brr Brr Patapim",
    image:
      "https://cdn.thingiverse.com/assets/fa/b9/dc/73/95/featured_preview_images1.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 10,
    name: "Burbaloni Luliloli ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kv2bXaXVzgx3eFv0n6iAzQhJY6XaXG5XIQ&s",
    likes: Math.floor(Math.random() * 100),
  },
];

export default memesData;

export interface Meme {
  id: number;
  name: string;
  image: string;
  likes: number;
}
