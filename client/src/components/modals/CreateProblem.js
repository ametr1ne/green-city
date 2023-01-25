import React, { useContext, useState, useEffect } from "react";
import {
  Textarea,
  Select,
  Option,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { createProblem, fetchOrganizations, fetchStages } from "../../http/organizationAPI";

const CreateProblem = observer(({ open, handleOpen }) => {
  const { orgs } = useContext(Context);

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [stage, setStage] = useState(null)
  const [org, setOrg] = useState(null)

  useEffect(() => {
    fetchOrganizations().then((data) => orgs.setOrganizations(data.rows));
    fetchStages().then((data) => orgs.setStages(data));
  }, []);

  const addProblem = () => {
    createProblem({title: name, description: desc, problemSolutionStageId: stage, organizationId: org}).then(data => {
      setName('')
      setDesc('')
      setStage(null)
      setOrg(null)
      handleOpen()
    }).catch((e) => alert(e.response.data.message))
  }

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className="flex flex-col items-center"
    >
      <DialogHeader>Добавить проблему</DialogHeader>
      <DialogBody divider>
        <div className="w-96">
          <Input value={name} onChange={(e) => setName(e.target.value)} required label="Название проблемы" />
        </div>
        <div className="w-96 mt-5">
          <Textarea value={desc} onChange={(e) => setDesc(e.target.value)} required label="Описание" />
        </div>
        <div className="w-96 mt-5">
          <Select label="Выберите стадию">
          {orgs.stages.map(item => (
                <Option onClick={() => setStage(item.id)} key={item.id}>{item.stage}</Option>
            ))}
          </Select>
        </div>
        <div className="w-96 mt-5">
          <Select label="Выберите организацию">
            {orgs.organizations.map(item => (
                <Option onClick={() => setOrg(item.id)} key={item.id}>{item.name}</Option>
            ))}
          </Select>
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
        <Button type="button" variant="gradient" color="green" onClick={addProblem}>
          <span>Добавить</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
});

export default CreateProblem;
