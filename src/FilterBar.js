// Ethan Jeffers
// Section -- 021

class FilterBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {

        const submitClicked = () => {
            const achievedPoints = document.getElementById('achievedPoints').value;
            const availablePoints = document.getElementById('pointsAvailable').value;
            const title = document.getElementById('assignmentInput').value;
            const selectElement = document.getElementById('addedAssignmentType')
            const selectedValue = selectElement.value;

            this.props.addAssignment({
                achievedPoints : achievedPoints,
                availablePoints : availablePoints,
                title : title,
                selectedValue : selectedValue
            })

        }



        return (
            <div>
                <div className="m-3">
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="bi bi-search"></i></span>
                        <input type="text" onChange={this.props.updateMethod} className="form-control" placeholder="Search..."/>
                    </div>
                </div>
                <label>Filter By Class</label>
                <select className="form-select" onChange={this.props.updateClass} aria-label="Default select example">
                    <option value = "all" selected>All</option>
                    <option value = "new" selected>Add New Class</option>
                </select>
                <label className="mt-3">Add New Assignment</label>
                <form>
                    <div className="form-group">
                        <input type="assignment" className="form-control mt-3" id="assignmentInput"
                               placeholder="Enter Assignment Name"/>
                    </div>
                    <select className="form-select mt-3" id="addedAssignmentType" aria-label="Default select example">
                        <option value = "Exam" selected>Exam</option>
                        <option value="Quiz">Quiz</option>
                        <option value="Lab">Lab</option>
                        <option value="Homework">Homework</option>
                    </select>
                    <form>
                        <div className="row mt-3 mb-3">
                            <div className="col">
                                <input type="text" id="achievedPoints" className="form-control" placeholder="Achieved Points"/>
                            </div>
                            <div className="col">
                                <input type="text" id="pointsAvailable" className="form-control" placeholder="Points Available"/>
                            </div>
                        </div>
                    </form>
                </form>
                <button onClick={submitClicked} className="btn btn-primary">Submit</button>


            </div>
        )
    }


}