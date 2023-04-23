export const userMutation = (state, userInfos1) => {
    state.userInfos = userInfos1;
}
export const userTodosMutation = (state, userTodos) => {
    state.userTodos = userTodos.todos;
}