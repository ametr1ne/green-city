import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { createVolunteer } from "../../http/VolunteersAPI";

const CreateVolunteer = ({ open, handleOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const addVolunteer = () => {
    createVolunteer({ fullname: name, email: email, birthDate: birthdate })
      .then((data) => {
        setName("");
        setEmail("");
        setBirthdate("");
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
      <DialogHeader>Добавить волонтера</DialogHeader>
      <DialogBody divider>
        <div className="w-96">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Ф.И.О"
          />
        </div>
        <div className="w-96 mt-5">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            label="Email"
          />
        </div>
        <div className="w-96 mt-5">
          <Input
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            type="date"
            label="Дата рождения"
          />
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
        <Button
          type="button"
          variant="gradient"
          color="green"
          onClick={addVolunteer}
        >
          <span>Добавить</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default CreateVolunteer;
