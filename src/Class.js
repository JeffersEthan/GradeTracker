class Class {
     constructor(name, courseCode, sectionNum) {
          this.name = name;
          this.courseCode = courseCode;
          this.sectionNum = sectionNum;
     }

     assignments = new Map();

     addAssignment(type, name, points, pointsAvailable) {
          if (!this.assignments.has(type)) {
               this.assignments.set(type, [])
          }

               this.assignments.get(type).push({
                   name : name,
                   points : points,
                   pointsAvailable : pointsAvailable
               })
     }

     getAllAssignments() {
          return this.assignments;
     }
}