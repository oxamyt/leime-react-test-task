"use client";

import Cookies from "js-cookie";

import TableEditForm from "./TableEditForm";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Input } from "@heroui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";
import { Button } from "@heroui/button";
import { useState, useEffect } from "react";

import { Meme } from "./memes";

export default function TableContent({
  columns,
  rows,
}: {
  columns: any[];
  rows: any[];
}) {
  const [memes, setMemes] = useState(rows);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", image: "", likes: "" });
  const [errors, setErrors] = useState({ name: "", image: "", likes: "" });

  useEffect(() => {
    const savedMemes = Cookies.get("memes");
    if (savedMemes) {
      try {
        const parsedMemes: Meme[] = JSON.parse(savedMemes);
        setMemes(parsedMemes);
      } catch (error) {
        console.error("Error parsing memes from cookies:", error);
      }
    }
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", image: "", likes: "" };

    if (formData.name.length < 3 || formData.name.length > 100) {
      newErrors.name = "Name must be between 3 and 100 characters.";
      isValid = false;
    }

    try {
      new URL(formData.image);
      if (!formData.image.toLowerCase().endsWith(".jpg")) {
        newErrors.image = "Image must be a valid JPG URL.";
        isValid = false;
      }
    } catch {
      newErrors.image = "Invalid URL.";
      isValid = false;
    }

    const likesNum = Number(formData.likes);
    if (isNaN(likesNum) || likesNum < 0 || likesNum > 99) {
      newErrors.likes = "Likes must be a number between 0 and 99.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleEdit = (meme: Meme) => {
    setSelectedMeme(meme);
    setFormData({
      name: meme.name,
      image: meme.image,
      likes: meme.likes.toString(),
    });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!validateForm()) return;

    const updatedMemes = memes.map((meme) =>
      meme.id === selectedMeme.id
        ? {
            ...meme,
            name: formData.name,
            image: formData.image,
            likes: Number(formData.likes),
          }
        : meme
    );

    setMemes(updatedMemes);
    Cookies.set("memes", JSON.stringify(updatedMemes), { expires: 7 });
    setIsModalOpen(false);
  };

  return (
    <>
      <Table>
        <TableHeader columns={columns}>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody items={memes}>
          {memes.map((item) => (
            <TableRow key={item.id}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.key === "action" ? (
                    <Button
                      color="primary"
                      size="sm"
                      onPress={() => handleEdit(item)}
                    >
                      Edit
                    </Button>
                  ) : (
                    getKeyValue(item, column.key)
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedMeme && (
        <TableEditForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedMeme={selectedMeme}
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          onSave={handleSave}
          validateForm={validateForm}
        />
      )}
    </>
  );
}
