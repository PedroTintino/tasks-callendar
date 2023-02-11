class Task {

    constructor() {
        this.arrayTask = [];
        this.id = 1;
        

    }

    saveTask(){
        let task = this.readTask();
        
        if(this.dataValidation(task) == true){
            this.addTask(task);
        }
        
        this.tableList();
    
    }

    tableList(){
        let table = document.querySelector('#task-table');
        table.innerText = '';

        for(let i = 0; i < this.arrayTask.length; i++){
            
            let tr = table.insertRow();

            let id = tr.insertCell();
            let dateId = tr.insertCell();
            let nameId =  tr.insertCell();
            let delBtn = tr.insertCell();

            id.innerText = this.arrayTask[i].id;
            dateId.innerText = this.arrayTask[i].taskDate;
            nameId.innerText = this.arrayTask[i].taskName;


            let button = document.createElement('button');
            button.innerText = 'Done';
            button.setAttribute('onclick','task.removeTask('+ this.arrayTask[i].id+')')
            button.classList.add('delete-task-button');
            delBtn.appendChild(button);
            
        }

    }

    addTask(task){
        this.arrayTask.push(task);
        this.id++;
    }

    readTask(){
        let task = {}

        task.id = this.id;
        task.taskName = document.querySelector('#name-input').value;
        task.taskDate = document.querySelector('#date-input').value;
        return task;

    }

    dataValidation(task){
        let errorMsg = '';
        
        if(task.taskName == ''){
            errorMsg += '- Type a valid information(name).';
        }
        if(task.taskDate == ''){
            errorMsg += '- Type a valid information(date).';
        }
        if(errorMsg != ''){
            alert(errorMsg);
            return false;
        }
        return true;
        
    }

    removeTask(id){

        let table = document.querySelector('#task-table');

    for( let i = 0; i < this.arrayTask.length; i++){
            if(this.arrayTask[i].id == id){
                this.arrayTask.splice(i, 1);
                table.deleteRow(i);

            }
        }

    }
}

var task = new Task();