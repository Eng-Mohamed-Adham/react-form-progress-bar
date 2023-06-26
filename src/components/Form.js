import FormInputs from './FormInputs'
import useFormContext from "../hooks/useFormContext"

const Form = () => {

    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
    } = useFormContext()

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }



    const interval = 100 / Object.keys(title).length

    const progress = ((page + 1) * interval).toFixed(2)

    const steps = Object.keys(title).map((step, i) => {
        return <div key={i} className="barmarker">Step {i + 1}</div>
    })

    const content = (
        <form className="form flex-col" onSubmit={handleSubmit}>

            <header className="form-header">
                <h2>SignUp</h2>
                
                <div className="button-container">

                    <button type="button" className={`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>Prev</button>

                    <button type="button" className={`button ${nextHide}`} onClick={handleNext} disabled={disableNext}>Next</button>

                    <button type="submit" className={`button ${submitHide}`} disabled={!canSubmit}>Submit</button>
                </div>
                
            </header>

            <progress className="progress" max="100" value={progress}></progress>


            <FormInputs />

        </form>
    )

    return content
}
export default Form