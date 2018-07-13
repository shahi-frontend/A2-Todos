export class Init {
    load() {
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
            console.log('No todos found. Creating....');
            const todos = [
                {
                    text: 'Complete Angular Tutorial'
                },
                {
                    text: 'Update GitHub'
                },
                {
                    text: 'Update BitBucket'
                }
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return;
        }else {
            console.log('Todos Found...');
        }
    }
}
