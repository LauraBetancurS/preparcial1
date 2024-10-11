class tasklist extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML=`
        //AQUI PONES COMO LO QUE VA IR EN EL COMPONENTE
        <h1>TaskList</h1>
       
        `
    }
}
customElements.define('task-list',tasklist)
export default tasklist