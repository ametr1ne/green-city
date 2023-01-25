import React, { useState, useEffect } from "react";
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
import { updateProblem, fetchOrganizations, fetchStages } from "../../http/organizationAPI";

const UpdateProblem = ({ currentData, open, handleOpen, updateProblemStage }) => {

  const [orgs, setOrgs] = useState([])
  const [stages, setStages] = useState([])

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')

  const [orgValue, setOrgValue] = useState('')
  const [stageValue, setStageValue] = useState('')

  const [stageId, setStageId] = useState(null)
  const [orgId, setOrgId] = useState(null)

  useEffect(() => {
    fetchOrganizations().then(data => setOrgs(data.rows), e => alert(e.message))
    fetchStages().then(data => setStages(data), e => alert(e.message))
  }, []);

  useEffect(() => {
    setName(currentData.problem.title)
    setDesc(currentData.problem.description)
    setOrgValue(currentData.org.name)
    setStageValue(currentData.problemStage)
  }, [currentData])

  const editProblem = () => {
    updateProblem(currentData.problem.id, {title: name, description: desc, problemSolutionStageId: stageId, organizationId: orgId}).then(data => {
      updateProblemStage(stageValue)
      handleOpen()
    }).catch((e) => alert(e.message))
  }

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className="flex flex-col items-center"
    >
      <DialogHeader>Изменить проблему</DialogHeader>
      <DialogBody divider>
        <div className="w-96">
          <Input value={name} onChange={(e) => setName(e.target.value)} required label="Название проблемы" />
        </div>
        <div className="w-96 mt-5">
          <Textarea value={desc} onChange={(e) => setDesc(e.target.value)} required label="Описание" />
        </div>
        <div className="w-96 mt-5">
          <Select value={stageValue} onChange={(value) => setStageValue(value)} label="Выберите стадию">
          {stages.map(item => (
                <Option value={item.stage} onClick={() => setStageId(item.id)} key={item.id}>{item.stage}</Option>
            ))}
          </Select>
        </div>
        <div className="w-96 mt-5">
          <Select value={orgValue} onChange={(value) => setOrgValue(value)} label="Выберите организацию">
            {orgs.map(item => (
                <Option value={item.name} onClick={() => setOrgId(item.id)} key={item.id}>{item.name}</Option>
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
        <Button type="button" variant="gradient" color="green" onClick={editProblem}>
          <span>Изменить</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default UpdateProblem;
