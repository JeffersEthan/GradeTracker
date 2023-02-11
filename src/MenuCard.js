// Ethan Jeffers
// Section -- 021

class MenuCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {


        return (
            <div className="col-4 mb-3">
            <div class="card h-100">
                <div class="card-body">
                    <p className="card-title"><b>{this.props.name}</b></p>
                    <div className="card-subtitle">{this.props.type}</div>
                    <div className="card-text">Points Recieved:<br/>
                        <AllergenPill achieved={this.props.gradeAchieved} possible={this.props.pointsAvailable}/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}