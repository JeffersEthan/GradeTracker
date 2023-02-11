class ClassCard extends React.Component {

    render() {
        return (
            <div className="col-4 mb-3">
                <div className="card h-100">
                    <div className="card-body" id="classCard">
                        <p className="card-title"><b>{this.props.name}</b></p>
                        <span className="badge rounded-pill text-bg-primary">{this.props.grade}</span>
                        <div className="card-text">{this.props.courseNum} : {this.props.courseSection}<br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}