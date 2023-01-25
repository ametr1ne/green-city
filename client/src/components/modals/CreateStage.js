import React, {useState} from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { createStage } from "../../http/organizationAPI";

const CreateStage = ({ open, handleOpen }) => {
  const [name, setName] = useState('')
  const addStage = () => {
    createStage({stage: name}).then(data => {
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
      <DialogHeader>Добавить этап</DialogHeader>
      <DialogBody divider>
        <div className="w-96">
          <Input value={name} onChange={(e) => setName(e.target.value)} label="Название этапа" />
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
        <Button variant="gradient" color="green" onClick={addStage}>
          <span>Добавить</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default CreateStage;
