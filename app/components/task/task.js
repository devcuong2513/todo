app.component('task', {
    templateUrl: 'app/components/task/task.html',
    bindings: {
  		task: '<',
  		taskName: '@',
  		onCheck: '&',
  		onDelete: '&'
	},
    controller: function TaskController($scope) {
    	this.$onInit = function () {
    		console.log('init');
    	}
    },

    controllerAs: 'vm'
});