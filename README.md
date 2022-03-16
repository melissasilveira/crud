# crud

Desafio Final do Módulo React
A proposta é que você desenvolva uma aplicação de Lista de Tarefas, onde é possível listar as tarefas, criar novas tarefas, deletar e editar as tarefas individualmente.

API
Será disponibilizada uma API para que seja possível manipular os recursos de tarefa. A API permite no máximo 20 registros. As respostas da API informam sucesso ou o erro que o usuário deverá corrigir.
End Points da API:
POST: https://otterwise-fake-api.herokuapp.com/tasks/<apiCode>
PUT: https://otterwise-fake-api.herokuapp.com/tasks/<apiCode>/<taskID>
DELETE: https://otterwise-fake-api.herokuapp.com/tasks/<apiCode>/<taskID>
GET: https://otterwise-fake-api.herokuapp.com/tasks/<apiCode>

Página Inicial
A página inicial deve ter uma tabela com a listagem de tarefas. A tabela deve ter três colunas: Título, Descrição e Ações. Cada linha da tabela será preenchida com: Título da tarefa, descrição da tarefa e os botões de ações (Editar e Deletar). A página deve conter um botão responsável por criar novas tarefas, este botão deve abrir uma nova página de criação de tarefa.

Página de Criação de Tarefa
A página de criação de tarefa deve ser um formulário com os campos título, descrição e um botão. Ao clicar no botão deve ser feita a comunicação com a API para criar uma nova tarefa. No envio do formulário é esperado que exista uma validação dos campos obrigatórios, trazendo um feedback para o usuário.

Página de Edição de Tarefa
Quando o usuário clicar no botão de "Editar" relacionado a tarefa na tabela, ele deve ser redirecionado para outra rota com o formulário e os campos já preenchidos com os dados correspondentes a tarefa que está sendo editada. É esperado que tenha validação dos campos ao enviar os dados e também feedback para o usuário.

Confirmação de Exclusão de Tarefa
Quando o usuário clicar no botão "Deletar" correspondente a tarefa na tabela, uma mensagem de confirmação deve surgir na tela informando se o usuário realmente gostaria de excluir a tarefa. Ao confirmar a exclusão de dados, a lista de tarefas deve ser atualizada. É esperado também que tenha um feedback para o usuário.
