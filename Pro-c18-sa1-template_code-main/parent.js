class Parent {
    constructor(name, job, children) {
        this.name = name;
        this.job = job;
        this.children = children;
    }

    display(){
        console.log(this.name);
        console.log(this.job);
        console.log(this.children);
    }
}