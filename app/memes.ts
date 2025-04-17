const memesData = [
  {
    id: 1,
    name: "Distracted Boyfriend",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Distracted_boyfriend_meme.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 2,
    name: "Success Kid",
    image: "https://upload.wikimedia.org/wikipedia/en/f/ff/Success_Kid.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 3,
    name: "Grumpy Cat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Grumpy_Cat_%2814556089581%29.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 4,
    name: "Doge",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Doge_%28meme%29.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 5,
    name: "Drake Hotline Bling",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Drake_Hotline_Bling_meme.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 6,
    name: "Trollface",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4e/Trollface.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 7,
    name: "Disaster Girl",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Disaster_Girl_meme.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 8,
    name: "Expanding Brain",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Expanding_Brain_meme.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 9,
    name: "Sad Affleck",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Sad_Affleck_meme.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 10,
    name: "Pepe the Frog",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9e/Pepe_the_Frog_meme.jpg",
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
