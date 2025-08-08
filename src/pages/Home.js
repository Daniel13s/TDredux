import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Li from "../components/Li";
import Div from "../components/Div";
import { useNavigate } from "react-router-dom";
import Paragrafo from "../components/Paragrafo";
import Ul from "../components/Ul";
import { ArrowRight, Plus, Trash, Check, Hourglass, Menu } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import rootReducer from "../redux/root-reducer";
import TaskActionTypes from "../redux/task/action-types";
import styled from "styled-components";

const DivStyle2 = styled(Div)`
    background-color: aliceblue;
`

const HomeStyle = styled.div`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    width: auto;
    height: 20%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function Home() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    let {tasks} = useSelector(rootReducer => rootReducer.taskReducer)
    const dispatch = useDispatch()
    
    const navigate = useNavigate()

    
    function handleTask() {
        const newTask = {
            name: name,
            description: description,
            isComplete: false
        }
        dispatch({
            type: TaskActionTypes.CREATE,
            payload: newTask
        })
        setName('')
        setDescription('')
        console.log(tasks)
    }

    function handleComplete(taskName, taskDescription, taskComplete) {
        const task = tasks.find(task => taskName === task.name)
        dispatch({
            type: TaskActionTypes.UPDATE,
            payload: task
        })
    }

    function handleDelete(taskName) {
        const taskDelete = tasks.find(task => task.name === taskName)
        dispatch({
            type: TaskActionTypes.DELETE,
            payload: taskDelete
        })
    }
    function tasksCheck() {
        tasks = JSON.parse(localStorage.getItem("tasks"))
        const tasksCheck = tasks.filter(task => task.isComplete !== false)
        dispatch({
            type: TaskActionTypes.FILTERCHECK,
            payload: tasksCheck
        })
    }

    function tasksPendentes() {
        tasks = JSON.parse(localStorage.getItem("tasks"))
        const tasksPen = tasks.filter(task => task.isComplete !== true)
        dispatch({
            type: TaskActionTypes.FILTERPEN,
            payload: tasksPen
        })
    }

    function allTasks() {
        const allTasks = JSON.parse(localStorage.getItem("tasks"))
        dispatch({
            type: TaskActionTypes.ALLTASKS,
            payload: allTasks
        })
    }

    function seeDetailsTask(taskName, taskDescription, taskComplete) {
        navigate(`/seedetails?name=${taskName}&description=${taskDescription}&isComplete=${taskComplete}`)
    }
    return(
        <HomeStyle>
            <h1>Tasks</h1>
            <Div>
                <Input value={name} onChange={(e)=> {setName(e.target.value)}} type="text" placeholder="Nome da tarefa" />
                <Input value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Descrição da tarefa" />
                <Button onClick={handleTask}><Plus /></Button>
            </Div>

            <Div>
                <Button onClick={tasksCheck}><Check /></Button>
                <Button onClick={tasksPendentes}><Hourglass /></Button>
                <Button onClick={allTasks}><Menu /></Button>
            </Div>

            <Ul>
                {tasks.map((task) => {
                    return(
                        <DivStyle2>
                            <Li onClick={() => handleComplete(task.name, task.description, task.isComplete)} $isComplete={task.isComplete}>
                                <Paragrafo $isComplete={task.isComplete}>{task.name}</Paragrafo>
                                <Paragrafo $isComplete={task.isComplete}>{task.description}</Paragrafo>
                            </Li>
                            <Div $flexdirection="column">
                                <Button $isComplete={task.isComplete} onClick={() => seeDetailsTask(task.name, task.description, task.isComplete)}><ArrowRight /></Button>
                                <Button $isComplete={task.isComplete} onClick={()=> handleDelete(task.name)}><Trash /></Button>
                            </Div>
                        </DivStyle2>
                    )
                })}
            </Ul>
        </HomeStyle>
    )
}

export default Home;
