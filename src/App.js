// Class: SE2840 - Menu Filter
// Name: YOUR NAME HERE
// Class Section: YOUR SECTION HERE

class App extends React.Component {
    constructor(props) {
        super(props);
        // Set state as needed
        this.state = {
            assignments : [],
            classes : [],
            addingClass : false
        };
    }


    render() {

        const updateText = (event) => {
            this.setState({text: event.target.value})
        }

        const addAssignment = (object) => {
            this.state.assignments.push(object);
            this.setState({assignments: this.state.assignments});
        }

        const updateClass = (event) => {
            const name = event.target.value;
            if (name === 'new') {
                this.setState({addingClass: true})
            } else {
                // Need to filter the map with the class selected
            }
        }

        // TODO filter menuItems
        //    Menu items are passed in through props as this.props.menuItems

        // Render the application
        return (
            <div className="HolyGrail">
                <Header/>
                <div className="HolyGrail-body">
                    <div className="HolyGrail-content">
                        <div className="container-md">
                            <MenuGrid assignments={this.state.assignments} switchesFilter={this.state.currentSwitches}
                                      typeFilter={this.state.typeFilter} textFilter={this.state.text}
                                      menuItems={this.props.menuItems}/>
                        </div>
                    </div>
                    <div className="HolyGrail-nav">
                        <div className="m-3">
                            <FilterBar updateClass={updateClass} addAssignment={addAssignment}
                                       updateMethod={updateText} isAddingClass={this.state.addingClass}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
