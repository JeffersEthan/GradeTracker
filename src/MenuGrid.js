// Ethan Jeffers
// Section -- 021

class MenuGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const assignments = this.props.assignments.map((entry) => {
           return <MenuCard name={entry.title} gradeAchieved={entry.achievedPoints} type={entry.selectedValue}
                      pointsAvailable={entry.availablePoints}/>
        })

        return (

            <div className="col mb-3">
                <div className="row">
                    <ClassCard name={'Linear Algebra'} grade={'100%'} courseNum={'MA 383'} courseSection={'011'}/>
                    {assignments}
                </div>
            </div>
        )
    }
}