import React, { useState, Fragment } from "react"
import CreateEvent from "../components/modals/CreateEvent"
import CreateOrganization from "../components/modals/CreateOrganization";
import CreateProblem from '../components/modals/CreateProblem'
import CreateVolunteer from "../components/modals/CreateVolunteer";
import { Battery0Icon, BeakerIcon, BuildingOfficeIcon, CheckBadgeIcon, ChevronLeftIcon, GlobeAmericasIcon, GlobeEuropeAfricaIcon, MagnifyingGlassPlusIcon, UserIcon } from '@heroicons/react/24/solid'
import CreateCategory from "../components/modals/CreateCategory";
import CreateStage from "../components/modals/CreateStage";

const Admin = () => {
    const [openProblemModal, setOpenProblemModal] = useState(false);
    const [openEventModal, setOpenEventModal] = useState(false);
    const [openVolunteerModal, setOpenVolunteerModal] = useState(false);
    const [openOrganizationModal, setOpenOrganizationModal] = useState(false);
    const [openCategoryModal, setOpenCategoryModal] = useState(false);
    const [openStageModal, setOpenStageModal] = useState(false);
 
    const handleOpenProblemModal = () => setOpenProblemModal(!openProblemModal);
    const handleOpenEventModal = () => setOpenEventModal(!openEventModal);
    const handleOpenVolunteerModal = () => setOpenVolunteerModal(!openVolunteerModal);
    const handleOpenOrganizationModal = () => setOpenOrganizationModal(!openOrganizationModal);
    const handleOpenCategoryModal = () => setOpenCategoryModal(!openCategoryModal);
    const handleOpenStageModal = () => setOpenStageModal(!openStageModal);

    return (
        <>
            <div className="container mx-auto px-10 mt-20 flex flex-wrap">
                <div className="container flex flex-wrap gap-2">
                    <button 
                        type="button" 
                        onClick={handleOpenVolunteerModal} 
                        className="btn hover:border-indigo-500/75 hover:shadow-xl transition ease-out duration-500 px-5 h-52 rounded-md border-2 text-2xl flex flex-col justify-center items-center"
                    >
                        <UserIcon className="hover:fill-indigo-500/75 h-12 w-12 text-slate-600 mb-5"/>
                        Добавить волонтера
                    </button>
                    <button 
                        type="button"
                        onClick={handleOpenOrganizationModal} 
                        className="btn hover:border-indigo-500/75 hover:shadow-xl transition ease-out duration-500 px-5 h-52 rounded-md border-2 text-2xl flex flex-col justify-center items-center"
                    >
                        <BuildingOfficeIcon className="h-12 w-12 text-slate-600 mb-5"/>
                        Добавить организацию
                    </button>
                    <button 
                        type="button" 
                        onClick={handleOpenEventModal}
                        className="btn hover:border-indigo-500/75 hover:shadow-xl transition ease-out duration-500 px-5 h-52 rounded-md border-2 text-2xl flex flex-col justify-center items-center"
                    >
                        <GlobeEuropeAfricaIcon className="h-12 w-12 text-slate-600 mb-5"/>
                        Создать мероприятие 
                    </button>
                    <button 
                        type="button" 
                        onClick={handleOpenProblemModal}
                        className="btn hover:border-indigo-500/75 hover:shadow-xl transition ease-out duration-500 px-5 h-52 rounded-md border-2 text-2xl flex flex-col justify-center items-center"
                    >
                        <Battery0Icon className="h-12 w-12 text-slate-600 mb-5"/>
                        Добавить проблему
                    </button>
                </div>
                <div className="container flex mx-auto mt-10">
                    <button 
                        type="button" 
                        onClick={handleOpenCategoryModal}
                        className="btn hover:bg-green-700 bg-green-600 text-white px-5 min-w-md h-10 rounded mr-5"
                    >
                        Добавить категорию организации
                    </button>
                    <button 
                        type="button" 
                        onClick={handleOpenStageModal}
                        className="btn hover:bg-green-700 bg-green-600 text-white px-5 min-w-md h-10 rounded"
                    >
                        Добавить этап выполнения проблемы
                    </button>
                </div>
                <CreateProblem open={openProblemModal} handleOpen={handleOpenProblemModal} />
                <CreateEvent open={openEventModal} handleOpen={handleOpenEventModal}/>
                <CreateOrganization open={openOrganizationModal} handleOpen={handleOpenOrganizationModal}/>
                <CreateVolunteer open={openVolunteerModal} handleOpen={handleOpenVolunteerModal}/>
                <CreateCategory open={openCategoryModal} handleOpen={handleOpenCategoryModal}/>
                <CreateStage open={openStageModal} handleOpen={handleOpenStageModal}/>
            </div>
        </>
    )
}

export default Admin