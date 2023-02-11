// Ethan Jeffers
// Section - 021

class AllergenPill extends React.Component {


    render() {
        const grade = `${this.props.achieved} / ${this.props.possible}`
        const percentage = 100 * (parseInt(this.props.achieved) / parseInt(this.props.possible));
        let color = "";
        if (percentage > 93) {
            color = "success";
        } else if (percentage > 89) {
            color = "primary";
        } else if (percentage > 85) {
            color = "warning";
        } else if (percentage > 81){
            color = "secondary";
        } else {
            color = 'danger';
        }

        const type = `badge rounded-pill text-bg-${color}`

        return (
            <span className={type}>{grade}</span>
        )
    }
}