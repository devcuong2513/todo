let app = angular.module('todoApp', []);
let arrTask = [
    {
        'taskName': 'go out',
        'active': false
    },
    {
        'taskName': 'having',
        'active': false
    },
     {
        'taskName': 'home',
        'active': false
    },
     {
        'taskName': 'hello',
        'active': false
    },
     {
        'taskName': 'what',
        'active': false
    },

    
];

localStorage.setItem("arrTask", arrTask);

function filterActive(item) {
    return (item.active === false);
}

function filterComplete(item) {
    return (item.active === true);
}

function filterClear(item){
    return (item.active === false);
}

app.component('greetUser', {
    templateUrl: 'app/components/TodoForm.html',
    controller: function GreetUserController($scope) {

        $scope.taskName = '';
        $scope.currentUpdating = null;

        $scope.listTask = arrTask;


        $scope.filterActive = () => {
            $scope.listTask = arrTask.filter(filterActive);
        };

        $scope.filterComplete = () => {
            $scope.listTask = arrTask.filter(filterComplete);
        };


    
        $scope.showAll = () => {
            $scope.listTask = arrTask;
        };

        $scope.updateListTask = (taskName) => {
            arrTask.push({'taskName': taskName, 'active': false});
            localStorage.setItem("arrTask", JSON.stringify(arrTask));
            $scope.taskName = '';
        };

        $scope.showUpdateForm = (index) => {
            $scope.currentUpdating = index;
            $scope.flagUpdate = true;
        };

        $scope.updateTask = () => {
            $scope.currentUpdating = null;
        };


        $scope.removeTask = (taskName) => {
            arrTask = arrTask.filter(function (item) {
                return (item.taskName !== taskName);
            });
            $scope.showAll();
            localStorage.setItem("arrTask", JSON.stringify(arrTask));
            
        };

        $scope.filterClear = (taskShow) =>{
            arrTask = arrTask.filter(function(item){
                return (item.taskShow !== taskShow);
            });

            $scope.listTask = arrTask.filter(filterClear);
        }

    },
    controllerAs: 'greet'
});
