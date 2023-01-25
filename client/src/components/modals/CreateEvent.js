import React, {useState} from "react";
import {
  Textarea,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { createEvent } from "../../http/eventAPI";

const CreateEvent = ({ open, handleOpen }) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const addEvent = () => {
    createEvent({ title: title, description: desc, date: date })
      .then((data) => {
        setTitle("");
        setDesc("");
        setDate("");
        handleOpen();
      })
      .catch((e) => alert(e.response.data.message));
  };

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className="flex flex-col items-center"
    >
      <DialogHeader>Добавить мероприятие</DialogHeader>
      <DialogBody divider>
        <div className="w-96">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} label="Название мероприятия" />
        </div>
        <div className="w-96 mt-5">
          <Textarea value={desc} onChange={(e) => setDesc(e.target.value)} label="Описание" />
        </div>
        <div className="w-96">
          <Input value={date} onChange={(e) => setDate(e.target.value)} type="date" label="Дата проведения" />
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
        <Button type="button" variant="gradient" color="green" onClick={addEvent}>
          <span>Добавить</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default CreateEvent;
