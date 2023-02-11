// Ethan Jeffers
// Section - 021

class AllergenPill extends React.Component {
  render() {
    const grade = `${this.props.achieved} / ${this.props.possible}`;
    const percentage = 100 * (parseInt(this.props.achieved) / parseInt(this.props.possible));
    let color = "";
    if (percentage > 93) {
      color = "success";
    } else if (percentage > 89) {
      color = "primary";
    } else if (percentage > 85) {
      color = "warning";
    } else if (percentage > 81) {
      color = "secondary";
    } else {
      color = 'danger';
    }
    const type = `badge rounded-pill text-bg-${color}`;
    return /*#__PURE__*/React.createElement("span", {
      className: type
    }, grade);
  }
}
// Ethan Jeffers
// Section -- 021

class AllergenSwitches extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "form-check form-switch"
    }, /*#__PURE__*/React.createElement("input", {
      name: this.props.basicName,
      className: "form-check-input",
      type: "checkbox",
      role: "switch",
      id: "flexSwitchCheckDefault"
    }), /*#__PURE__*/React.createElement("label", {
      className: "form-check-label",
      htmlFor: "flexSwitchCheckDefault"
    }, this.props.name));
  }
}
// Class: SE2840 - Menu Filter
// Name: YOUR NAME HERE
// Class Section: YOUR SECTION HERE

class App extends React.Component {
  constructor(props) {
    super(props);
    // Set state as needed
    this.state = {
      assignments: [],
      classes: []
    };
  }
  render() {
    const updateText = event => {
      this.setState({
        text: event.target.value
      });
    };
    const addAssignment = object => {
      this.state.assignments.push(object);
      this.setState({
        assignments: this.state.assignments
      });
    };
    const updateClass = event => {
      const name = event.target.value;
      this.state.classes.push(new Class('Linear', 'MA 338', '223'));
      this.state.classes[0].addAssignment('Exam', '2', '2', '2');
    };

    // TODO filter menuItems
    //    Menu items are passed in through props as this.props.menuItems

    // Render the application
    return /*#__PURE__*/React.createElement("div", {
      className: "HolyGrail"
    }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
      className: "HolyGrail-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "HolyGrail-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container-md"
    }, /*#__PURE__*/React.createElement(MenuGrid, {
      assignments: this.state.assignments,
      switchesFilter: this.state.currentSwitches,
      typeFilter: this.state.typeFilter,
      textFilter: this.state.text,
      menuItems: this.props.menuItems
    }))), /*#__PURE__*/React.createElement("div", {
      className: "HolyGrail-nav"
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-3"
    }, /*#__PURE__*/React.createElement(FilterBar, {
      updateClass: updateClass,
      addAssignment: addAssignment,
      updateMethod: updateText
    })))), /*#__PURE__*/React.createElement(Footer, null));
  }
}
class Class {
  constructor(name, courseCode, sectionNum) {
    this.name = name;
    this.courseCode = courseCode;
    this.sectionNum = sectionNum;
  }
  assignments = new Map();
  addAssignment(type, name, points, pointsAvailable) {
    if (!this.assignments.has(type)) {
      this.assignments.set(type, []);
    }
    this.assignments.get(type).push({
      name: name,
      points: points,
      pointsAvailable: pointsAvailable
    });
    console.log(this.assignments);
  }
}
class ClassCard extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "col-4 mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "card h-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-body",
      id: "classCard"
    }, /*#__PURE__*/React.createElement("p", {
      className: "card-title"
    }, /*#__PURE__*/React.createElement("b", null, this.props.name)), /*#__PURE__*/React.createElement("span", {
      className: "badge rounded-pill text-bg-primary"
    }, this.props.grade), /*#__PURE__*/React.createElement("div", {
      className: "card-text"
    }, this.props.courseNum, " : ", this.props.courseSection, /*#__PURE__*/React.createElement("br", null)))));
  }
}
// Ethan Jeffers
// Section -- 021

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    const submitClicked = () => {
      const achievedPoints = document.getElementById('achievedPoints').value;
      const availablePoints = document.getElementById('pointsAvailable').value;
      const title = document.getElementById('assignmentInput').value;
      const selectElement = document.getElementById('addedAssignmentType');
      const selectedValue = selectElement.value;
      this.props.addAssignment({
        achievedPoints: achievedPoints,
        availablePoints: availablePoints,
        title: title,
        selectedValue: selectedValue
      });
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "m-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "input-group mb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "input-group-text"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-search"
    })), /*#__PURE__*/React.createElement("input", {
      type: "text",
      onChange: this.props.updateMethod,
      className: "form-control",
      placeholder: "Search..."
    }))), /*#__PURE__*/React.createElement("label", null, "Filter By Class"), /*#__PURE__*/React.createElement("select", {
      className: "form-select",
      onChange: this.props.updateClass,
      "aria-label": "Default select example"
    }, /*#__PURE__*/React.createElement("option", {
      value: "all",
      selected: true
    }, "All"), /*#__PURE__*/React.createElement("option", {
      value: "new",
      selected: true
    }, "Add New Class")), /*#__PURE__*/React.createElement("label", {
      className: "mt-3"
    }, "Add New Assignment"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("input", {
      type: "assignment",
      className: "form-control mt-3",
      id: "assignmentInput",
      placeholder: "Enter Assignment Name"
    })), /*#__PURE__*/React.createElement("select", {
      className: "form-select mt-3",
      id: "addedAssignmentType",
      "aria-label": "Default select example"
    }, /*#__PURE__*/React.createElement("option", {
      value: "Exam",
      selected: true
    }, "Exam"), /*#__PURE__*/React.createElement("option", {
      value: "Quiz"
    }, "Quiz"), /*#__PURE__*/React.createElement("option", {
      value: "Lab"
    }, "Lab"), /*#__PURE__*/React.createElement("option", {
      value: "Homework"
    }, "Homework")), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
      className: "row mt-3 mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "achievedPoints",
      className: "form-control",
      placeholder: "Achieved Points"
    })), /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "pointsAvailable",
      className: "form-control",
      placeholder: "Points Available"
    }))))), /*#__PURE__*/React.createElement("button", {
      onClick: submitClicked,
      className: "btn btn-primary"
    }, "Submit"));
  }
}
// Ethan Jeffers
// Section - 021

class Footer extends React.Component {
  // Returns a simple footer with copyright information
  render() {
    return /*#__PURE__*/React.createElement("footer", {
      className: "bg-light py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-center text-muted"
    }, "Copyright \xA9 2022 Culver Franchising System, LLC. All Rights Reserved")));
  }
}
// Ethan Jeffers
// Section 021

class Header extends React.Component {
  // Returns a simple header title

  render() {
    return /*#__PURE__*/React.createElement("h1", null, "Grade Tracker");
  }
}
// Class: SE2840 - Menu Filter
// Web Application entry point - window.onload

/**
 * Window onload function - Creates the menuItem (unfiltered) array
 *     and renders the application
 */
window.onload = () => {
  const menuItems = [{
    name: "ButterBurger",
    soy: true,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: true,
    type: "Burger"
  }, {
    name: "ButterBurger Cheese",
    soy: true,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: true,
    type: "Burger"
  }, {
    name: "Mushroom & Swiss ButterBurger",
    soy: true,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: true,
    type: "Burger"
  }, {
    name: "Sourdough Melt",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Burger"
  }, {
    name: "The Culver's Bacon Deluxe",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "The Culver's Deluxe",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: true,
    type: "Burger"
  }, {
    name: "Wisconsin Swiss Melt",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Burger"
  }, {
    name: "Crispy Chicken Sandwich",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: true,
    type: "Chicken"
  }, {
    name: "Grilled Chicken Sandwich",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Chicken"
  }, {
    name: "Original Chicken Tenders",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Chicken"
  }, {
    name: "Spicy Crispy Chicken Sandwich",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: true,
    type: "Chicken"
  }, {
    name: "Coleslaw",
    soy: false,
    egg: true,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Side"
  }, {
    name: "Crinkle Cut Fries",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Side"
  }, {
    name: "Mashed Potatoes & Gravy",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Side"
  }, {
    name: "Steamed Broccoli",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Side"
  }, {
    name: "Wisconsin Cheddar Cheese Sauce",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Side"
  }, {
    name: "Chocolate Concrete Mixer made with OREO",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Chocolate Concrete Mixer made with Reese's",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: true,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Cookie Dough Concrete Mixer",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Mint Concrete Mixer made with OREO",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Salted Caramel Concrete Mixer made with Brownie",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Salted Caramel Concrete Mixer made with Cookie Dough",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Salted Caramel Concrete Mixer made with Reese's Peanut Butter Cups",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: true,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Vanilla Concrete Mixer made with Butterfinger",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: true,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Vanilla Concrete Mixer made with Heath English Toffee Bars",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: true,
    gluten: false,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Vanilla Concrete Mixer made with OREO",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Vanilla Concrete Mixer made with Reese's",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: true,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Chocolate Cake Cone",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Chocolate Dish",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Chocolate Waffle Cone",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Vanilla Cake Cone",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Vanilla Dish",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Vanilla Waffle Cone",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Dessert"
  }, {
    name: "Butterfly Jumbo Shrimp Basket",
    soy: false,
    egg: false,
    milk: false,
    fish: true,
    peanut: false,
    shellfish: true,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Seafood"
  }, {
    name: "Butterfly Jumbo Shrimp Dinner",
    soy: false,
    egg: false,
    milk: true,
    fish: true,
    peanut: false,
    shellfish: true,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Seafood"
  }, {
    name: "North Atlantic Cod Dinner",
    soy: true,
    egg: true,
    milk: true,
    fish: true,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Seafood"
  }, {
    name: "North Atlantic Cod Filet Sandwich",
    soy: true,
    egg: true,
    milk: true,
    fish: true,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Seafood"
  }, {
    name: "Chicken Cashew Salad with Grilled Chicken",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: true,
    gluten: false,
    sesame: false,
    type: "Salad"
  }, {
    name: "Cranberry Bacon Bleu Salad with Grilled Chicken",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Salad"
  }, {
    name: "Culver's® Vinaigrette",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Dressing"
  }, {
    name: "Garden Fresco Salad",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Salad"
  }, {
    name: "Garden Fresco Salad with Grilled Chicken",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    sesame: false,
    type: "Salad"
  }, {
    name: "Honey Mustard Dressing",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Dressing"
  }, {
    name: "Ken's® Blue Cheese Dressing",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Dressing"
  }, {
    name: "Ken's® Country French",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Dressing"
  }, {
    name: "Ken's® Raspberry Vinaigrette",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Dressing"
  }, {
    name: "Buttermilk Ranch Dressing",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    sesame: false,
    type: "Dressing"
  }];
  ReactDOM.render( /*#__PURE__*/React.createElement(App, {
    menuItems: menuItems
  }), document.getElementById('root'));
};
// Ethan Jeffers
// Section -- 021

class MenuCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "col-4 mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      class: "card h-100"
    }, /*#__PURE__*/React.createElement("div", {
      class: "card-body"
    }, /*#__PURE__*/React.createElement("p", {
      className: "card-title"
    }, /*#__PURE__*/React.createElement("b", null, this.props.name)), /*#__PURE__*/React.createElement("div", {
      className: "card-subtitle"
    }, this.props.type), /*#__PURE__*/React.createElement("div", {
      className: "card-text"
    }, "Points Recieved:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(AllergenPill, {
      achieved: this.props.gradeAchieved,
      possible: this.props.pointsAvailable
    })))));
  }
}
// Ethan Jeffers
// Section -- 021

class MenuGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const assignments = this.props.assignments.map(entry => {
      return /*#__PURE__*/React.createElement(MenuCard, {
        name: entry.title,
        gradeAchieved: entry.achievedPoints,
        type: entry.selectedValue,
        pointsAvailable: entry.availablePoints
      });
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "col mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement(ClassCard, {
      name: 'Linear Algebra',
      grade: '100%',
      courseNum: 'MA 383',
      courseSection: '011'
    }), assignments));
  }
}
