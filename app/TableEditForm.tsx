"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Dispatch, SetStateAction } from "react";

import { Meme } from "./memes";

interface TableEditFormProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  selectedMeme: Meme;
  formData: { name: string; image: string; likes: string };
  setFormData: Dispatch<
    SetStateAction<{ name: string; image: string; likes: string }>
  >;
  errors: { name: string; image: string; likes: string };
  setErrors: Dispatch<
    SetStateAction<{ name: string; image: string; likes: string }>
  >;
  onSave: () => void;
  validateForm: () => boolean;
}

export default function TableEditForm({
  isModalOpen,
  setIsModalOpen,
  selectedMeme,
  formData,
  setFormData,
  errors,

  onSave,
}: TableEditFormProps) {
  const handleInputChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <ModalContent>
        <ModalHeader>Edit Meme</ModalHeader>
        <ModalBody>
          <Input
            fullWidth
            isDisabled
            label="ID"
            value={selectedMeme.id.toString()}
          />
          <div>
            <Input
              fullWidth
              label="Name"
              value={formData.name}
              errorMessage={errors.likes}
              isInvalid={!!errors.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </div>
          <div>
            <Input
              fullWidth
              label="Image URL (JPG)"
              value={formData.image}
              errorMessage={errors.likes}
              isInvalid={!!errors.image}
              onChange={(e) => handleInputChange("image", e.target.value)}
            />
          </div>
          <div>
            <Input
              fullWidth
              label="Likes"
              type="number"
              value={formData.likes}
              errorMessage={errors.likes}
              isInvalid={!!errors.likes}
              onChange={(e) => handleInputChange("likes", e.target.value)}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onPress={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button color="primary" onPress={onSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
