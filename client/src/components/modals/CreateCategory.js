import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { createCategory } from "../../http/organizationAPI";

const CreateCategory = ({ open, handleOpen }) => {
  const [name, setName] = useState('')
  const addCategory = () => {
    createCategory({name: name}).then(data => {
      setName('')
      handleOpen()
    }).catch((e) => alert(e.response.data.message))
  }
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className="flex flex-col items-center"
    >
      <DialogHeader>Добавить категорию</DialogHeader>
      <DialogBody divider>
        <div className="w-96">
          <Input value={name} onChange={(e) => setName(e.target.value)} label="Название категории" />
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Отменить</span>
        </Button>
        <Button type="button" variant="gradient" color="green" onClick={addCategory}>
          <span>Добавить</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default CreateCategory;
