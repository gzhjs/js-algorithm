    function createLazyMan (name) {
        return new LazyMan(name);
    }

    function LazyMan(str) {
        console.log('hello ' + str);
        this.taskList = [];
        this.taskGoingOn = false;
    }

    LazyMan.prototype.eat = function(mealName) {
        this.taskList.push({
            op: 'eat ',
            args: mealName,
            delay: false
        });
        this.excuteTask();
        return this;
    };

    LazyMan.prototype.sleep = function(limit) {
        this.taskList.push({
            op: 'sleep',
            delay: true,
            limit: limit
        });
        this.excuteTask();
        return this;
    };
    LazyMan.prototype.excuteTask = function() {
        var taskList = this.taskList;
        var task;

        if (!this.taskGoingOn) {
            this.taskGoingOn = true;
            while (taskList.length > 0) {
                task = taskList.pop();
                if (task.delay) {
                    console.log(task.op + ' ' + task.limit + "seconds");
                    setTimeout(() => {
                        console.log(task.op + ' ' + task.limit + "seconds, and wake up");
                        this.taskGoingOn = false;
                        this.excuteTask();
                    }, task.limit * 1000);
                    return this;
                }
                console.log(task.op + ' ' + task.args);
            }
            if (taskList.length === 0) {
                this.taskGoingOn = false;
            }
        }
    };

    // example
    createLazyMan('Jack');
    createLazyMan('Jack').eat('meat').eat('rice');
    createLazyMan('Jack').eat('meat').sleep(5);
    createLazyMan('Jack').sleep(5).eat('meat');
    createLazyMan('Jack').sleep(5).sleep(10);
