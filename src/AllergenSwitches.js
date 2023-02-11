// Ethan Jeffers
// Section -- 021

class AllergenSwitches extends React.Component {

    render() {
        return (
            <div className="form-check form-switch">
                <input name={this.props.basicName} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label"
                           htmlFor="flexSwitchCheckDefault">{this.props.name}</label>
            </div>
        )
    }
}