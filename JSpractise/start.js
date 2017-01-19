'use strict';
var start = {};
start.test = function () {
    return 'Hello, World!';
}
function Student(name, birth) {
    this.name = name;
    this.birth = birth;
}
Student.prototype.age = function () {
    var year = new Date().getFullYear();
    return year - this.birth;
};
function PrimaryStudent(name, birth, grade) {
    Student.call(this, name, birth);
    this.grade = grade;
}
function inherits (Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}
class MiddleStudent extends Student {
    constructor (name, birth, courses) {
        super(name, birth);
        this.courses = courses;
    }
    score (course_name) {
        return this.courses[course_name];
    }
}
