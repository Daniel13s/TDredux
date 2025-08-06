import { useNavigate, useSearchParams } from "react-router-dom"
import Div from "../components/Div"
import Button from "../components/Button"
import { ArrowLeft, Check, X } from "lucide-react"

function TaskDetails() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const name = searchParams.get("name")
    const description = searchParams.get("description")
    const isComplete = searchParams.get('isComplete')

    function returnHome() {
        navigate("/")
    }

    return(
        <Div $flexdirection='column'>
            <h1>{name}</h1>
            <p>{description}</p>
            {isComplete === "true" ? <Check /> : <X />}
            <Button onClick={returnHome}><ArrowLeft /></Button>
        </Div>
    )
}

export default TaskDetails;