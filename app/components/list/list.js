app.component('list', {
    templateUrl: 'app/components/list/list.html',
    controller: function ListController($scope) {
    	var vm = this;
    	// $scope.listTask = arrTask;
    	// vm.listTask = [{
    	// 		name: 'test'
    	// 	}, {
    	// 		name: 'test2'
    	// 	}];

    	vm.$onInit = active;
    	vm.onTaskDelete = onTaskDelete;
    	vm.onCheck = onCheck;
    	// vm.listTask = arrTask;

    function filterActive(item) {
        return (item.active === false);
    }

    function filterComplete(item) {
        return (item.active === true);
    }
    function filterClear(item){
        return (item.active === false);
    }


    	function active () {
    	
    		vm.arrTask = [
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
    		console.log(vm.arrTask);
    	}

  
		
    	// localStorage.setItem("arrTask", arrTask);
   

    	function onTaskDelete (index) {
    		vm.arrTask.splice(index , 1)
    	}

    	   //  vm.onTaskDelete = (taskName) => {
        //     arrTask = arrTask.filter(function (item) {
        //         return (item.taskName !== taskName);
        //     });
        //     vm.showAll();
        //     localStorage.setItem("arrTask", JSON.stringify(arrTask));
            
        // };


    	function showAll(item){
    		vm.listTask;	
    	}

    	$scope.updateListTask = (taskName) => {
            vm.arrTask.push({'taskName': taskName});
            localStorage.setItem("arrTask", JSON.stringify(vm.arrTask));
            taskName = '';
        };

      localStorage.setItem("arrTask", arrTask);

		$scope.filterActive = (item) => {
            vm.arrTask = arrTask.filter(filterActive);
        };

        $scope.filterComplete = (item) => {
            vm.arrTask = arrTask.filter(filterComplete);
        };

        $scope.filterClear = (taskShow) =>{
            vm.arrTask = arrTask.filter(function(item){
                return (item.taskShow !== taskShow);
            });
            vm.arrTask = arrTask.filter(filterClear);
        }
      
    	function onCheck(index){
    		console.log('check' , index);
    	 }
    },
    controllerAs: 'vm'
});