export default {
    state: {
        blocks: [
            {
                title: 'ПРОФОРГИ',
                lists: []
            },
            {
                title: 'СПОНСОРЫ',
                lists: []
            },
            {
                title: 'ЗАКУПКИ',
                lists: []
            },
            {
                title: 'ИНФОРМИРОВАНИЕ',
                lists: []
            },
            {
                title: 'ТЕХНИКИ',
                lists: []
            },
            {
                title: 'МЕДИА',
                lists: []
            },
            {
                title: 'ДИЗАЙН',
                lists: []
            },
            {
                title: 'СКЛАД',
                lists: []
            },
            {
                title: 'МАТ. ПОМОЩЬ',
                lists: []
            },
            {
                title: 'ХОЗЯЮШКИ',
                lists: []
            },
            {
                title: 'ДЕКОРАТОРЫ',
                lists: []
            },
            {
                title: 'БДНС',
                lists: []
            },
            {
                title: 'СПОРТ',
                lists: []
            },
            {
                title: 'РАБОТА В ДСЛ',
                lists: []
            },
            {
                title: 'УРС',
                lists: []
            },
            {
                title: 'ДОСУГ ПРОФКОМА',
                lists: []
            },
            {
                title: 'КП',
                lists: []
            },
            {
                title: 'СЦЕНАРИСТЫ',
                lists: []
            },
            {
                title: 'IT',
                lists: []
            }
        ],
        block_name: 'BLOCK NAME'
    },
    mutations: {
        chooseBlockName(state, block_name) {
            state.block_name = block_name;
        },
        addList(state, new_list) {
            let todos = [];
            if (new_list) {
                state.blocks.find(x => x.title === state.block_name).lists.push({
                    title: new_list,
                    todos: todos
                });
            }
        },
        removeList(state, list) {
            const list_index = state.blocks.find(x => x.title === state.block_name).lists.indexOf(list);
            state.blocks.find(x => x.title === state.block_name).lists.splice(list_index, 1);
        },
        addTodo(state, new_to) {
            new_to.new_todo_number.todos.push({
                title: new_to.new_todo,
                description: new_to.new_todo_description,
                date: new_to.new_todo_date,
                priority: new_to.new_todo_priority,
                done: false
            });
        },
        removeTodo(state, remove) {
            const todo_index = remove.num.todos.indexOf(remove.todo);
            remove.num.todos.splice(todo_index, 1);
        }
    },
    actions: {
        chooseBlockName(context, block_name) {
            context.commit('chooseBlockName', block_name);
        },
        addList(context, new_list) {
            context.commit('addList', new_list)
        },
        removeList(context, list) {
            context.commit('removeList', list)
        },
        addTodo(context, new_to) {
            context.commit('addTodo', new_to)
        },
        allDone(context, state_list) {
            context.commit('allDone', state_list)
        },
        removeTodo(context, remove) {
            context.commit('removeTodo', remove)
        }
    },
    getters: {
        checkBlocks (state) {
            return state.blocks;
        },
        allLists(state){
            return state.blocks.find(x => x.title === state.block_name).lists;
        },
        BlockName(state){
            return state.block_name;
        }
    }
}
