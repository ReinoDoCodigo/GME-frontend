import { define } from "@/utils.ts";



export default define.page(function Departamentos(){
    return (
        <div>
            <nav class="level">
                <div class="level-left">
                    <div class="level-item">
                    <p class="subtitle is-5"><strong>Departamentos</strong></p>
                    </div>
                    <div class="level-item">
                    <div class="field has-addons">
                        <p class="control">
                        <input class="input" type="text" placeholder="Digite o nome" />
                        </p>
                        <p class="control">
                        <button 
                            type="button"
                            class="button">Pesquisar</button>
                        </p>
                    </div>
                    </div>
                </div>

                <div class="level-right">
                    <p class="level-item"><button type="button" class="button is-success">
                        Novo Departamento
                        </button></p>
                </div>
            </nav>
        </div>
    );
});