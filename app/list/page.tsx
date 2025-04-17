"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import Cookies from "js-cookie";
import memesData from "../memes";
import { Meme } from "../memes";

export default function MemesList() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const savedMemes = Cookies.get("memes");
    if (savedMemes) {
      try {
        const parsedMemes: Meme[] = JSON.parse(savedMemes);
        setMemes(parsedMemes);
      } catch (error) {
        console.error("Error parsing memes from cookies:", error);
        setMemes(memesData);
      }
    } else {
      setMemes(memesData);
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Meme Directory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {memes.map((meme) => (
          <Card
            key={meme.id}
            className="w-full flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex justify-center items-center">
              <h2 className="text-lg font-semibold">{meme.name}</h2>
            </CardHeader>
            <CardBody className="w-full flex justify-center items-center p-4">
              <Image src={meme.image} alt={meme.name} />
            </CardBody>
            <CardFooter className="w-full flex flex-col items-center gap-2">
              <p className="text-sm0">Likes: {meme.likes}</p>
              <a
                href={meme.image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm truncate max-w-full"
              >
                View Image
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
