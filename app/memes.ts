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
      "https://i.pinimg.com/736x/15/0b/9f/150b9fcaf6a277bae1fc2b740f886f94.jpg",
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
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7b/36/e2/7b36e210-ce4e-3853-7cda-3046f36b36d9/artwork.jpg/1200x1200bb.jpg",
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
      "https://media.printables.com/media/prints/223fdfce-ed5a-4870-a46c-66e89f358087/images/9466022_702f1f7e-1706-4aaf-8fec-66659d6f052d_c9d981f2-d591-400c-946c-05aafa7fb789/thumbs/cover/800x800/jpg/burbaloni-luliloli.jpg",
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
